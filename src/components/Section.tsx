// Enhanced Section Component with Smooth Scroll Animations
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative w-full py-20 lg:py-32 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Smooth animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 pointer-events-none"
        style={{ opacity }}
      />
      
      {/* Content container with smooth entrance */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ scale }}
      >
        <div className="w-full">
          {children}
        </div>
      </motion.div>

      {/* Floating elements with smooth motion */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full"
        style={{ y }}
        animate={reduceMotion ? undefined : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="pointer-events-none absolute top-20 right-20 w-3 h-3 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm"
        style={{ y }}
        animate={reduceMotion ? undefined : {
          scale: [1, 1.15, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-xl"
        style={{ y }}
        animate={reduceMotion ? undefined : {
          scale: [1, 1.1, 1],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Subtle particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute w-1.5 h-1.5 bg-white/15 rounded-full"
          style={{
            top: `${15 + i * 20}%`,
            left: `${15 + i * 25}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, -(20 + i * 5)])
          }}
          animate={reduceMotion ? undefined : {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        />
      ))}

      {/* Animated gradient overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </motion.div>
    </motion.section>
  );
}
