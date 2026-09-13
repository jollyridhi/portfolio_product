"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { nav, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 bg-line/60"
      >
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto flex max-w-wide items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <a href="/" className="flex min-h-11 items-center gap-3 rounded-md">
          <Image
            src="/face.png"
            alt=""
            width={80}
            height={80}
            className="size-10 shrink-0 rounded-full border border-line object-cover object-[50%_18%] ring-2 ring-mist/70"
          />
          <span className="text-sm font-medium tracking-tight">
            {site.name}
            <span className="hidden text-muted sm:inline"> · {site.title}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            const href = item.href.startsWith("#") ? `/${item.href}` : item.href;
            const isHash = item.href.startsWith("#");
            const current = isHash && active === item.href;
            return (
              <a
                key={item.href}
                href={href}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-[13px] transition-colors ${
                  current ? "bg-mist text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="border-t border-line bg-canvas px-6 py-4 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="flex min-h-12 items-center border-b border-line text-base"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      )}
    </svg>
  );
}
