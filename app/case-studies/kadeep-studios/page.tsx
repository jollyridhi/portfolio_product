import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/Footer";
import { KadeepCaseStudy } from "@/components/KadeepCaseStudy";
import { kadeepStudiosStudy } from "@/data/case-studies/kadeep-studios";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: kadeepStudiosStudy.seoTitle,
  description: kadeepStudiosStudy.seoDescription,
  alternates: { canonical: "/case-studies/kadeep-studios" },
  openGraph: {
    title: kadeepStudiosStudy.seoTitle,
    description: kadeepStudiosStudy.seoDescription,
    url: `${site.url}/case-studies/kadeep-studios`,
    type: "article",
  },
};

export default function KadeepStudiosCaseStudyPage() {
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
            Back to case studies
          </Link>
        </div>
        <KadeepCaseStudy />
      </main>
      <Footer />
    </>
  );
}
