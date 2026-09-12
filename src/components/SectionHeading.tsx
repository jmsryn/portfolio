export default function SectionHeading({
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <h2 className="text-foreground">{title}</h2>
    </div>
  );
}
