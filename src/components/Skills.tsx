import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "💻",
    skills: ["React", "TypeScript", "Material-UI"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["NestJS", "Node.js", "GraphQL", "JWT"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "TypeORM", "MongoDB"],
    color: "from-purple-500 to-violet-500"
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "Full-Stack Development"],
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to build modern web applications
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <motion.div
                className="grid gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-800">{skill}</span>
                    <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill proficiency indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Skill Proficiency</h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              { skill: "Frontend Development", level: 90, color: "bg-blue-500" },
              { skill: "Backend Development", level: 85, color: "bg-green-500" },
              { skill: "Database Design", level: 80, color: "bg-purple-500" },
            ].map((proficiency, index) => (
              <motion.div
                key={proficiency.skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{proficiency.skill}</span>
                  <span className="text-sm text-gray-600">{proficiency.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${proficiency.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency.level}%` }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
