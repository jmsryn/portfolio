import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const SPOTIFY_RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Spotify environment variables are not set');
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to get access token: ${response.status} ${text}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

async function getNowPlaying(accessToken: string) {
  const res = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });

  if (res.status === 204 || res.status === 202) {
    return null;
  }
  if (!res.ok) {
    return null;
  }
  const json: {
    is_playing?: boolean;
    progress_ms?: number;
    item?: {
      name?: string;
      duration_ms?: number;
      external_urls?: { spotify?: string };
      album?: { name?: string; images?: { url?: string }[] };
      artists?: { name?: string }[];
    };
  } = await res.json();
  if (!json || !json.item) return null;

  const item = json.item ?? {};
  return {
    isPlaying: json.is_playing as boolean,
    title: (item.name ?? '') as string,
    artist: (item.artists ?? []).map((a) => a.name).join(', '),
    album: (item.album?.name ?? '') as string,
    albumImageUrl: (item.album?.images?.[0]?.url ?? '') as string,
    songUrl: item.external_urls?.spotify as string,
    progressMs: json.progress_ms as number | undefined,
    durationMs: item.duration_ms as number | undefined,
  };
}

async function getLastPlayed(accessToken: string) {
  const res = await fetch(SPOTIFY_RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch recently played');
  }
  const json: {
    items?: {
      played_at?: string;
      track?: {
        name?: string;
        duration_ms?: number;
        external_urls?: { spotify?: string };
        album?: { name?: string; images?: { url?: string }[] };
        artists?: { name?: string }[];
      };
    }[];
  } = await res.json();
  const item = json.items?.[0];
  if (!item) return null;
  const track = item.track as {
    name?: string;
    duration_ms?: number;
    external_urls?: { spotify?: string };
    album?: { name?: string; images?: { url?: string }[] };
    artists?: { name?: string }[];
  };
  return {
    isPlaying: false,
    title: (track?.name ?? '') as string,
    artist: (track?.artists ?? []).map((a) => a.name).join(', '),
    album: (track?.album?.name ?? '') as string,
    albumImageUrl: (track?.album?.images?.[0]?.url ?? '') as string,
    songUrl: track?.external_urls?.spotify as string,
    playedAt: item.played_at as string,
    durationMs: track?.duration_ms as number | undefined,
  };
}

export async function GET() {
  try {
    const token = await getAccessToken();
    const now = await getNowPlaying(token);
    if (now) {
      return NextResponse.json(now, { headers: { 'Cache-Control': 'no-store' } });
    }
    const last = await getLastPlayed(token);
    return NextResponse.json(last ?? { isPlaying: false }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Spotify error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


