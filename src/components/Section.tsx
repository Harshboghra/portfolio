// Example of Scroll Animations for Sections
import { motion } from "framer-motion";

export default function Section({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const initialX = align === "right" ? 120 : -120;
  const justifyClass = align === "right" ? "justify-end" : "justify-start";
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div className={`max-w-6xl w-full px-6 mx-auto flex ${justifyClass}`}>
        <div className="w-full lg:w-[60%]">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
