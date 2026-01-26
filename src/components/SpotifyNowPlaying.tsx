'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Music2, Pause } from 'lucide-react';

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

export default function SpotifyNowPlaying({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const [data, setData] = useState<NowPlaying | null>(null);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: NowPlaying = await res.json();
        if (isMounted) setData(json);
      } catch (e) {
        const message = e instanceof Error ? e.message : 'Error';
        if (isMounted) setError(message);
      }
    };
    fetchData();
    const id = setInterval(fetchData, 30000);
    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, []);

  const isPlaying = data?.isPlaying;
  const title = data?.title ?? 'Not playing';
  const artist = data?.artist ?? '';
  const image = data?.albumImageUrl ?? '';
  const url = data?.songUrl ?? undefined;

  const containerPadding = compact ? 'px-2 py-1' : 'px-4 py-3';
  const gap = compact ? 'gap-2' : 'gap-4';
  const imageSize = compact ? 24 : 48;
  const imageBoxClass = compact
    ? 'relative w-6 h-6 border border-foreground bg-muted flex items-center justify-center flex-shrink-0'
    : 'relative w-12 h-12 border-2 border-foreground bg-muted flex items-center justify-center flex-shrink-0';
  const titleClass = compact
    ? 'text-xs font-bold text-foreground truncate max-w-[140px] uppercase font-mono'
    : 'text-sm font-bold text-foreground truncate uppercase font-mono';
  const subClass = 'text-xs text-muted-foreground truncate font-mono';

  return (
    <div className={`max-w-full flex items-center ${gap} ${containerPadding} border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_var(--primary)] hover:translate-x-[2px] hover:translate-y-[2px] transition-transform duration-200 ${className}`}>
      <div className={imageBoxClass}>
        {image ? (
          <Image src={image} alt={title} width={imageSize} height={imageSize} className="object-cover grayscale hover:grayscale-0 transition-all" />
        ) : (
          <Music2 className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className={titleClass} title={title}>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {title}
                </a>
              ) : (
                title
              )}
            </div>
            {!compact && (
              <div className={subClass}>
                {artist}
              </div>
            )}
          </div>

          {!compact && (
            <div className="flex-shrink-0">
              {isPlaying ? (
                <div className="flex gap-0.5 items-end h-3">
                  <span className="w-1 bg-primary animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 bg-primary animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '200ms' }} />
                  <span className="w-1 bg-primary animate-[music-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '400ms' }} />
                </div>
              ) : (
                <Pause className="w-3 h-3 text-muted-foreground" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


