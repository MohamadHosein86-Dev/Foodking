"use client";
import React from "react";

export default function ModalProfileUser({ close }) {
  return (
    <div className=" relative block md:hidden gap-[2rem] overflow-y-hidden  rounded-[16px]  w-full] ">
      <div className=" px-[2rem]    py-[1.5rem] flex justify-center  w-full ">
        <h2 className="  text-[#23242E] font-bold text-center  ">پیگیری📉</h2>
      </div>
      <svg onClick={() => close()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute cursor-pointer block md:hidden text-[#3C3D45] top-[2rem]  right-0  ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
}
