import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMarquee from "@/components/SkillsMarquee";
import Works from "@/components/Works";
import EEProjects from "@/components/EEProjects";
import SoftwareProjects from "@/components/SoftwareProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsMarquee />
        <Works />
        <EEProjects />
        <SoftwareProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
