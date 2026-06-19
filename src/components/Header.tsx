"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { scrollToSection } from "@/lib/hooks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      scrollToSection(href);
      setOpen(false);
    },
    [],
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "glass border-b border-white/[0.08] shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#"
          className="group flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-accent/30">
            MH
          </span>
          <span className="hidden text-sm font-medium text-foreground sm:block">
            Hamizan<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-2.5 py-2 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground xl:px-3"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-accent/30 transition-all hover:bg-accent/20 lg:inline-flex"
        >
          Contact Me
        </a>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass border-t border-white/[0.08] px-4 py-4 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-white/[0.05] hover:text-foreground"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-2 block rounded-lg bg-accent/10 px-3 py-2.5 text-center text-sm font-medium text-accent"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
