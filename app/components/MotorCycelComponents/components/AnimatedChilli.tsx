"use client"
import { motion } from "framer-motion";

export default function AnimatedChilli() {
    return (
      <motion.div
        animate={{ y: [-33, 3, -33] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        className="absolute right-0 top-40 h-20 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)] transition-all"
      />
    );
  }