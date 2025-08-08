'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Music2, Play, Pause } from 'lucide-react';

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: NowPlaying = await res.json();
        if (isMounted) setData(json);
      } catch (e: any) {
        if (isMounted) setError(e?.message || 'Error');
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
  const album = data?.album ?? '';
  const image = data?.albumImageUrl ?? '';
  const url = data?.songUrl ?? undefined;

  const containerPadding = compact ? 'px-2 py-1' : 'px-3 py-2';
  const gap = compact ? 'gap-2' : 'gap-3';
  const imageSize = compact ? 24 : 40;
  const imageBoxClass = compact
    ? 'relative w-6 h-6 rounded overflow-hidden bg-muted flex items-center justify-center flex-shrink-0'
    : 'relative w-10 h-10 rounded overflow-hidden bg-muted flex items-center justify-center flex-shrink-0';
  const titleClass = compact
    ? 'text-xs font-medium text-foreground truncate max-w-[140px]'
    : 'text-sm font-medium text-foreground truncate';
  const subClass = 'text-xs text-muted-foreground truncate';

  return (
    <div className={`max-w-full flex items-center ${gap} ${containerPadding} rounded-md border border-border bg-card/50 ${className}`}>
      <div className={imageBoxClass}>
        {image ? (
          <Image src={image} alt={title} width={imageSize} height={imageSize} className="object-cover" />
        ) : (
          <Music2 className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      <div className="min-w-0">
        <div className={titleClass} title={title}>
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        {!compact && (
          <div className={subClass}>
            {artist}
            {artist && album ? ' — ' : ''}
            {album}
          </div>
        )}
      </div>
      {!compact && (
        <div className="ml-auto text-xs text-muted-foreground flex items-center gap-1">
          {isPlaying ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          {isPlaying ? 'Now playing' : 'Last played'}
        </div>
      )}
    </div>
  );
}


