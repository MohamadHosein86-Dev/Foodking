import React from "react";
import { FaTruckFast } from "react-icons/fa6";

interface propsType {
  bg: string;
  color?: string;
  colorPrice?: string;
  price: string;
  box?: string;
}
export default function FoodBox({ bg, box, color = "text-[#fff]", price = "", colorPrice = "text-[#212121]" }: propsType) {
  return (
    <div dir="rtl" className=" w-full md:w-[30rem]  relative  p-12 text-white h-[25rem] bg_home ">
      <div>
        <p className=" text-[#FFB936] font-semibold ">شروع قیمت از 25 هزار تومان</p>
        <h2 className=" text-[3.2rem] w-[25%] font-bold leading-[4rem] ">ویژه مرغ سوخاری</h2>
        <button className={` mt-[1.5rem] ${bg} ${color} relative overflow-hidden outline-none  cursor-pointer  bg-[#D12525] text-white font-bold w-[15rem]  md:w-[17rem] py-[1rem] pb-[1.3rem] px-[1rem] flex  items-center justify-center gap-[.5rem] group h-16 `}>
          <span className="absolute inset-0 bg-[#ffff] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 " />
          <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-black">
            اکنون سفارش دهید
            <FaTruckFast size={22} className="  transition-all duration-500" />
          </span>
        </button>
      </div>
      <div className={` ${colorPrice}  flex items-center justify-center font-semibold w-[6rem] h-[5.8rem] left-[2.5rem]  top-[3rem] absolute ${box ? box : "bg-foodbox"} `}>{price}</div>
    </div>
  );
}
