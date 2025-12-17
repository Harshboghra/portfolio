import { motion } from "framer-motion";
import Reveal from "./Reveal";

const education = [
  {
    institution: "Indus University Ahmedabad",
    degree: "Bachelor of Technology - BTech, Computer Science",
    duration: "August 2025 - August 2028",
    status: "Pursuing"
  },
  {
    institution: "Bhagwan Mahavir University",
    degree: "Diploma, Computer Engineering",
    duration: "August 2021 - October 2024",
    status: "Completed"
  },
  {
    institution: "Red & White Skill Education Official",
    degree: "Professional Training",
    duration: "August 2021 - January 2023",
    status: "Completed"
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
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Education() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Education
        </h2>
        <p className="mt-2 text-muted-foreground">My academic background.</p>
      </Reveal>

      <motion.div
        className="mt-8 space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            variants={itemVariants}
            className="rounded-2xl border border-border/60 bg-accent/20 p-6 hover:bg-accent/30 transition-colors"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-primary font-medium">{edu.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                  edu.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
