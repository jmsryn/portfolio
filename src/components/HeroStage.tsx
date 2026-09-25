'use client';

import dynamic from 'next/dynamic';

// three.js stays out of the initial bundle and never renders on the server.
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

export default function HeroStage() {
  return <HeroScene />;
}
