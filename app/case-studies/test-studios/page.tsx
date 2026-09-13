import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/Footer";
import { TestStudiosCaseStudy } from "@/components/TestStudiosCaseStudy";
import { noCodeStudiosStudy } from "@/data/case-studies/no-code-studios";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: noCodeStudiosStudy.seoTitle,
  description: noCodeStudiosStudy.seoDescription,
  alternates: { canonical: "/case-studies/test-studios" },
  openGraph: {
    title: noCodeStudiosStudy.seoTitle,
    description: noCodeStudiosStudy.seoDescription,
    url: `${site.url}/case-studies/test-studios`,
    type: "article",
  },
};

export default function TestStudiosCaseStudyPage() {
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
        <TestStudiosCaseStudy />
      </main>
      <Footer />
    </>
  );
}
