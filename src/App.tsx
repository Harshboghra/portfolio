// App.tsx
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <AnimatedBackground />
      
      {/* Gradient overlays for depth */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
      
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        {/* Content Sections with Section wrapper */}
        <div className="relative">
          {/* Section divider */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <Section>
              <Projects />
            </Section>
          </section>

          {/* Section divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
          />

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <Section>
              <Experience />
            </Section>
          </section>

          {/* Section divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
          />

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <Section>
              <Education />
            </Section>
          </section>

          {/* Section divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
          />

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <Section>
              <Skills />
            </Section>
          </section>

          {/* Section divider with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
          />

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24">
            <Section>
              <Contact />
            </Section>
          </section>

          <Footer />
        </div>
      </main>

      {/* Floating decorative elements */}
      <AnimatePresence>
        <motion.div
          className="pointer-events-none fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: 0.6 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2 }
          }}
        />
      </AnimatePresence>
    </motion.div>
  );
}
