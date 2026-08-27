import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ink">This page is not on the roadmap.</h1>
      <p className="mt-4 max-w-md text-muted">
        The URL does not exist. Head back to the portfolio and pick a section from the navigation.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
      >
        Back to home
      </Link>
    </main>
  );
}
