# Portfolio chat

The “Ask about James” button opens a side panel on the homepage. With no API key, it matches questions to prepared answers from the public profile. With a key, it uses the OpenAI Responses API for natural questions and follow-ups.

## Enable OpenAI

1. Copy `.env.example` to `.env.local` (or add the variables to your hosting environment).
2. Set `OPENAI_API_KEY` to your OpenAI API project key. Never prefix it with `NEXT_PUBLIC_` or commit it.
3. Leave `OPENAI_MODEL=gpt-5.4-mini`, or select a compatible Responses model supporting structured outputs and `reasoning.effort: none`.
4. Restart the Next.js server or redeploy, refresh the page, then reopen the chat. Its footer will explain that questions are sent to OpenAI.

An OpenAI API project with available billing is required for live replies. No SDK installation is needed; requests use server-side `fetch`. The API key never enters a client component or response.

## Profile and answer behavior

Edit `src/lib/profile-guide.ts` when the résumé or portfolio changes. It contains the curated public facts, source links, prepared answers, and the distinction between professional QA work and AI-assisted hobby apps. The model receives those facts, not private files, analytics, or environment values. Uploading a new PDF alone does not update this source.

The prompt asks the model to answer only from these facts and admit missing information. PJPT is explicitly in progress. Generated text is rendered as text, and source links are selected in code from the known profile. AI answers can still be inaccurate; a citation is a reference for checking, not a guarantee of factual correctness.

Conversation history exists in page memory, is capped, and is cleared on reload or “Start a new chat.” The app does not log or persist messages. In AI mode, the latest question and up to six prior messages are sent to OpenAI. Requests use `store: false`; this disables API response storage for later retrieval but does not promise zero provider retention. See [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data).

Requests are limited to a 400-character question, six prior messages, a 20 KB body, 900 output tokens, and a 20-second upstream timeout. A per-process backstop permits two concurrent AI requests, six per minute, and sixty per hour. It is global to that process, resets on restart, and does not coordinate between replicas. For a public deployment, configure your hosting platform’s rate limits and OpenAI project usage controls; this in-memory limit is not a durable spending cap. Missing credentials, provider failures, and limit exhaustion return a clearly labeled profile-based fallback.

## Verification

Run `npm run test:profile` with Node 22.6+ to check answer routing, unpublished details, request validation, output parsing, and the request budget. The tests use Node’s experimental TypeScript stripping. Check the browser for keyboard navigation, Escape, reset/stop, source links, and both themes.

Live answer quality and account/model access need verification after adding the key. The automated tests do not make paid OpenAI requests.

Implementation references: [Responses API](https://developers.openai.com/api/reference/typescript/resources/responses/methods/create), [structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs), [GPT-5.4 Mini](https://developers.openai.com/api/docs/models/gpt-5.4-mini).
