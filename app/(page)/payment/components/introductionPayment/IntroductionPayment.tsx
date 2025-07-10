import React from "react";
import { FaTrash } from "react-icons/fa";

export default function IntroductionPayment() {
  const index = 4;
  return (
    <div className=" basis-[40%] h-[80%] py-[1.5rem] rounded-[.8rem] px-[1rem] border-[2px] border-gray-300 ">
      <div className=" mb-[1.3rem] pb-[1.3rem] border-b-[2px] border-gray-300 items-center flex justify-between ">
        <p className=" text-[#353535] ">سبد خرید ({index})</p>
        <p>
          <FaTrash color="gray" />
        </p>
      </div>
      <div className=" mb-[1.5rem] overflow-x-auto h-[180px] crolla ">
        <div className="   bg-[#F9F9F9] px-[1rem] py-[.6rem] flex items-center justify-between ">
          <div className=" text-sm ">
            <p className=" text-[#000000] ">پاستا سبزیجات</p>
            <p className=" text-[#717171] ">140,000 هزار تومن</p>
          </div>
          <div className=" h-8  flex justify-center items-center">
            <button className=" cursor-pointer  bg-[#E5F2E9]   group  px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56]  duration-700 group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
            <div className="text-[.8em] font-bold bg-[#E5F2E9] text-[#417F56]   py-[3px] border-r-0 border-l-0  px-2 ">0</div>
            <button className="    cursor-pointer bg-[#E5F2E9]    group px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56] duration-700  group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="   bg-[#EDEDED] px-[1rem] py-[.6rem] flex items-center justify-between ">
          <div className=" text-sm ">
            <p className=" text-[#000000] ">پاستا سبزیجات</p>
            <p className=" text-[#717171] ">140,000 هزار تومن</p>
          </div>
          <div className=" h-8  flex justify-center items-center">
            <button className=" cursor-pointer  bg-[#E5F2E9]   group  px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56]  duration-700 group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
            <div className="text-[.8em] font-bold bg-[#E5F2E9] text-[#417F56]   py-[3px] border-r-0 border-l-0  px-2 ">0</div>
            <button className="    cursor-pointer bg-[#E5F2E9]    group px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56] duration-700  group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="   bg-[#F9F9F9] px-[1rem] py-[.6rem] flex items-center justify-between ">
          <div className=" text-sm ">
            <p className=" text-[#000000] ">پاستا سبزیجات</p>
            <p className=" text-[#717171] ">140,000 هزار تومن</p>
          </div>
          <div className=" h-8  flex justify-center items-center">
            <button className=" cursor-pointer  bg-[#E5F2E9]   group  px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56]  duration-700 group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
            <div className="text-[.8em] font-bold bg-[#E5F2E9] text-[#417F56]   py-[3px] border-r-0 border-l-0  px-2 ">0</div>
            <button className="    cursor-pointer bg-[#E5F2E9]    group px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56] duration-700  group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="   bg-[#EDEDED] px-[1rem] py-[.6rem] flex items-center justify-between ">
          <div className=" text-sm ">
            <p className=" text-[#000000] ">پاستا سبزیجات</p>
            <p className=" text-[#717171] ">140,000 هزار تومن</p>
          </div>
          <div className=" h-8  flex justify-center items-center">
            <button className=" cursor-pointer  bg-[#E5F2E9]   group  px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56]  duration-700 group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
            <div className="text-[.8em] font-bold bg-[#E5F2E9] text-[#417F56]   py-[3px] border-r-0 border-l-0  px-2 ">0</div>
            <button className="    cursor-pointer bg-[#E5F2E9]    group px-2 py-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-[#417F56] duration-700  group-hover:text-green-800 text-lg" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" mb-[1.3rem] py-[1.3rem] border-t-[2px] border-b-[2px] border-gray-300 items-center flex justify-between ">
        <p className=" text-[#353535] ">تخفیف محصولات</p>
        <p className=" text-gray-500 ">63,000 تومان</p>
      </div>
      <div className=" mb-[1.3rem] gap-[12px] pb-[1.3rem] flex flex-col border-b-[2px] border-gray-300 ">
        <div className=" items-center flex justify-between   ">
          <p className=" text-[#353535] "> هزینه ارسال </p>
          <p className="text-gray-500">29,000 تومان</p>
        </div>
      </div>
      <div className="    gap-[.5rem] flex flex-col ">
        <div className="  items-center flex justify-between  ">
          <p className=" text-[#353535] "> مبلغ قابل پرداخت </p>
          <p className=" text-[#417F56] font-semibold ">۵۴۲٬۰۰۰ تومان</p>
        </div>
        <button className="relative mt-[1rem] mx-auto bg-[#417F56] md:ml-auto overflow-hidden outline-none rounded-md cursor-pointer   text-white  w-full  pb-[.2rem] px-[1rem] flex  items-center justify-center gap-[.5rem] group h-12 ">
          <span className="relative z-10 flex items-center gap-2 text-base ">
            تایید و پرداخت
            <img src="/payment/card.png" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
