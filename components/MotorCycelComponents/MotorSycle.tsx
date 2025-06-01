"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { TbTruckDelivery } from "react-icons/tb";

interface PropsType {
  bg?: string;
}

export default function MotorSycle({ bg = "bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image.jpg)]" }: PropsType) {
  const motorCycleRef = useRef(null);
  const motorCycle = useScroll({
    target: motorCycleRef,
    offset: ["start end", "end start"]
  });

  const forMotorCycle = useTransform(motorCycle.scrollYProgress, [0, 0.5, 0.7, 1], [230, 55, 15, 0]);

  return (
    <>
      <div className={` ${bg} hidden sm:flex mt-24  h-96 w-full justify-center bg-cover bg-center bg-[#e7ed70] `}>
        {/* Chilli animation */}
        <section className="relative h-full w-24">
          <motion.div animate={{ y: [-33, 3, -33] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }} className="absolute right-0 top-40 h-20 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)] transition-all" />
        </section>

        {/* Button */}
        <section className="flex items-center justify-start w-3/5 md:justify-center md:w-3/5 lg:justify-center lg:w-1/5 xl:justify-center xl:w-1/4 2xl:justify-center 2xl:w-1/4">
          <button className="relative hidden h-16 w-48 rounded-xl bg-slate-100 font-semibold group sm:block md:w-64">
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-1 group-hover:text-white">
              <h1 className="text-xs font-semibold md:text-base">اکنون سفارش دهید</h1>
              <TbTruckDelivery className="text-2xl text-green-700 transition-all duration-500 group-hover:text-white" />
            </div>
            <span className="absolute inset-0 h-full w-full origin-center scale-0 rounded-xl transition-all duration-500 ease-out group-hover:scale-100 bg-amber-400" />
          </button>
        </section>

        {/* MotorCycle Image */}
        <section className="relative sm:w-0 md:w-0 lg:w-[552px] xl:w-[552px] 2xl:w-[622px]">
          <motion.div ref={motorCycleRef} transition={{ duration: 14 }} style={{ translateX: forMotorCycle }} className="absolute inset-0 hidden h-[350px] w-[400px] -translate-y-5 transition-all duration-700 md:hidden md:scale-80 lg:block lg:-translate-x-36 lg:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] xl:block xl:-translate-x-36 xl:scale-100 xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] 2xl:block 2xl:-translate-x-36 2xl:scale-100 2xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]" />
        </section>

        {/* Text + Floating image */}
        <section className="relative h-full w-[220px] sm:w-[350px] md:w-[370px] lg:w-[450px] xl:w-[520px] 2xl:w-[720px]">
          <div className="absolute top-36 z-10 h-1/2 w-[400px] -left-64 md:-left-36 lg:-left-20 xl:-left-12 2xl:-left-1">
            <h1 className="w-full text-right text-xl font-semibold text-amber-300">ترد، هر لقمه طعم</h1>
            <h1 className="w-full text-right text-3xl font-semibold text-white md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">دقیقه سریع 45</h1>
            <div className="flex justify-end">
              <h1 className="text-right text-2xl font-semibold text-white md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">قول ما</h1>
              <h1 className="text-right text-2xl font-semibold text-amber-300 md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">تحویل</h1>
            </div>
          </div>
          <motion.div animate={{ y: [-33, 3, -33] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }} className="absolute top-36 right-0 z-0 h-1/2 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)] transition-all" />
        </section>
      </div>
      <div className={` ${bg}  flex sm:hidden mt-24  h-96 w-full justify-center bg-cover bg-center bg-[#e7ed70] `}>
        {/* Chilli animation */}
        <section className="relative h-full w-24">
          <motion.div animate={{ y: [-33, 3, -33] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }} className="absolute right-0 top-40 h-20 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)] transition-all" />
        </section>

        {/* Button */}
        <section className="flex items-center justify-start w-3/5 md:justify-center md:w-3/5 lg:justify-center lg:w-1/5 xl:justify-center xl:w-1/4 2xl:justify-center 2xl:w-1/4">
          <button className="relative hidden h-16 w-48 rounded-xl bg-slate-100 font-semibold group sm:block md:w-64">
            <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-1 group-hover:text-white">
              <h1 className="text-xs font-semibold md:text-base">اکنون سفارش دهید</h1>
              <TbTruckDelivery className="text-2xl text-green-700 transition-all duration-500 group-hover:text-white" />
            </div>
            <span className="absolute inset-0 h-full w-full origin-center scale-0 rounded-xl transition-all duration-500 ease-out group-hover:scale-100 bg-amber-400" />
          </button>
        </section>

        {/* MotorCycle Image */}
        <section className="relative sm:w-0 md:w-0 lg:w-[552px] xl:w-[552px] 2xl:w-[622px]">
          <motion.div ref={motorCycleRef} transition={{ duration: 14 }} style={{ translateX: forMotorCycle }} className="absolute inset-0 hidden h-[350px] w-[400px] -translate-y-5 transition-all duration-700 md:hidden md:scale-80 lg:block lg:-translate-x-36 lg:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] xl:block xl:-translate-x-36 xl:scale-100 xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] 2xl:block 2xl:-translate-x-36 2xl:scale-100 2xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]" />
        </section>

        {/* Text + Floating image */}
        <section className="relative h-full w-[220px] sm:w-[350px] md:w-[370px] lg:w-[450px] xl:w-[520px] 2xl:w-[720px]">
          <div className="absolute top-36 z-10 h-1/2 w-[400px] -left-64 md:-left-36 lg:-left-20 xl:-left-12 2xl:-left-1">
            <h1 className="w-full text-right text-xl font-semibold text-amber-300">ترد، هر لقمه طعم</h1>
            <h1 className="w-full text-right text-3xl font-semibold text-white md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">دقیقه سریع 45</h1>
            <div className="flex justify-end">
              <h1 className="text-right text-2xl font-semibold text-white md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">قول ما</h1>
              <h1 className="text-right text-2xl font-semibold text-amber-300 md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">تحویل</h1>
            </div>
          </div>
          <motion.div animate={{ y: [-33, 3, -33] }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }} className="absolute top-36 right-0 z-0 h-1/2 w-24 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)] transition-all" />
        </section>
      </div>
    </>
  );
}
