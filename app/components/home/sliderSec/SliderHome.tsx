"use client";
import ReusableOrderButton from "../../ui/btn/ReusableOrderButton";
import { FaTruckFast } from "react-icons/fa6";
import ImageSliderHome from "./ImageSliderHome";
import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";

export default function SliderSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div dir="rtl" className=" w-full  flex flex-col md:flex-row">
        <div className="w-full h-88 md:h-full  md:w-8/12">
          <ImageSliderHome />
        </div>
        <div className="w-full md:basis-4/12 text-white bg-sliderhome bg-[#D12525]  px-20 ">
          <div>
            <p className="text-base md:text-lg font-semibold mt-7 ">معامله روز</p>
            <h2 className="font-bold text-2xl md:text-3xl mt-3 mb-14">امروز روز همبرگر است</h2>
            <p className="font-semibold text-center mb-12">
              قیمت ویژه
              <strong className="font-semibold text-xl md:text-3xl"> 55 هزار تومان</strong>
            </p>
            <p className="font-semibold mb-10   ">سمفونی عالی طعم ها را بچشید این یک تجربه غذاخوری عالی است که در آن با همبرگر خاص ما، یک غذای آشپزی، سریع و کارآمد را تجربه کنید.</p>
            <ReusableOrderButton icon={<FaTruckFast size={22} className="text-white transition-all duration-500" />} className="relative mb-12 sm:mb-0 overflow-hidden outline-none  cursor-pointer border-1 border-white  text-white font-bold  w-64 py-4 pb-5 px-4 flex  items-center justify-center gap-2 group h-18 " hoverBgColor="group-hover:bg-[#00813D]" textColor="text-white" hoverTextColor="group-hover:text-white" rounded={true} fullWidth={false} text="اکنون سفارش دهید" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
