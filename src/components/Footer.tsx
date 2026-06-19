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
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {year} {profile.name}</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
