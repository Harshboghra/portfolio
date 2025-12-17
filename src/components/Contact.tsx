import { motion } from "framer-motion";
import Reveal from "./Reveal";

const contactInfo = [
  {
    label: "Email",
    value: "harshboghara25@gmail.com",
    href: "mailto:harshboghara25@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    value: "Harsh Boghara",
    href: "https://www.linkedin.com/in/harsh-boghara-81263a228",
    icon: "💼",
  },
  {
    label: "Location",
    value: "Surat, Gujarat, India",
    href: "https://maps.app.goo.gl/NNcSG5B8sQnLdQ3TA",
    icon: "📍",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-muted-foreground">
          Want to build something together? Let's talk.
        </p>
      </Reveal>

      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contactInfo.map((contact, index) => (
          <motion.div
            key={contact.label}
            variants={itemVariants}
            className="group"
          >
            {contact.href ? (
              <motion.a
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : undefined}
                rel={contact.href.startsWith('http') ? "noreferrer" : undefined}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block rounded-2xl border border-border/60 bg-accent/20 p-6 hover:bg-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <h3 className="font-semibold">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            ) : (
              <div className="rounded-2xl border border-border/60 bg-accent/20 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <h3 className="font-semibold">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
