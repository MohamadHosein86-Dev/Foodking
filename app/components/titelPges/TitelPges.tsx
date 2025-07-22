import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function TitlePages({ currentpage, nextPage, secondPage }: { currentpage: string; nextPage: string; secondPage: string }) {
  return (
    <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] bg-cover bg-no-repeat object-contain inset-8  bg-[center_top_30%] w-full flex justify-center items-center h-88 ">
      <div className="text-center space-y-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">{currentpage}</h1>
        <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
          <span className="text-green-500 font-semibold">{nextPage}</span>
          <FaChevronLeft className="mt-1 text-green-500" />
          <span className="text-white font-semibold">{secondPage}</span>
        </div>
      </div>
    </div>
  );
}
