import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-2xl">
        {/* subtle animated glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          Full Stack Developer | Surat, Gujarat, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl"
        >
          Building scalable web apps with{" "}
          <span className="text-primary">React</span>,{" "}
          <span className="text-primary">NestJS</span>,{" "}
          <span className="text-primary">PostgreSQL</span> &{" "}
          <span className="text-primary">GraphQL</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          2+ years of experience as Software Engineer at SaaS Innova Pvt. Ltd.
          building production-ready applications, secure APIs, and database-driven
          systems. Currently pursuing BTech in Computer Science at Indus University.
          Open to freelance and project-based web development work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="https://hospital-system-front-production.up.railway.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border/60 px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            Live Demo
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border/60 px-4 py-2 text-sm font-medium transition hover:bg-accent"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </div>
  );
}
