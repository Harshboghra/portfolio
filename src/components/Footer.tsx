// Footer Component with Glassmorphic Design
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Heart, Code, Sparkles } from 'lucide-react';

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:harshboghara25@gmail.com",
    color: "from-blue-400 via-cyan-500 to-teal-600"
  },
  {
    name: "GitHub", 
    icon: Github,
    href: "https://github.com/Harshboghra",
    color: "from-gray-400 via-slate-500 to-zinc-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harsh-boghara-81263a228",
    color: "from-blue-400 via-indigo-500 to-purple-600"
  },
  {
    name: "Location",
    icon: MapPin,
    href: null,
    color: "from-green-400 via-emerald-500 to-teal-600"
  }
];

function SocialIcon({ link, index, reduceMotion }: { link: typeof socialLinks[0]; index: number; reduceMotion: boolean }) {
  if (link.href === null) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.8 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={reduceMotion ? undefined : { y: -5, scale: 1.05 }}
        className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      >
        <div className={`absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r ${link.color}`} />
        
        <div className="relative p-6 text-center">
          <motion.div
            initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
            whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
            whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.1 }}
            className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center shadow-lg`}
          >
            <link.icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          >
            <p className="text-white font-bold">{link.name}</p>
            {link.href && (
              <p className="text-white/60 text-sm mt-1">Click to connect</p>
            )}
            {!link.href && (
              <p className="text-white/60 text-sm mt-1">Surat, Gujarat</p>
            )}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 opacity-20 rounded-full blur-xl"
          style={{ background: `linear-gradient(to right, ${link.color})` }}
          animate={reduceMotion ? undefined : { 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    );
  }

  return (
    <motion.a
      href={link.href || undefined}
      target={link.href?.startsWith("http") ? "_blank" : undefined}
      rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.95 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <div className={`absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r ${link.color}`} />

      <div className="relative p-6 text-center">
        <motion.div
          initial={reduceMotion ? false : { scale: 0, rotate: -180 }}
          whileInView={reduceMotion ? undefined : { scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          whileHover={reduceMotion ? undefined : { rotate: 360, scale: 1.1 }}
          className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center shadow-lg`}
        >
          <link.icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
        >
          <p className="text-white font-bold">{link.name}</p>
          {link.href && (
            <p className="text-white/60 text-sm mt-1">Click to connect</p>
          )}
          {!link.href && (
            <p className="text-white/60 text-sm mt-1">Surat, Gujarat</p>
          )}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
      
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 opacity-20 rounded-full blur-xl"
        style={{ background: `linear-gradient(to right, ${link.color})` }}
        animate={reduceMotion ? undefined : { 
          scale: [1, 1.3, 1], 
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.a>
  );
}

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative px-4 sm:px-6 py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={link.name} link={link} index={index} reduceMotion={!!reduceMotion} />
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          <div className="absolute -inset-0.5 opacity-30 blur-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20" />
          
          <div className="relative p-8 text-center">
            <motion.div
              initial={reduceMotion ? false : { scale: 0 }}
              whileInView={reduceMotion ? undefined : { scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Code className="w-5 h-5 text-white/80" />
              <span className="text-white/90 font-semibold">Crafted with</span>
              <motion.div
                animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Heart className="w-5 h-5 text-red-400 fill-current" />
                <motion.div
                  className="absolute inset-0 bg-red-400 rounded-full blur-md opacity-50"
                  animate={reduceMotion ? undefined : { scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <span className="text-white/90 font-semibold">by Harsh Boghara</span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
            
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-white/70 text-sm leading-relaxed"
            >
              Building exceptional digital experiences with modern web technologies.
              Let's create something amazing together!
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-6"
            >
              {["🎨", "⚡", "🚀", "💎", "🌟", "✨"].map((emoji, index) => (
                <motion.span
                  key={emoji}
                  className="text-2xl"
                  animate={reduceMotion ? undefined : {
                    y: [0, -8, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </motion.div>

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`
            }}
            animate={reduceMotion ? undefined : {
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        <motion.div
          className="pointer-events-none absolute inset-0 opacity-20"
          animate={reduceMotion ? undefined : {
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            animate={reduceMotion ? undefined : {
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
}
