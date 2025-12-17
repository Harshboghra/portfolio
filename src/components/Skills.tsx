import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  "TypeORM", // Top skill from resume
  "Full-Stack Development", // Top skill from resume
  "Material-UI", // Top skill from resume
  "React",
  "NestJS",
  "PostgreSQL",
  "TypeScript",
  "GraphQL",
  "JWT",
  "Git",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Skills
        </h2>
        <p className="mt-2 text-muted-foreground">Technologies I work with.</p>

        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((s, index) => (
            <motion.span
              key={s}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-full border border-border/60 bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 text-sm text-muted-foreground shadow-sm hover:shadow-md transition-all duration-200"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </Reveal>
    </div>
  );
}
