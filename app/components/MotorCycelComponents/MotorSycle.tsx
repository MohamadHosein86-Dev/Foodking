"use client";
import { useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";
import AnimatedChilli from "./components/AnimatedChilli";
import OrderButton from "./components/OrderButton";
import DeliveryManMotion from "./components/DeliveryManMotion";
import SloganSection from "./components/SloganSection";
import AnimatedImage from "./components/AnimatedImage";

interface PropsType {
  bg?: string;
}
export default function MotorSycle({ bg }: PropsType) {
  const motorCycleRef = useRef(null);
  const motorCycle = useScroll({
    target: motorCycleRef,
    offset: ["start end", "end start"]
  });
  const forMotorCycle = useTransform(motorCycle.scrollYProgress, [0, 0.5, 0.7, 1], [230, 55, 15, 0]);

  function Layout({ isMobile }: { isMobile: boolean }) {
    return (
      <div className={` ${bg} ${isMobile ? "flex sm:hidden" : "hidden sm:flex"} mt-24 h-96 w-full justify-center bg-cover bg-center bg-[#e7ed70]`} >
        <section className="relative h-full w-24">
          <AnimatedChilli />
        </section>
        <section className="flex items-center justify-start w-3/5 md:justify-center md:w-3/5 lg:justify-center lg:w-1/5 xl:justify-center xl:w-1/4 2xl:justify-center 2xl:w-1/4">
          <OrderButton />
        </section>
        <section className="relative sm:w-0 md:w-0 lg:w-[34.5rem] xl:w-[34.5rem] 2xl:w-[38.875rem]">
          <DeliveryManMotion motorCycleRef={motorCycleRef} forMotorCycle={forMotorCycle} />
        </section>
        <section className="relative h-full w-56 sm:w-88 md:w-92 lg:w-112 xl:w-128 2xl:w-180">
          <SloganSection />
          <AnimatedImage />
        </section>
      </div>
    );
  }

  return (
    <Fragment>
      <Layout isMobile={false} />
      <Layout isMobile={true} />
    </Fragment>
  );
}
