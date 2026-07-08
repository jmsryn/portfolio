'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Music2 } from 'lucide-react';

type NowPlaying = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progressMs?: number;
  durationMs?: number;
  playedAt?: string;
};

export default function SpotifyNowPlaying({ className = '' }: { className?: string }) {
  const [data, setData] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: NowPlaying = await res.json();
        if (isMounted) setData(json);
      } catch {
        if (isMounted) setData(null);
      }
    };
    fetchData();
    const id = setInterval(fetchData, 30000);
    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, []);

  const isPlaying = Boolean(data?.isPlaying);
  const title = data?.title ?? 'Nothing playing';
  const artist = data?.artist ?? 'Spotify';
  const image = data?.albumImageUrl ?? '';
  const url = data?.songUrl;

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 min-w-0 transition-colors"
        aria-label={`${title} by ${artist} on Spotify`}
      >
        {children}
      </a>
    ) : (
      <div className="flex items-center gap-3 min-w-0">{children}</div>
    );

  return (
    <div className={`flex items-center gap-3 min-w-0 ${className}`}>
      <Wrapper>
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-muted">
          {image ? (
            <Image
              src={image}
              alt={`${title} album art`}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          ) : (
            <Music2 className="h-4 w-4 text-muted-foreground" />
          )}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5">
            {isPlaying ? (
              <span className="flex items-end gap-[2px] h-2.5" aria-hidden>
                <span className="w-[2px] bg-accent animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
                <span className="w-[2px] bg-accent animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '150ms' }} />
                <span className="w-[2px] bg-accent animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }} />
              </span>
            ) : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70">
              {isPlaying ? 'Now playing' : 'Last played'}
            </span>
          </span>
          <span className="block truncate text-sm text-foreground group-hover:text-accent transition-colors">
            {title}
          </span>
          <span className="block truncate text-xs text-muted-foreground">{artist}</span>
        </span>
      </Wrapper>
    </div>
  );
}
