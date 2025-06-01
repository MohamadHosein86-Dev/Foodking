"use client";

import { FaTruckFast } from "react-icons/fa6";
import Btn from "../ui/btn";
import ImageSliderHome from "./ImageSliderHome";

export default function SliderHome() {
  return (
    <section dir="rtl">
      <div className="flex flex-col md:flex-row">
        {/* اسلایدر */}
        <div className="w-full h-[22rem] md:h-[120%]  md:w-[65%]">
          <ImageSliderHome />
        </div>

        {/* باکس قرمز کناری */}
        <div className="w-full md:basis-[35%] text-white bg-sliderhome bg-[#D12525]  px-[5rem] ">
          <div>
            <p className="text-[1rem] md:text-[1.2rem] font-semibold mt-[1.9rem] ">معامله روز</p>
            <h2 className="font-bold text-[1.6rem] md:text-[2rem] mt-[.8rem] mb-[3.5rem]">امروز روز همبرگر است</h2>
            <p className="font-semibold text-center mb-[3rem]">
              قیمت ویژه
              <strong className="font-semibold text-[1.4rem] md:text-[2rem]"> 55 هزار تومان</strong>
            </p>
            <p className="font-semibold mb-[2.5rem]   ">سمفونی عالی طعم ها را بچشید این یک تجربه غذاخوری عالی است که در آن با همبرگر خاص ما، یک غذای آشپزی، سریع و کارآمد را تجربه کنید.</p>
            <button
              className="relative mb-[3rem] sm:mb-0 overflow-hidden outline-none  cursor-pointer border-[1px] border-white  text-white font-bold 
w-[16rem] py-[1rem] pb-[1.3rem] px-[1rem] flex  items-center justify-center gap-[.5rem] group h-18 "
            >
              {/* لایه انیمیشنی با ترنزیشن scale از وسط */}
              <span className="absolute inset-0 bg-[#00813D] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 " />

              {/* محتوای دکمه بالای لایه رنگ */}
              <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-white">
                <FaTruckFast size={22} className="text-white transition-all duration-500" />
                اکنون سفارش دهید
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
