"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SwipperComponents from "../swiperForUsers/swiperForUsers";

export default function SwiperComponent() {
  const scope = useRef<HTMLDivElement>(null);
  const pitzza = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  const forVerticalDir = useScroll({
    target: scope,
    offset: ["start end", "end start"]
  });
  const forRotaionPitza = useScroll({
    target: pitzza,
    offset: ["start end", "end start"]
  });
  const rotPitzza = useTransform(forRotaionPitza.scrollYProgress, [0, 0.2, 0.5], [60, 180, 270]);
  const y = useTransform(forVerticalDir.scrollYProgress, [0, 0.2, 0.5], [-150, -50, 0]);
  const forhumbarger = useScroll({
    target: hamburger,
    offset: ["start end", "end start"]
  });

  const rotateHamburgur = useTransform(forhumbarger.scrollYProgress, [0, 0.2, 0.4], [60, 180, 270]);
  return (
    <div className="bg-slate-150  max-w-7xl  mx-auto flex w-full h-[37.5rem]">
      <section className=" hidden w-1/5 h-full xl:flex justify-center items-center">
        <div className="flex items-center h-full w-full">
          <motion.div className="w-30 ml-12 rotate-180 transition-all duration-500 " ref={hamburger} style={{ rotate: rotateHamburgur }}>
            <Image alt="#" width={120} height={120} src="/pages/menu_1/shape_food3.png" />
          </motion.div>
        </div>
      </section>
      <section className="w-3/5 mx-auto h-full flex-wrap flex justify-center items-center">
        <SwipperComponents />
      </section>
      <section className=" hidden w-1/5 h-full -space-y-60 flex-wrap xl:flex justify-end items-center">
        <div className="w-full mr-12 relative h-1/4">
          <motion.div style={{ y }} ref={scope} className="w-auto transition-all duration-500  absolute right-0">
            <Image alt="#" width={80} height={80} src="/pages/menu_1/shape_food1.png" />
          </motion.div>
        </div>
        <div className="w-full mr-12 relative h-1/4">
          <motion.div style={{ rotate: rotPitzza }} ref={pitzza} className="w-auto absolute transition-all duration-500  rotate-180 right-0">
            <Image alt="#" width={100} height={100} src="/pages/menu_1/shape_food2.png" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
