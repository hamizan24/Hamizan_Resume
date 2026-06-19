type TechLogoProps = {
  name: string;
  slug: string;
};

export default function TechLogo({ name, slug }: TechLogoProps) {
  return (
    <div className="group flex flex-col items-center gap-3">
      <div className="glass glass-hover flex h-16 w-16 items-center justify-center rounded-xl p-3 md:h-20 md:w-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`}
          alt={name}
          width={40}
          height={40}
          className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100 md:h-10 md:w-10"
          style={{ filter: slug === "github" ? "invert(1)" : undefined }}
          loading="lazy"
        />
      </div>
      <span className="text-xs text-muted transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}
