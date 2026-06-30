import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Recognition } from "@/components/sections/Recognition";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Recognition />
      <Contact />
    </main>
  );
}
