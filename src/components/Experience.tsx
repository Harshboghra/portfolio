import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "SaaS Innova Pvt. Ltd.",
    position: "Software Engineer",
    duration: "February 2023 - April 2025 (2 years 3 months)",
    location: "Surat, Gujarat, India",
    description: "Developing and maintaining production-ready applications, APIs, and database-driven systems."
  }
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
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-muted-foreground">My professional journey.</p>
      </Reveal>

      <motion.div
        className="mt-8 space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/50"
          >
            <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary border-4 border-background"></div>
            <div className="rounded-2xl border border-border/60 bg-accent/20 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
              </div>
              <p className="mt-4 text-muted-foreground">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
