import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { useRef } from "react";

// Expanded experiences array with more projects
const experiences = [
  {
    company: "SaaS Innova Pvt. Ltd.",
    position: "Software Engineer",
    duration: "February 2023 - April 2025 (2 years 3 months)",
    location: "Surat, Gujarat, India",
    description:
      "Developing and maintaining production-ready applications, APIs, and database-driven systems.",
    projects: [
      {
        name: "Allbry",
        description:
          "A user management platform aimed at providing seamless onboarding, engagement, and user data management.",
        role: "Lead Developer",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        name: "Avisita",
        description:
          "An appointment scheduling and booking system for healthcare providers, integrated with real-time notifications.",
        role: "Backend Developer",
        technologies: ["Express", "PostgreSQL", "Socket.io"],
      },
      {
        name: "Red & White ERP",
        description:
          "An enterprise resource planning system designed for inventory management, customer relationship management, and financial accounting.",
        role: "Full-stack Developer",
        technologies: ["React", "Redux", "MySQL"],
      },
      {
        name: "PMS (Property Management System)",
        description:
          "A comprehensive property management system to handle reservations, tenant details, and maintenance requests.",
        role: "Frontend Developer",
        technologies: ["React", "TypeScript", "TailwindCSS"],
      },
    ],
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
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="md:text-left text-center mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full md:mx-0 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              My journey in software development and key projects I've worked on
            </p>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-20"
            >
              {/* Timeline dot */}
              <div className="absolute -left-16 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:text-right">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Projects */}
                <div className="grid gap-4 md:grid-cols-2">
                  {exp.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{project.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
