"use client";
import { FaChevronLeft } from "react-icons/fa";
import IntroductionChef from "./components/introductionChef/introductionChef";

export default function Chef() {
  return (
    <div className="w-full bg-amber-50">
      <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-90">
        <div className=" space-y-5">
          <h1 className="font-semibold  text-6xl text-white"> سایر اعضا</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold  text-xl text-green-500"> صفحه اصلی</h1>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />
            <h1 className="font-semibold  text-xl text-green-500"> فروشگاه</h1>
            <FaChevronLeft className="mt-2 font-semibold  text-base text-green-500" />
            <h1 className="font-semibold  text-xl text-slate-100"> آشپز</h1>
          </div>
        </div>
      </div>
      <IntroductionChef />
    </div>
  );
}
