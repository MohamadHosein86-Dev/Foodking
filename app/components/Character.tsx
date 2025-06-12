"use client";

import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function Character({ paragraph, offsetViewportStart, reverse, title, image }: { paragraph: string; offsetViewportStart: number; reverse?: boolean; title: string; image: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [`start ${offsetViewportStart}`, `start 0`]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      ref={container}
      style={{ opacity, y }}
      className={cn("flex rounded-[16px] border-[1px] px-[1.2rem] py-[1.7rem] border-[#fff] md:gap-5 max-w-[25rem] flex-col", {
        "md:flex-row-reverse": reverse
      })}
    >
      <div className={`${image === "/photo.png" ? "-mt-9" : "-mt-14"} w-35 md:w-44`}>
        <img className="-ml-11" src={image} alt="" />
      </div>
      <p className="-mt-9 md:-mt-14 text-[#fff] font-bold text-left text-lg md:text-xl">{title}</p>
      <p className="flex text-sm md:text-base font-light mt-2 md:-mt-3 text-[#fff] flex-wrap">{paragraph}</p>

      <button className="flex items-center gap-[8px] text-white mr-auto">
        Book Now{" "}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
    </motion.div>
  );
}
