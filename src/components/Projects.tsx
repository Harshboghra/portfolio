import { motion, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  live?: string;
  schema?: string;
  github?: string;
  icon: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Hospital Management System",
    desc: "Role-based platform for Admin/Doctor/Patient with appointments, dashboards, PDF prescriptions and cloud uploads.",
    tech: ["React", "NestJS", "PostgreSQL", "TypeORM", "JWT"],
    live: "https://hospital-system-front-production.up.railway.app",
    schema:
      "https://dbdiagram.io/d/hospital-management-system-6940fa08e877c63074fb1b3e",
    github: "https://github.com/Harshboghra/portfolio",
    icon: "🏥",
    gradient: "from-blue-400 via-purple-500 to-pink-500",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with animated sections, smooth reveal transitions, and responsive UI crafted with Tailwind + Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    live: "#home",
    github: "https://github.com/Harshboghra/portfolio",
    icon: "✨",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
  },
];

function ProjectCard({ project, reduceMotion }: { project: Project; reduceMotion: boolean }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -10 }}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      {/* gradient glow */}
      <div
        className={
          "pointer-events-none absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r " +
          project.gradient
        }
      />

      {/* top media */}
      <div className="relative h-44 sm:h-48">
        <div className={"absolute inset-0 bg-gradient-to-br " + project.gradient + " opacity-80"} />
        <div className="absolute inset-0 bg-black/30" />

        {/* subtle shine */}
        <motion.div
          aria-hidden
          className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-white/0 via-white/25 to-white/0 rotate-12"
          initial={{ x: "-30%", opacity: 0 }}
          whileHover={reduceMotion ? undefined : { x: "220%", opacity: 0.6 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        />

        <div className="relative h-full p-6 flex items-end justify-between">
          <div>
            <p className="text-white/80 text-xs font-medium tracking-widest uppercase">
              Featured Project
            </p>
            <h3 className="text-white text-2xl font-bold leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="text-5xl opacity-90 drop-shadow">{project.icon}</div>
        </div>
      </div>

      {/* body */}
      <div className="relative p-6">
        <p className="text-white/75 leading-relaxed mb-5">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-sm text-white/80 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.live && (
            <motion.a
              href={project.live}
              target={project.live.startsWith("http") ? "_blank" : undefined}
              rel={project.live.startsWith("http") ? "noreferrer" : undefined}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Live Demo
              <span aria-hidden>→</span>
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white/90 font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Code
              <span aria-hidden>↗</span>
            </motion.a>
          )}

          {project.schema && (
            <motion.a
              href={project.schema}
              target="_blank"
              rel="noreferrer"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white/90 font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Schema
              <span aria-hidden>↗</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
      <div className="relative px-4 sm:px-6">
        {/* soft divider glow */}
        <div className="pointer-events-none absolute left-0 right-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-white/5 to-white/0" />
      {/* header */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
            Selected Work
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Projects
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Built with care
            </span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl">
            A curated selection of projects focused on performance, scalable architecture,
            and delightful user experience.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} reduceMotion={!!reduceMotion} />
          ))}
        </div>
      </div>
    </div>
  );
}
