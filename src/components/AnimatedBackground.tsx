import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="-z-0 fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/80 to-pink-500/70 rounded-full blur-3xl"
        initial={{ opacity: 0.8 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.6, 0.8],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/70 to-cyan-500/60 rounded-full blur-3xl"
        initial={{ opacity: 1 }} // Set the initial opacity to 1
        animate={{
          scale: [1, 0.8, 1],
          opacity: [1, 0.5, 1], // Maintain opacity for consistency
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/70 to-purple-500/60 rounded-full blur-3xl"
        initial={{ opacity: 1 }} // Set the initial opacity to 1
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1], // Keep opacity consistent across the animation
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-violet-500/60 to-purple-500/50 rounded-full blur-3xl"
        initial={{ opacity: 1 }}
        animate={{
          scale: [1, 0.9, 1],
          opacity: [1, 0.7, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm"
          style={{
            left: `${15 + i * 6}%`,
            top: `${20 + i * 5}%`,
          }}
          initial={{ opacity: 1 }} // Set the initial opacity to 1
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0.5, 1], // Ensure opacity stays within range
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <motion.div
        className="absolute top-20 left-20 w-6 h-6 border border-white/20 rotate-45"
        initial={{ opacity: 1 }} // Set initial opacity to 1
        animate={{
          rotate: [45, 135, 45],
          opacity: [1, 0.5, 1], // Keep opacity consistent
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-8 h-8 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full"
        initial={{ opacity: 1 }} // Set initial opacity to 1
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.5, 1], // Ensure opacity doesn't drop too low
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400/60 to-pink-400/55 rotate-12"
        initial={{ opacity: 1 }} // Set initial opacity to 1
        animate={{
          rotate: [12, 72, 12],
          opacity: [1, 0.6, 1], // Ensure opacity stays stable
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent" />
    </div>
  );
}
