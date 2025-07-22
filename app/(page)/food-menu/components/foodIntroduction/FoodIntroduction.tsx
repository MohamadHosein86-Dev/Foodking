import React from "react";
import SwiperFoodMenu from "../swiperFoodMenu/SwiperFoodMenu";
import FoodMenuItem from "../foodMenuItem/FoodMenuItem";
import { FoodMenuItems } from "@/app/data/Data";
import TitleFoodMenu from "../titelFoodMenu/TitelFoodMenu";

export default function FoodIntroduction() {
  return (
    <div className="my-36 w-full">
      <TitleFoodMenu />
      <div className="  grid grid-cols-1 lg:grid-cols-12 gap-4 gap-y-12  border-1 border-dotted mx-5 xl:mx-auto max-w-7xl  py-18 my-5 rounded-2xl  px-8 lg-px-0">
        {FoodMenuItems.map((res) => (
          <FoodMenuItem key={res.id} data={res} />
        ))}
      </div>
      <SwiperFoodMenu />
    </div>
  );
}
