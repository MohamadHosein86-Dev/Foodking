"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ children, direction = "up", delay = 0, className = "" }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDirection = () => {
    switch (direction) {
      case "up":
        return { y: 100 };
      case "down":
        return { y: -100 };
      case "left":
        return { x: 100 };
      case "right":
        return { x: -100 };
      default:
        return { y: 100 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getDirection() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirection() }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
