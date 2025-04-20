"use client";

import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";
import MoreAbout_testimonial from "@/components/related_testimonial/moreAbout_testimonial";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const motorCycleRef = useRef(null);
  const motorCycle = useScroll({
    target: motorCycleRef,
    offset: ["start end", "end start"]
  });

  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);

  const forMotorCycle = useTransform(motorCycle.scrollYProgress, [0, 0.5, 0.7, 1], [0, 150, 550, 1300]);

  return (
    <div ref={ref} className="w-full bg-amber-50">
      <motion.svg className="fixed bottom-4 left-4" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth="4" fill="none" />
        <motion.circle cx="30" cy="30" r="26" stroke="#cd0808" strokeWidth="4" fill="none" strokeDasharray="164" strokeDashoffset="164" style={{ strokeDashoffset }} />
      </motion.svg>

      {/* Header Section */}
      <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-95">
        <div className="space-y-5">
          <h1 className="font-semibold text-6xl text-white">گواهینامه</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold text-xl text-green-500">صفحه اصلی</h1>
            <FaChevronLeft className="mt-2 text-base text-green-500" />
            <h1 className="font-semibold text-xl text-slate-100">گواهینامه</h1>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div
        className="  mx-auto max-w-[82rem] py-[4rem]
px-[1.5rem] "
      >
        <div className="  grid justify-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[1rem]  space-y-3 w-full min-h-96 mt-12">
          <MoreAbout_testimonial role="بلاگر مواد غذایی" testimonialName="فرانک اچ. هیوستون" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/09.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="توسعه دهنده" testimonialName="جین کوپر" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/08.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="عاشق غذا" testimonialName="کنت میکس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/11.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/10.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/13.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نگاه کن پسر" testimonialName="فرانت کار" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/12.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full flex flex-wrap justify-center bg-[#e7ed70] mt-24 bg-no-repeat bg-cover bg-center h-96 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image.jpg)]">
        <section className="w-[188px] flex justify-start items-center h-full">
          <motion.div
            animate={{ translateY: [0, -200, 0] }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-24 h-20 transition-all duration-700 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)]"
          ></motion.div>
        </section>

        <section className="w-1/5 flex justify-center items-center">
          <button className="w-64 h-16 group relative font-semibold rounded-xl bg-slate-100">
            <div className="w-full h-full z-10 group-hover:text-white absolute inset-0 flex items-center justify-center space-x-1 font-semibold">
              <h1>اکنون سفارش دهید</h1>
              <TbTruckDelivery className="text-green-700 transition-all duration-500 group-hover:text-white text-2xl" />
            </div>
            <span className="absolute inset-0 w-full h-full rounded-xl bg-amber-400 scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-center"></span>
          </button>
        </section>

        <motion.div ref={motorCycleRef} transition={{ duration: 14 }} style={{ translateX: forMotorCycle as any }} className="transition-all duration-700 -translate-y-5 w-1/4 h-[350px] bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]"></motion.div>

        <section className="w-1/3 h-full flex justify-center items-center">
          <div className="w-full h-1/2">
            <h1 className="text-amber-300 text-xl text-right w-full font-semibold">ترد، هر لقمه طعم</h1>
            <h1 className="text-white text-right text-6xl w-full font-semibold">دقیقه سریع 45</h1>
            <div className="flex justify-end">
              <h1 className="text-white text-right text-6xl font-semibold">قول ما</h1>
              <h1 className="text-amber-300 text-right text-6xl font-semibold">تحویل</h1>
            </div>
          </div>
        </section>

        <section className="w-56 flex justify-end items-center h-full">
          <motion.div
            animate={{ translateY: [100, -200, 200] }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-24 h-1/2 transition-all duration-700 bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)]"
          ></motion.div>
        </section>
      </div>
    </div>
  );
}
