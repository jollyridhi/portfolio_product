"use client";

import { useEffect, useId, useRef, useState } from "react";
import { nav, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
      <div className="mx-auto flex max-w-wide items-center justify-between gap-4 px-6 py-3.5 lg:px-8">
        <a href="/" className="flex min-h-11 items-center gap-3 rounded-md">
          <img
            src="/avatar.png"
            alt=""
            width={32}
            height={32}
            className="size-8 shrink-0 rounded-full border border-line object-cover object-[50%_32%]"
          />
          <span className="text-sm font-medium tracking-tight">
            {site.name}
            <span className="hidden text-muted sm:inline"> · {site.title}</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href.startsWith("#") ? `/${item.href}` : item.href}
              className="inline-flex min-h-11 items-center rounded-full px-2.5 text-[13px] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line bg-surface xl:hidden"
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
          className="border-t border-line bg-canvas px-6 py-4 xl:hidden"
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
