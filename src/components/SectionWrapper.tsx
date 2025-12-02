'use client';

import { ReactNode } from 'react';

export default function SectionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
