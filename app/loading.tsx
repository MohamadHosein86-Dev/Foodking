"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="w-24 h-24 border-4 border-green-700 border-dashed rounded-full animate-spin flex items-center justify-center">{/* Optional: Inner circle or logo space */}</div>sfddedvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }} // حذف delay
        className="text-green-700 text-6xl font-bold mt-8"
      >
        فودکینگ
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="text-amber-500 text-lg mt-4">
        اندکی صبر کنید
      </motion.p>
    </div>
  );
}
