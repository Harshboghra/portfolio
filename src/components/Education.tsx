import { motion, useReducedMotion } from "framer-motion";

type Education = {
  institution: string;
  degree: string;
  duration: string;
  status: "Completed" | "Pursuing";
  icon: string;
  gradient: string;
  description?: string;
};

const education: Education[] = [
  {
    institution: "Indus University Ahmedabad",
    degree: "Bachelor of Technology - Computer Science",
    duration: "August 2025 - August 2028",
    status: "Pursuing",
    icon: "🎓",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    description: "Specializing in software engineering and advanced algorithms"
  },
  {
    institution: "Bhagwan Mahavir University",
    degree: "Diploma in Computer Engineering",
    duration: "August 2021 - October 2024",
    status: "Completed",
    icon: "📚",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    description: "Foundation in computer science and programming"
  },
  {
    institution: "Red & White Skill Education",
    degree: "Professional Development Training",
    duration: "August 2021 - January 2023",
    status: "Completed",
    icon: "💻",
    gradient: "from-orange-400 via-red-500 to-pink-600",
    description: "Hands-on training in modern web technologies"
  }
];

function EducationCard({ edu, index, reduceMotion }: { edu: Education; index: number; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      {/* gradient glow */}
      <div
        className={"pointer-events-none absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r " + edu.gradient}
      />

      {/* header with icon */}
      <div className="relative p-8 pb-6">
        <div className="flex items-start justify-between mb-6">
          <motion.div
            initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
            whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
            className="text-5xl"
          >
            {edu.icon}
          </motion.div>
          
          <motion.div
            initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
            whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            whileHover={reduceMotion ? undefined : { scale: 1.1 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
              edu.status === "Completed"
                ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-100"
                : "bg-blue-500/20 border-blue-400/30 text-blue-100"
            }`}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              animate={edu.status === "Pursuing" && !reduceMotion ? { scale: [1, 1.5, 1] } : undefined}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ backgroundColor: edu.status === "Completed" ? "#10b981" : "#3b82f6" }}
            />
            {edu.status}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
            {edu.institution}
          </h3>
          <p className="text-white/90 font-semibold text-lg mb-3">
            {edu.degree}
          </p>
          <p className="text-white/60 text-sm mb-4">
            {edu.duration}
          </p>
          {edu.description && (
            <p className="text-white/70 text-sm leading-relaxed">
              {edu.description}
            </p>
          )}
        </div>
      </div>

      {/* decorative bottom gradient */}
      <div className={"absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r " + edu.gradient} />

      {/* border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />

      {/* floating decorative element */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r opacity-20 rounded-full blur-xl"
        style={{ backgroundImage: `linear-gradient(to right, ${edu.gradient})` }}
        animate={reduceMotion ? undefined : { 
          scale: [1, 1.2, 1], 
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}

export default function Education() {
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500" />
            Academic Journey
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Education
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600">
              & Learning
            </span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl">
            Continuous learning and academic excellence in computer science and software engineering,
            building a strong foundation for professional growth.
          </p>
        </motion.div>

        {/* education grid */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} index={index} reduceMotion={!!reduceMotion} />
          ))}
        </motion.div>

        {/* bottom decorative elements */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-8"
        >
          {["🎯", "🚀", "💡"].map((icon, index) => (
            <motion.div
              key={icon}
              className="text-3xl"
              animate={reduceMotion ? undefined : { 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.5,
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
