import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // IMPORTANT: Must exactly match the URI you configured in the Spotify dashboard
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/spotify/callback';

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'Missing SPOTIFY_CLIENT_ID/SECRET' }, { status: 500 });
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const tokenRes = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const json = await tokenRes.json();
  if (!tokenRes.ok) {
    return NextResponse.json(json, { status: tokenRes.status });
  }

  // Returns access_token and refresh_token. Copy refresh_token to .env.
  return NextResponse.json(json, { headers: { 'Cache-Control': 'no-store' } });
}


