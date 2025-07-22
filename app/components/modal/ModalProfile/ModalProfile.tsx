"use client";
import React from "react";

interface PropsType {
  close: () => void;
}
export default function ModalProfileUser({ close }: PropsType) {
  return (
    <div className=" relative block md:hidden gap-8 overflow-y-hidden rounded-2xl w-full ">
      <div className=" px-8    py-6 flex justify-center  w-full ">
        <h2 className="  text-[#23242E] font-bold text-center  ">پیگیری📉</h2>
      </div>
      <svg onClick={() => close()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute cursor-pointer block md:hidden text-[#3C3D45] top-8  right-0  ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
}
