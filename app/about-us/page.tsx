"use client";

import Image from "next/image";
import burgur from "@/public/burger-4.png";
import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
import SwiperForUsers from "@/components/related_chefPage/swiperForUsers";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import TitelPages from "@/components/titelCompo/TitelPges";
import FoodProcessing from "@/components/FoodProcessing_aboutUs/FoodProcessing";
import MotorSycle from "@/components/MotorCycelComponents/MotorSycle";

const AboutUs: React.FC = () => {
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
    <>
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">درباره ما</h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-green-500 font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-white font-semibold">درباره ما</span>
          </div>
        </div>
      </TitelPages>
      <div dir="rtl" className="flex flex-col gap-y-12 md:flex-row items-center justify-evenly p-6 md:p-16 bg-[#fffefb]">
        {/* Image Section */}
        <div className="md:w-1/2 relative mb-10 md:mb-0">
          <div className=" relative  ">
            <Image src={burgur} alt="Burger" width={600} height={600} className="rounded-xl" />
            <img className=" absolute top-[1rem] " alt="Burger" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-text-4.png" />
          </div>
          <div className="absolute bottom-8 left-8 bg-orange-400 text-white p-5 rounded-xl rotate-[30deg] text-4xl font-bold">از سال ۱۹۸۵</div>
          <div className="absolute bottom-0 right-3 text-black p-5 rounded-xl text-4xl font-bold">0 تومان</div>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 text-right space-y-6">
          <h2 className="text-green-600 text-lg font-semibold">در مورد غذای ما</h2>
          <h1 className="!text-[40px] md:text-5xl font-bold leading-snug">
            جایی که کیفیت با عالی <br /> روبرو می‌شود <span className="text-green-600">سرویس.</span>
          </h1>
          <p className="text-gray-600 text-lg leading-loose">این تجربه ناهار خوری عالی است که در آن هر ظرف با تازه و با کیفیت بالا درست می شود. خدمات سریع و کارآمد را تجربه کنید که تضمین می کند غذای شما تازه سرو می شود تجربه غذاخوری که در آن هر ظرف با مواد تازه و با کیفیت بالا درست می شود.</p>
          <div className="flex justify-start items-center text-sm mt-4">
            <div className="flex gap-x-5 justify-center items-start">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <g>
                    <rect x="22" y="12" width="20" height="2" />
                    <rect x="24" y="14" width="16" height="8" />
                    <path d="M24 22h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
                    <path d="M24 30h16v4H24z" />
                    <path d="M24 34h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
                    <circle cx="16" cy="44" r="8" />
                    <polyline points="12 44 15 47 20 40" />
                    <path d="M12 52l1 8 3-2 3 2 1-8" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="font-bold text-[16px]">غذای فوق‌العاده با کیفیت</h3>
                <p className="max-w-52 font-bold">تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می‌کنند</p>
              </div>
            </div>
            <div className="flex gap-x-5 justify-center items-start">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <g>
                    <circle cx="32" cy="26" r="6" />
                    <path d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12v2H20v-2z" />
                    <path d="M32 8l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L32 15l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L32 8z" />
                    <path d="M16 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L16 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L16 10z" />
                    <path d="M48 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L48 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L48 10z" />
                    <circle cx="48" cy="48" r="8" />
                    <polyline points="45 48 47 50 51 46" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="font-bold text-lg">شهرت خوب</h3>
                <p className="font-bold max-w-52">تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می‌کنند</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 justify-start items-center">
            <button className="bg-green-600 cursor-pointer text-white w-[250px] py-6 mt-4 rounded-xl shadow hover:bg-red-700">اطلاعات بیشتر درباره ما</button>
            <div>
              <h3 className="text-red-500 font-bold mt-6">برندون گاری</h3>
              <p className="text-black font-semibold">تجربه مشتری بالاترین اولویت ما است.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chef bg-amber-50 py-1">
        {/* //! دیدار با کارشناس ها و سرآشپزها */}
        <div className="w-full flex-wrap space-y-4 flex mt-[7rem] justify-center items-end">
          <h1 className="font-semibold w-full text-center text-xl text-green-700">در مورد غذای ما</h1>
          <h1 className="font-semibold w-full text-center text-5xl text-slate-800">با سرآشپزهای متخصص ما ملاقات کنید</h1>

          <div className="flex flex-wrap justify-center gap-12 w-2/3 min-h-96 mt-12">
            <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
            <MoreAbout_chef role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
            <MoreAbout_chef role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          </div>
        </div>
        <div className="bg-slate-150 flex w-full h-[600px]">
          <section className=" w-1/5 h-full -space-y-60 flex-wrap flex justify-end items-center">
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
          <section className="w-3/5 h-full flex-wrap flex justify-center items-center">
            <SwiperForUsers />
          </section>
          <section className=" w-1/5 h-full flex justify-center items-center">
            <div className="flex items-center h-full w-full">
              <motion.div className="w-30 ml-12 rotate-180 transition-all duration-500 " ref={hamburger} style={{ rotate: rotateHamburgur }}>
                <Image alt="#" width={120} height={120} src="/pages/menu_1/shape_food3.png" />
              </motion.div>
            </div>
          </section>
        </div>
        <FoodProcessing />
      </div>
      <div className=" mt-[-6rem] ">
        <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
      </div>
    </>
  );
};

export default AboutUs;
