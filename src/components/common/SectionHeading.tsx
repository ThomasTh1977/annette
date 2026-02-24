interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-[clamp(1.6rem,3vw,3rem)] font-bold tracking-tight mb-3 bg-gradient-to-r from-rose-700 via-rose-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="mx-auto mb-4 w-16 h-1 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
      {subtitle && (
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}