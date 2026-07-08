const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 -top-48 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/5 blur-[130px]" />
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat" }}
      />
    </div>
  );
}
