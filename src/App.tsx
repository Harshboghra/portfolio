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
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Section>
            <Projects />
          </Section>
        </section>

        <section id="experience" className="scroll-mt-24">
          <Section>
            <Experience />
          </Section>
        </section>

        <section id="education" className="scroll-mt-24">
          <Section>
            <Education />
          </Section>
        </section>

        <section id="skills" className="scroll-mt-24">
          <Section>
            <Skills />
          </Section>
        </section>

        <section id="contact" className="scroll-mt-24">
          <Section>
            <Contact />
          </Section>
        </section>
      </main>
    </div>
  );
}
