"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

const images = ["/home/best-sale-2.jpg", "/home/best-sale-3.jpg"];

export default function ImageSliderHome() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // تشخیص موبایل بودن
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const paginate = (dir: number) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + dir + images.length) % images.length;
      return [newIndex, dir];
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: isMobile ? 0 : dir > 0 ? 300 : -300,
      y: isMobile ? 300 : 0,
      opacity: 0
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: isMobile ? 0 : dir > 0 ? -300 : 300,
      y: isMobile ? -300 : 0,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full h-full aspect-[2/1]  overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.img key={index} src={images[index]} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.6 }} className="absolute w-full h-full object-cover" />
      </AnimatePresence>

      {/* دکمه‌های جابجایی */}
      <div className="flex flex-col absolute md:top-[45%] left-[45%] top-[92%]  md:left-0 ">
        <button onClick={() => paginate(-1)} className="cursor-pointer hidden  md:flex items-center justify-center bg-[#FFB936] -translate-y-1/2 size-14 font-bold">
          <FaArrowLeft />
        </button>
        <button onClick={() => paginate(1)} className="cursor-pointer hidden  md:flex items-center justify-center -translate-y-1/2 bg-white text-black size-14 font-bold">
          <FaArrowRight />
        </button>

        <button onClick={() => paginate(-1)} className="cursor-pointer  flex md:hidden   items-center justify-center bg-[#FFB936] -translate-y-1/2 size-14 font-bold">
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
