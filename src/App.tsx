// App.tsx
import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Section from "./components/Section";

export default function App() {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
    >
      <AnimatedBackground />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <Section align="left">
            <Projects />
          </Section>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <Section align="right">
            <Experience />
          </Section>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24">
          <Section align="left">
            <Education />
          </Section>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <Section align="right">
            <Skills />
          </Section>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <Section align="left">
            <Contact />
          </Section>
        </section>
      </main>
    </motion.div>
  );
}
