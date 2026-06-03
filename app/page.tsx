import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyHireMe from "@/components/WhyHireMe";
import WorkProcess from "@/components/WorkProcess";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-x-hidden">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyHireMe />
      <WorkProcess />
      <Projects />
      <Contact />
    </main>
  );
}
