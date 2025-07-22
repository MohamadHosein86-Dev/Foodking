import React from "react";
import ReusableOrderButton from "../../ui/btn/ReusableOrderButton";
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
    <div dir="rtl" className=" w-full md:w-120  relative  p-12 text-white h-100 bg_home ">
      <div>
        <p className=" text-[#FFB936] font-semibold ">شروع قیمت از 25 هزار تومان</p>
        <h2 className=" text-5xl w-1/4 font-bold leading-16 ">ویژه مرغ سوخاری</h2>
        <ReusableOrderButton
          icon={<FaTruckFast size={22} className="transition-all duration-500" />}
          className={`mt-6 ${bg} ${color} relative overflow-hidden outline-none  cursor-pointer  bg-[#D12525] text-white font-bold w-60  md:w-68 py-4 pb-5 px-4 flex  items-center justify-center gap-2 group h-16`}
          hoverBgColor="group-hover:bg-[#ffff]"
          textColor="text-white"
          hoverTextColor="group-hover:text-black"
          rounded={true}
          fullWidth={false}
          text="اکنون سفارش دهید"
        />
      </div>
      <div className={` ${colorPrice}  flex items-center justify-center font-semibold w-24 h-23 left-10  top-12 absolute ${box ? box : "bg-foodbox"} `}>{price}</div>
    </div>
  );
}
