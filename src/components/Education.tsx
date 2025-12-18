import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { useRef } from "react";

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
    <div className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="md:text-left text-center mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full md:mx-0 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              My academic journey and continuous learning path
            </p>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {edu.degree}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {edu.status}
                </span>
              </div>

              <div className="text-gray-600">
                <p className="text-sm font-medium">{edu.duration}</p>
              </div>

              {/* Education icon */}
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">
                    {edu.institution.includes('Indus') ? '🎓' : edu.institution.includes('Bhagwan') ? '📚' : '💻'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
