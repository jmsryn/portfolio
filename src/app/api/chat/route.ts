import { NextResponse } from 'next/server';
import { answerProfileQuestion, PROFILE_KNOWLEDGE } from '@/lib/profile-guide';
import { buildProfileRequest, createChatBudget, parseProfileResponse, validateChatInput } from '@/lib/profile-chat-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const budget = createChatBudget();
const headers = { 'Cache-Control': 'no-store' };

export function GET() {
  return NextResponse.json({ mode: process.env.OPENAI_API_KEY ? 'openai' : 'profile' }, { headers });
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (request.headers.get('sec-fetch-site') === 'cross-site' || (origin && origin !== new URL(request.url).origin)) {
    return NextResponse.json({ error: 'This chat is available from the portfolio.' }, { status: 403, headers });
  }
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return NextResponse.json({ error: 'Send a JSON question.' }, { status: 415, headers });
  }
  // Limit the actual streamed body, not only the visitor-provided Content-Length.
  const reader = request.body?.getReader();
  if (!reader) return NextResponse.json({ error: 'A question is required.' }, { status: 400, headers });
  let size = 0, raw = '';
  const decoder = new TextDecoder();
  let input;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > 20_000) {
        await reader.cancel();
        return NextResponse.json({ error: 'That conversation is too long.' }, { status: 413, headers });
      }
      raw += decoder.decode(chunk.value, { stream: true });
    }
    input = validateChatInput(JSON.parse(raw + decoder.decode()));
  } catch {
    return NextResponse.json({ error: 'Please send a valid question.' }, { status: 400, headers });
  } finally { reader.releaseLock(); }
  if (!input) return NextResponse.json({ error: 'Use a question of up to 400 characters and at most 6 previous messages.' }, { status: 400, headers });

  const fallback = answerProfileQuestion(input.question);
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ ...fallback, mode: 'profile' }, { headers });
  const release = budget.acquire();
  if (!release) {
    return NextResponse.json({ ...fallback, mode: 'profile', notice: 'AI chat is busy. Here is a profile-based answer instead.' }, { headers: { ...headers, 'Retry-After': '60' } });
  }
  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(buildProfileRequest(PROFILE_KNOWLEDGE, input.question, input.history, process.env.OPENAI_MODEL || 'gpt-5.4-mini')),
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(20_000)]),
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Provider unavailable');
    const answer = parseProfileResponse(await response.json(), PROFILE_KNOWLEDGE);
    if (!answer) throw new Error('Invalid provider answer');
    return NextResponse.json({ ...answer, mode: 'openai' }, { headers });
  } catch {
    // No request bodies, provider responses, credentials, or conversation logs.
    return NextResponse.json({ ...fallback, mode: 'profile', notice: 'AI chat is temporarily unavailable. Here is a profile-based answer instead.' }, { headers });
  } finally { release(); }
}
