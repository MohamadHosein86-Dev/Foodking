"use client";
import ReusableOrderButton from "../../ui/btn/ReusableOrderButton";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";

export default function PitzaSec({ showSticky, open }: { open: boolean; showSticky: boolean }) {
  const loaction = usePathname();
  if (loaction == "/")
    return (
      <section className=" bg-[url(/home/hero-bg-3.jpg)] ">
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="  flex-col lg:flex-row relative pt-16 text-end mx-auto max-w-7xl  py-12 items-center flex justify-between lg:px-16 px-6 xl:px-6  ">
            <div className={` xl:w-2/5  w-full ${showSticky || open ? "z-1" : ""} z-50   mt-16 `}>
              <h1 className=" text-[#ffff] text-center lg:text-right  font-semibold leading-16 sm:leading-20 lg:leading-[8.5rem] xl:leading-[9.8rem] -mt-24 xl:-mt-40 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl xl:ml-auto ">پیتزای فوق العاده خوشمزه </h1>
              <h4 className=" text-[#ffff] text-center text-xl font-semibold mt-6 sm:mt-12 mb-8 mx-auto xl:ml-auto  ">فقط با 25 هزارتومان سفارش خود را ستاره دار کنید</h4>
              <ReusableOrderButton
                icon={<FaArrowLeft className="mb-[-.5rem]" size={20} />}
                className="relative mx-auto md:ml-auto overflow-hidden outline-none rounded-md cursor-pointer  bg-[#FFB936] text-black font-bold   w-68 py-4 pb-5 px-4 flex  items-center justify-center gap-2 group h-16"
                bgColor="bg-[#FFB936]"
                hoverBgColor="group-hover:bg-[#ffff]"
                textColor="text-black"
                hoverTextColor="group-hover:text-black"
                rounded={true}
                fullWidth={false}
                text="اکنون سفارش دهید"
              />
            </div>
            <div className=" z-1 ">
              <motion.img
                src="/home/pizza-home.png"
                alt="Pizza"
                className=" mt-4 mx-auto lg:ml-auto xl:mt-36 w-4/5 lg:w-full  xl:w-9/10 "
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
              />
              <img className=" absolute top-32  -left-11  xl:block  hidden   " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-5.png" alt="" />
              <img className={` absolute top-28 -right-8  xl:block  hidden  ${showSticky ? "z-0" : "z-[100] "} `} src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2.png" alt="" />
              <img className=" absolute top-16 right-[40rem]  xl:block  hidden  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-3.png" alt="" />
              <img className=" absolute top-[46.5rem]  left-[79.1rem] xl:block  hidden   " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2-1.png" alt="" />
              <img className=" absolute top-[52rem] left-[46em]   xl:block  hidden  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-4.png" alt="" />
              <img className=" absolute top-[47rem]  -left-18  xl:block  hidden  " src="https://t-theme.com/foodking/wp-content/uploads/2024/02/frame-6.png" alt="" />
            </div>
          </div>
        </ScrollAnimation>
      </section>
    );
}
