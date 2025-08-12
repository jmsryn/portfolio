'use client';

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
