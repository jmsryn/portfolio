export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-sm text-accent tabular-nums shrink-0">
        {index}
      </span>
      <h2 className="text-foreground">{title}</h2>
    </div>
  );
}
