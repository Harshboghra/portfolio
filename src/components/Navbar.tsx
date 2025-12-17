import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg shadow-sm"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <motion.button
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onClick("home")}
          className="font-semibold tracking-tight text-lg"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Harsh
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground"
          >
            .dev
          </motion.span>
        </motion.button>

        <nav className="hidden gap-6 md:flex">
          {links.map((l, index) => (
            <motion.button
              key={l.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                color: "var(--primary)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onClick(l.id)}
              className="text-sm text-muted-foreground transition hover:text-foreground relative"
            >
              {l.label}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </nav>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          href="mailto:harshboghara25@gmail.com"
          className="rounded-xl border border-border/60 px-4 py-2 text-sm font-medium transition hover:bg-accent hover:border-primary/50"
        >
          Hire me
        </motion.a>
      </div>
    </motion.header>
  );
}
