import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/Footer";
import { AccessibilityCaseStudy } from "@/components/AccessibilityCaseStudy";
import { kadeepAccessibilityStudy } from "@/data/case-studies/kadeep-accessibility";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: kadeepAccessibilityStudy.seoTitle,
  description: kadeepAccessibilityStudy.seoDescription,
  alternates: { canonical: "/case-studies/kadeep-accessibility" },
  openGraph: {
    title: kadeepAccessibilityStudy.seoTitle,
    description: kadeepAccessibilityStudy.seoDescription,
    url: `${site.url}/case-studies/kadeep-accessibility`,
    type: "article",
  },
};

export default function KadeepAccessibilityCaseStudyPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <div className="mx-auto max-w-wide px-6 pt-8 lg:px-8">
          <Link
            href="/#case-studies"
            className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Back to work
          </Link>
        </div>
        <AccessibilityCaseStudy />
      </main>
      <Footer />
    </>
  );
}
