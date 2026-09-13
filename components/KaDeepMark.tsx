export function KaDeepMark({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-ink ${className}`}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 5h6.2c4.4 0 7.3 2.5 7.3 6.2 0 2.4-1.3 4.3-3.4 5.3L22 23h-5.2l-4.4-6.1H11V23H7V5Zm4 8.6h2.2c1.9 0 3.1-1 3.1-2.5S15.1 8.6 13.2 8.6H11v5Z" fill="currentColor" />
        <circle cx="22.5" cy="6.5" r="2.2" fill="rgb(var(--accent))" />
      </svg>
    </div>
  );
}
