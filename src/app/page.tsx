import Header from "@/components/Header";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Homelab from "@/components/sections/Homelab";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import TechStackWall from "@/components/sections/TechStackWall";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Homelab />
        <Experience />
        <Projects />
        <Certifications />
        <TechStackWall />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
