import Image from "next/image";

export type ProjectIcon = "code" | "server" | "globe" | "homelab";

type ProjectThumbnailProps = {
  name: string;
  image: string | null;
  accent: string;
  icon: ProjectIcon;
};

function ProjectIconSvg({ icon }: { icon: ProjectIcon }) {
  const className = "h-10 w-10 text-white/90";

  if (icon === "server") {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      </svg>
    );
  }
  if (icon === "globe") {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }
  if (icon === "homelab") {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    );
  }
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function ProjectThumbnail({ name, image, accent, icon }: ProjectThumbnailProps) {
  if (image) {
    return (
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, ${accent}99 50%, ${accent}66 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      <ProjectIconSvg icon={icon} />
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-white">
        {name}
      </p>
    </div>
  );
}
