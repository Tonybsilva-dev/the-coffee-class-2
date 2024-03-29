'use client'

import { motion, useScroll } from "framer-motion";

export function ScrollProgressHorizontal() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-2 bg-orange-400"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}
