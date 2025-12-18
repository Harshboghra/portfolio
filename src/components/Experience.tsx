import { motion, useReducedMotion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  role: string;
  technologies: string[];
  icon: string;
  gradient: string;
};

type Experience = {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  projects: Project[];
};

const experiences: Experience[] = [
  {
    company: "SaaS Innova Pvt. Ltd.",
    position: "Software Engineer",
    duration: "February 2023 - April 2025",
    location: "Surat, Gujarat, India",
    description: "Developing and maintaining production-ready applications, APIs, and database-driven systems with focus on scalability and performance.",
    projects: [
      {
        name: "Allbry",
        description: "User management platform with seamless onboarding and data analytics.",
        role: "Lead Developer",
        technologies: ["React", "Node.js", "MongoDB"],
        icon: "👥",
        gradient: "from-blue-400 to-cyan-500"
      },
      {
        name: "Avisita",
        description: "Healthcare appointment scheduling with real-time notifications.",
        role: "Backend Developer", 
        technologies: ["Express", "PostgreSQL", "Socket.io"],
        icon: "🏥",
        gradient: "from-purple-400 to-pink-500"
      },
      {
        name: "Red & White ERP",
        description: "Enterprise resource planning for inventory and CRM.",
        role: "Full-stack Developer",
        technologies: ["React", "Redux", "MySQL"],
        icon: "📊",
        gradient: "from-green-400 to-emerald-500"
      },
      {
        name: "Property Management System",
        description: "Comprehensive property and tenant management platform.",
        role: "Frontend Developer",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        icon: "🏢",
        gradient: "from-orange-400 to-red-500"
      }
    ]
  }
];

function ProjectCard({ project, reduceMotion }: { project: Project; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
    >
      {/* gradient glow */}
      <div
        className={"pointer-events-none absolute -inset-0.5 opacity-20 blur-xl bg-gradient-to-r " + project.gradient}
      />

      <div className="relative p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl">{project.icon}</div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg mb-1">{project.name}</h4>
            <p className="text-white/70 text-sm mb-3 leading-relaxed">{project.description}</p>
            <p className="text-white/60 text-xs font-medium mb-4">Role: {project.role}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-lg text-xs text-white/80 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
    </motion.div>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative px-4 sm:px-6">
      {/* soft divider glow */}
      <div className="pointer-events-none absolute left-0 right-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-white/5 to-white/0" />

      <div className="max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
            Career Journey
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Experience
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
              & Growth
            </span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl">
            Professional journey building scalable applications and leading development teams
            in fast-paced environments.
          </p>
        </motion.div>

        {/* timeline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 md:left-1/2 md:transform md:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={reduceMotion ? false : { opacity: 0, x: -50 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              {/* timeline dot */}
              <motion.div
                className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white/10 md:left-1/2 md:transform md:-translate-x-2"
                initial={reduceMotion ? false : { scale: 0 }}
                whileInView={reduceMotion ? undefined : { scale: 1 }}
                transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30" />
              </motion.div>

              {/* content card */}
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                    className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                  >
                    {/* gradient glow */}
                    <div className="pointer-events-none absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

                    <div className="relative p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                          <p className="text-white/90 font-semibold text-lg">{exp.company}</p>
                          <p className="text-white/60 text-sm">{exp.location}</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/15 text-white/90 text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-white/75 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
                  </motion.div>
                </div>
              </div>

              {/* projects grid */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h4 className="text-white/80 font-semibold mb-4 px-16 md:px-0">Key Projects</h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-16 md:px-0">
                  {exp.projects.map((project) => (
                    <ProjectCard key={project.name} project={project} reduceMotion={!!reduceMotion} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
