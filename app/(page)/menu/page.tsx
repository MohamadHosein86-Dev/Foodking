"use client";
import { FoodMenuItems } from "@/app/data/Data";
import FoodMenuItem from "../food-menu/components/foodMenuItem/FoodMenuItem";
import SwiperMenu from "./components/swiperMenu/SwiperMenu";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Menu() {
  return (
    <section dir="rtl">
      <TitlePages currentpage="منو غذا " nextPage="صفحه اصلی" secondPage="فروشگاه" />
      <div className="my-[140px] w-full">
        <h5 className="text-center text-[var(--primaryColor)] my-2 font-bold">درباره غذای ما</h5>
        <h2 className="text-center  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">منوی غذای پرطرفدار</h2>
        <div className="  grid grid-cols-1 lg:grid-cols-12 gap-4 gap-y-12  border-1 border-dotted mx-5 xl:mx-auto max-w-[79rem]  py-[4.5rem] my-5 rounded-2xl  px-[2rem] lg-px-0">
          {FoodMenuItems.map((res) => (
            <FoodMenuItem key={res.id} data={res} />
          ))}
        </div>
        <SwiperMenu />
      </div>
    </section>
  );
}
