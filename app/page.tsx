import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
