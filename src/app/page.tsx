"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBar from "@/components/FloatingBar";
import NavBar from "@/components/NavBar";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import { useSwipeable } from "react-swipeable";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<"home" | "projects">("home");

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveSection("projects"),
    onSwipedRight: () => setActiveSection("home"),
  });

  return (
    <main {...handlers} className="relative overflow-x-hidden">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <FloatingBar />

      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <motion.div
            key="home"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Home />
          </motion.div>
        )}

        {activeSection === "projects" && (
          <motion.div
            key="projects"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}