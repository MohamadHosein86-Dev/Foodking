"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-45 h-45 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin mb-6"></div>
      <motion.h1 className="text-6xl font-extrabold text-red-600" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        فودکینگ
      </motion.h1>
      <p className="text-orange-400 font-semibold mt-6 text-xl ">اندکی صبر کنید</p>
    </div>
  );
}
