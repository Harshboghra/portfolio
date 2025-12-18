import { motion, useReducedMotion } from "framer-motion";

type ContactItem = {
  label: string;
  value: string;
  href: string | null;
  icon: string;
  description: string;
  gradient: string;
};

const contactInfo: ContactItem[] = [
  {
    label: "Email",
    value: "harshboghara25@gmail.com",
    href: "mailto:harshboghara25@gmail.com",
    icon: "✉️",
    description: "Send me a message anytime",
    gradient: "from-blue-400 via-cyan-500 to-teal-600"
  },
  {
    label: "LinkedIn",
    value: "Harsh Boghara",
    href: "https://www.linkedin.com/in/harsh-boghara-81263a228",
    icon: "💼",
    description: "Connect with me professionally",
    gradient: "from-blue-400 via-indigo-500 to-purple-600"
  },
  {
    label: "Location",
    value: "Surat, Gujarat, India",
    href: null,
    icon: "📍",
    description: "Based in Surat, Gujarat",
    gradient: "from-green-400 via-emerald-500 to-teal-600"
  },
  {
    label: "GitHub",
    value: "@Harshboghra",
    href: "https://github.com/Harshboghra",
    icon: "💻",
    description: "Check out my code",
    gradient: "from-gray-400 via-slate-500 to-zinc-600"
  }
];

function ContactCard({ contact, index, reduceMotion }: { contact: ContactItem; index: number; reduceMotion: boolean }) {
  const content = (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      {/* gradient glow */}
      <div
        className={"pointer-events-none absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r " + contact.gradient}
      />

      <div className="relative p-8 text-center">
        <motion.div
          initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
          whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.1 }}
          className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
        >
          <span className="text-3xl">{contact.icon}</span>
        </motion.div>

        <motion.h3
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
          className="text-xl font-bold text-white mb-2"
        >
          {contact.label}
        </motion.h3>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
          className="text-white/90 font-medium mb-3"
        >
          {contact.value}
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
          className="text-white/60 text-sm"
        >
          {contact.description}
        </motion.p>
      </div>

      {/* border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />

      {/* floating decorative element */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 opacity-20 rounded-full blur-xl"
        style={{ background: `linear-gradient(to right, ${contact.gradient})` }}
        animate={reduceMotion ? undefined : { 
          scale: [1, 1.3, 1], 
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  if (contact.href) {
    return (
      <motion.div
        key={contact.label}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        whileHover={reduceMotion ? undefined : { y: -10, scale: 1.05 }}
        viewport={{ once: true, amount: 0.2 }}
        className="group"
      >
        <motion.a
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-3xl"
        >
          {content}
        </motion.a>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={contact.label}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -10, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      {content}
    </motion.div>
  );
}

function CTASection({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.9 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
      
      <div className="relative p-12 text-center">
        <motion.div
          initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
          whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="text-5xl mb-6"
        >
          🚀
        </motion.div>

        <motion.h3
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Start Your Project?
        </motion.h3>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
        >
          I'm always excited to work on new challenges and bring creative ideas to life.
          Let's build something amazing together!
        </motion.p>

        <motion.a
          href="mailto:harshboghara25@gmail.com"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={reduceMotion ? undefined : { scale: 1.05, y: -3 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Send Me a Message
          <motion.span
            initial={reduceMotion ? false : { x: 0 }}
            whileHover={reduceMotion ? undefined : { x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>

      {/* floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          animate={reduceMotion ? undefined : {
            y: [0, -30, 0],
            x: [0, (i - 1) * 20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          style={{
            top: "20%",
            left: `${25 + i * 25}%`
          }}
        />
      ))}
    </motion.div>
  );
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative px-4 sm:px-6 pb-8">
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
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-500" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Contact
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-500 to-orange-500">
              & Collaboration
            </span>
          </h2>

          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl">
            Ready to bring your ideas to life? Let's connect and discuss how we can work together
            to create something exceptional.
          </p>
        </motion.div>

        {/* contact cards */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16"
        >
          {contactInfo.map((contact, index) => (
            <ContactCard key={contact.label} contact={contact} index={index} reduceMotion={!!reduceMotion} />
          ))}
        </motion.div>

        {/* CTA section */}
        <CTASection reduceMotion={!!reduceMotion} />

        {/* Footer will be handled separately */}
      </div>
    </div>
  );
}
