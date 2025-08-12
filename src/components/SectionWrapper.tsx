'use client';

export default function SectionWrapper({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <section>{children}</section>;
}
