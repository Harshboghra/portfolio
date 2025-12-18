// Example of Scroll Animations for Sections
import { motion } from "framer-motion";

export default function Section({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const initialX = 0;
  return (
    <motion.div
      className="w-full py-20 lg:py-28"
      initial={{ opacity: 0, y: 50, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div className="max-w-6xl w-full px-6 mx-auto flex justify-center">
        <div className="w-full lg:w-[70%]">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
