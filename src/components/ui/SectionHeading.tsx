type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  id,
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-accent sm:tracking-[0.2em]">
        {label}
      </p>
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
