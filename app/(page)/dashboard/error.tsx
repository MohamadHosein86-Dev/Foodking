"use client";
import { motion } from "framer-motion";

export default function Error({ error }: { error: { message: string } }) {
  const { message } = error;

  return (
    <motion.div className="mx-4 px-4 py-8 rounded-2xl sm:mx-auto my-45  border border-[#aaaaaa3c] font-semibold cursor-pointer sm:w-3/5 text-red-500 text-center text-sm sm:text-lg" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
      <h1 className="text-xl font-extrabold text-red-600">{message} - Error while loading currencies. Please try again later</h1>
    </motion.div>
  );
}
