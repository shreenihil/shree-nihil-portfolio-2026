import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Recognition } from "@/components/sections/Recognition";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] relative selection:bg-lime/30 selection:text-lime">
      {/* Navigation Bar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Recognition />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
