// Enhanced Section Component with Glassmorphic Design
import { motion, useReducedMotion } from "framer-motion";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`relative w-full py-20 lg:py-32 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 60 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Section background with subtle glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" />
      
      {/* Content container with proper spacing */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Additional inner wrapper for better content control */}
        <div className="w-full">
          {children}
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full"
        animate={reduceMotion ? undefined : {
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="pointer-events-none absolute top-20 right-20 w-3 h-3 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-sm"
        animate={reduceMotion ? undefined : {
          scale: [1, 1.2, 1],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Subtle parallax effect on scroll */}
      <motion.div
        className="pointer-events-none absolute -bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
        animate={reduceMotion ? undefined : {
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
    </motion.section>
  );
}
