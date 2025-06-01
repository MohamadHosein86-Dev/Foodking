"use client";

import { FaChevronLeft } from "react-icons/fa";
import MoreAbout_testimonial from "@/components/related_testimonial/moreAbout_testimonial";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import MotorSycle from "@/components/MotorCycelComponents/MotorSycle";
import TitelPages from "@/components/titelCompo/TitelPges";

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

  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);

  return (
    <div className="w-full bg-[#F4F1EA]">
      {/* Scroll progress ring */}
      <motion.svg className="fixed bottom-4 left-4" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth="4" fill="none" />
        <motion.circle cx="30" cy="30" r="26" stroke="#cd0808" strokeWidth="4" fill="none" strokeDasharray="164" strokeDashoffset="164" style={{ strokeDashoffset }} />
      </motion.svg>

      {/* Header Section */}
      <TitelPages>
        <div className="space-y-5">
          <h1 className="font-semibold text-6xl text-white"> گواهینامه </h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold text-xl text-green-700">صفحه اصلی</h1>
            <FaChevronLeft className="mt-2 text-base text-green-700" />
            <h1 className="font-semibold text-xl text-white">گواهینامه</h1>
          </div>
        </div>
      </TitelPages>

      {/* Testimonial cards */}
      <div className="mt-[6rem] mb-[2rem] flex w-full flex-wrap items-end justify-center space-y-4">
        <div className="grid max-w-[82rem] grid-cols-1 gap-[2rem] px-[1rem] py-[.7rem] sm:grid-cols-2 sm:px-[3rem] xl:grid-cols-3 xl:px-[1.6rem]">
          <MoreAbout_testimonial role="بلاگر مواد غذایی" testimonialName="فرانک اچ. هیوستون" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/09.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="توسعه دهنده" testimonialName="جین کوپر" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/08.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="عاشق غذا" testimonialName="کنت میکس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/11.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/10.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/13.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
          <MoreAbout_testimonial role="نگاه کن پسر" testimonialName="فرانت کار" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/12.jpg" content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد را به روی میز بیاورید..." />
        </div>
      </div>
      <MotorSycle />
    </div>
  );
}
