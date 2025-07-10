"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimationTestimonial() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);
  return (
    <motion.svg className="fixed bottom-4 left-4" width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth="4" fill="none" />
      <motion.circle cx="30" cy="30" r="26" stroke="#cd0808" strokeWidth="4" fill="none" strokeDasharray="164" strokeDashoffset="164" style={{ strokeDashoffset }} />
    </motion.svg>
  );
}
