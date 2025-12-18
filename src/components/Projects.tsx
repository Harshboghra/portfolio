import { motion } from "framer-motion";

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

export default function Projects() {
  return (
    <div className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="md:text-left text-center mb-12">
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full md:mx-0 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image Placeholder */}
              <motion.div
                className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }} // Make sure opacity stays at 1
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                <div className="text-white text-6xl opacity-20">
                  {p.title.includes("Hospital") ? "🏥" : "💼"}
                </div>
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{p.desc}</p>

                {/* Tech stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
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
                  {p.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={p.schema}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Schema
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
