import { InterItemData } from "@/app/data/Data";
import React from "react";
import InterItem from "./InterItem";

export default function InterItems() {
  return (
    <div className="  basis-[55%] text-right pt-[2rem] space-y-6">
      <h2 className="text-green-600  text-[1.2rem] md:text-lg font-bold">در مورد غذای ما</h2>
      <h1 className=" text-[2.4rem] md:text-6xl mb-[3rem] font-bold ">
        جایی که کیفیت با عالی <br /> روبرو می‌شود <span className="text-green-600">سرویس.</span>
      </h1>
      <div className="flex justify-start  flex-col gap-8 sm:flex-row items-center text-sm mt-8">
        {InterItemData.map((res) => (
          <InterItem key={res.id} data={res} />
        ))}
      </div>
      <div className="flex gap-x-6 flex-col sm:flex-row justify-start items-center">
        <button className="relative overflow-hidden outline-none rounded-md cursor-pointer bg-[#00813D]   text-white font-bold    w-[15rem] py-[1rem] pb-[1.3rem] px-[1rem] xl:flex hidden items-center justify-center gap-[.5rem] group h-16">
          <span className="absolute inset-0 bg-[#D12525] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md"></span>
          <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-white">اطلاعات بیشتر درباره ما</span>
        </button>
        <div>
          <h3 className="text-red-500 font-bold ">برندون گاری</h3>
          <p className="text-black font-semibold">تجربه مشتری بالاترین اولویت ما است.</p>
        </div>
      </div>
    </div>
  );
}
