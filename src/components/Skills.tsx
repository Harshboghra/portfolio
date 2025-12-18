import { motion, useReducedMotion } from "framer-motion";

type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
  gradient: string;
  description: string;
};

type Proficiency = {
  skill: string;
  level: number;
  gradient: string;
};

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    description: "Building responsive and interactive user interfaces"
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "NestJS", "GraphQL", "REST APIs", "JWT"],
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    description: "Developing scalable server-side applications"
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "TypeORM", "Prisma", "Redis"],
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    description: "Designing efficient data storage solutions"
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Testing"],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    description: "Modern development and deployment workflows"
  }
];

const proficiencies: Proficiency[] = [
  { skill: "Frontend Development", level: 90, gradient: "from-blue-500 to-cyan-600" },
  { skill: "Backend Development", level: 85, gradient: "from-green-500 to-emerald-600" },
  { skill: "Full-Stack Architecture", level: 88, gradient: "from-purple-500 to-indigo-600" },
  { skill: "Database Design", level: 80, gradient: "from-orange-500 to-red-600" }
];

function SkillCard({ category, index, reduceMotion }: { category: SkillCategory; index: number; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.9 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      {/* gradient glow */}
      <div
        className={"pointer-events-none absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r " + category.gradient}
      />

      <div className="relative p-8">
        {/* header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
            whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
            whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.1 }}
            className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
          >
            {category.icon}
          </motion.div>
          
          <div>
            <h3 className="text-2xl font-bold text-white">{category.category}</h3>
            <p className="text-white/60 text-sm">{category.description}</p>
          </div>
        </div>

        {/* skills list */}
        <motion.div
          className="space-y-3"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.6 + skillIndex * 0.05, duration: 0.4 }}
              whileHover={reduceMotion ? undefined : { x: 5, scale: 1.02 }}
              className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-white/90 font-medium">{skill}</span>
              <motion.div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                whileHover={reduceMotion ? undefined : { scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />

      {/* floating decorative element */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 opacity-20 rounded-full blur-xl"
        style={{ background: `linear-gradient(to right, ${category.gradient})` }}
        animate={reduceMotion ? undefined : { 
          scale: [1, 1.3, 1], 
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

function ProficiencyBar({ proficiency, index, reduceMotion }: { proficiency: Proficiency; index: number; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6"
    >
      {/* gradient glow */}
      <div
        className={"pointer-events-none absolute -inset-0.5 opacity-20 blur-xl bg-gradient-to-r " + proficiency.gradient}
      />

      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white font-bold">{proficiency.skill}</span>
          <motion.span
            initial={reduceMotion ? false : { scale: 0 }}
            whileInView={reduceMotion ? undefined : { scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
            className="text-white/80 font-bold"
          >
            {proficiency.level}%
          </motion.span>
        </div>

        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${proficiency.gradient} rounded-full`}
            initial={reduceMotion ? false : { width: 0 }}
            whileInView={reduceMotion ? undefined : { width: `${proficiency.level}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={reduceMotion ? undefined : { x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </motion.div>
  );
}

export default function Skills() {
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500" />
            Technical Expertise
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Skills
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-green-600">
              & Technologies
            </span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl">
            Comprehensive skill set spanning frontend, backend, database design, and modern development tools
            to build scalable and performant web applications.
          </p>
        </motion.div>

        {/* skills grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} reduceMotion={!!reduceMotion} />
          ))}
        </motion.div>

        {/* proficiency section */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Skill Proficiency</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {proficiencies.map((proficiency, index) => (
              <ProficiencyBar key={proficiency.skill} proficiency={proficiency} index={index} reduceMotion={!!reduceMotion} />
            ))}
          </div>
        </motion.div>

        {/* decorative elements */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          {["⚡", "🚀", "💎"].map((icon, index) => (
            <motion.div
              key={icon}
              className="text-4xl"
              animate={reduceMotion ? undefined : { 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
