import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { useRef } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "harshboghara25@gmail.com",
    href: "mailto:harshboghara25@gmail.com",
    icon: "📧",
    description: "Send me a message anytime"
  },
  {
    label: "LinkedIn",
    value: "Harsh Boghara",
    href: "https://www.linkedin.com/in/harsh-boghara-81263a228",
    icon: "💼",
    description: "Connect with me professionally"
  },
  {
    label: "Location",
    value: "Surat, Gujarat, India",
    href: null,
    icon: "📍",
    description: "Based in Surat, Gujarat"
  },
];

export default function Contact() {
  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="md:text-left text-center mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full md:mx-0 mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {contact.href ? (
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:border-blue-200"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{contact.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors mb-2">
                      {contact.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {contact.description}
                    </p>
                  </div>
                </motion.a>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{contact.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {contact.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {contact.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              I'm always excited to work on new challenges and bring creative ideas to life.
            </p>
            <motion.a
              href="mailto:harshboghara25@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Send Me a Message
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2025 Harsh Boghara. Built with React, TypeScript & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
