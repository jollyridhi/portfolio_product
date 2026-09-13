import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { CaseStudies } from "@/components/CaseStudies";
import { Proof } from "@/components/Proof";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <CaseStudies />
        <Proof />
        <Experience />
        <About />
        <Research />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
