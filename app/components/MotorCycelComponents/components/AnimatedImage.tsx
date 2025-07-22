"use client"
import { motion } from "framer-motion";

export default function AnimatedImage() {
    return (
      <motion.div
        animate={{ y: [-33, 3, -33] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        className="absolute top-36 right-0 z-0 h-1/2 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)] transition-all"
      />
    );
  }