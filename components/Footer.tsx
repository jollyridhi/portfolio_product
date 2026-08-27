import { footer, links, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-wide flex-col gap-6 px-6 py-10 lg:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">{footer.accessibility}</p>
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.title}.
          </p>
          <p>
            <a href={`mailto:${links.email}`} className="underline-offset-4 hover:underline">
              {links.email}
            </a>
            <span aria-hidden="true"> · </span>
            <a href={links.phoneHref} className="underline-offset-4 hover:underline">
              {links.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
