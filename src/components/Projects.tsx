import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Role-based platform for Admin/Doctor/Patient with appointments, dashboards, PDF prescriptions and cloud uploads.",
    tech: ["React", "NestJS", "PostgreSQL", "TypeORM", "JWT"],
    live: "https://hospital-system-front-production.up.railway.app",
    schema:
      "https://dbdiagram.io/d/hospital-management-system-6940fa08e877c63074fb1b3e",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          A few things I’ve built recently.
        </p>
      </Reveal>

      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-accent/20 to-accent/10 p-6 shadow-lg hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {p.tech.map((t) => (
                  <motion.span
                    key={t}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <div className="mt-6 flex gap-3">
                <motion.a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Live
                </motion.a>
                <motion.a
                  href={p.schema}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl border border-border/60 px-3 py-2 text-sm font-medium transition hover:bg-accent"
                >
                  DB Schema
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
