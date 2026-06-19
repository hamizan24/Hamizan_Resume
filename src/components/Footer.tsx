import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-2xl p-8 text-center md:p-10">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted md:text-lg">
            &ldquo;{profile.footerTagline}&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-accent/30" />
            <span className="font-mono text-xs text-accent">MH</span>
            <span className="h-px w-8 bg-accent/30" />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>© {year} {profile.name}</p>
          <p className="font-mono text-xs">
            Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
