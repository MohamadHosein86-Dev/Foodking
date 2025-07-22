"use client";

import Link from "next/link";
import { FaSearch, FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function FavaritPage() {
  const data = {
    id: 3,
    createdAt: "1748788146514",
    updatedAt: "1748788146514",
    name: "روتی با مرغ",
    description: "روتی نرم و خوشمزه با مرغ گریل‌شده و سس مخصوص. این غذا با طعم خاص و عطر دلپذیر، تجربه‌ای متفاوت از روتی‌های معمولی را به شما هدیه می‌دهد",
    slug: "roti-chicken",
    inventory: 15,
    price: "37000.00",
    restaurant: 1,
    is_active: true,
    image: "https://storage.c2.liara.space/foodking/products/1748788146514-ruti.png"
  };
  return (
    <div className=" hidden md:block gap-8 rounded-2xl border-1 border-[#E7E7E8] w-200  xl:basis-7/10 ">
      <div className=" px-8  border-b-1 border-b-[#E7E7E8]  py-6 flex justify-between  w-full ">
        <h2 className="  text-[#23242E] font-bold text-lg  ">علاقه مندی ها</h2>
      </div>
      <div className="px-8 flex-col py-6 flex justify-between  w-full  ">
        <div className=" flex flex-col gap-4 w-full ">
          <div className=" flex items-center gap-2  ">
            <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#417F56] bg-[#E5F2E9] ">
              همه
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
            <button className=" cursor-pointer  px-3 py-2 rounded-full  flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              برگرها
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
            <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              روتی
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
            <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              پاستا
              <span>
                <FaArrowLeftLong />
              </span>
            </button>

            <button className="  cursor-pointer px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              پیتزا
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
            <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              مرغ گریل‌شده
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
            <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#353535] bg-[#EDEDED] ">
              پک‌های ترکیبی
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
          </div>
          <div className=" relative w-[47%] ">
            <input className=" border-2 text-black font-semibold pb-3 pr-2 rounded-lg py-1.5 w-full border-gray-300 " placeholder="جستجو" type="text" />
            <span className=" absolute top-4 left-3 ">
              <FaSearch color="gray" />
            </span>
          </div>
        </div>
        <div className=" grid pt-10 grid-cols-3 gap-4 ">
          <Link href={`/products/${data.slug}`} className="group border-2 border-gray-300 relative  bg-white cursor-pointer w-full sm:max-w-60  overflow-hidden rounded-xl block">
            {/* لایه زرد با افکت از بالا به پایین */}
            <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />

            {/* محتوای رویی */}
            <div className="relative z-10 w-full  flex justify-center   px-8 rounded-xl  mb-6">
              <img className="w-64 h-48 object-contain" src={data.image} alt={data.name} />
            </div>
            <div className="size-10 mt-4 flex items-center justify-center rounded-md hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-4 z-20">
              <svg className="pt-0.5 text-red-500 size-7" fill="red" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 className="relative z-10 text-xl md:text-lg font-medium text-center">{data.name}</h2>
            <div className=" flex my-2.5 justify-center ">
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
            </div>
            <p className="relative z-10 text-xl md:text-lg text-[#D12525] text-center font-semibold mb-6 mt-2">قیمت {data.price} تومان</p>

            <div className="absolute bottom-4 left-1/2 top-10 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button className="relative cursor-pointer w-full mt-12 group rounded-full h-10 overflow-hidden">
                <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
                <div className="relative z-10 flex justify-center items-center h-full w-full">
                  <p className="text-black group-hover:text-white px-4 py-2.5 text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
                </div>
              </button>
            </div>
          </Link>
          <Link href={`/products/${data.slug}`} className="group border-2 border-gray-300 relative  bg-white cursor-pointer w-full sm:max-w-60  overflow-hidden rounded-xl block">
            {/* لایه زرد با افکت از بالا به پایین */}
            <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />

            {/* محتوای رویی */}
            <div className="relative z-10 w-full  flex justify-center   px-8 rounded-xl  mb-6">
              <img className="w-64 h-48 object-contain" src={data.image} alt={data.name} />
            </div>
            <div className="size-10 mt-4 flex items-center justify-center rounded-md hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-4 z-20">
              <svg className="pt-0.5 text-red-500 size-7" fill="red" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 className="relative z-10 text-xl md:text-lg font-medium text-center">{data.name}</h2>
            <div className=" flex my-2.5 justify-center ">
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
            </div>
            <p className="relative z-10 text-xl md:text-lg text-[#D12525] text-center font-semibold mb-6 mt-2">قیمت {data.price} تومان</p>

            <div className="absolute bottom-4 left-1/2 top-10 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button className="relative cursor-pointer w-full mt-12 group rounded-full h-10 overflow-hidden">
                <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
                <div className="relative z-10 flex justify-center items-center h-full w-full">
                  <p className="text-black group-hover:text-white px-4 py-2.5 text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
                </div>
              </button>
            </div>
          </Link>
          <Link href={`/products/${data.slug}`} className="group border-2 border-gray-300 relative  bg-white cursor-pointer w-full sm:max-w-60  overflow-hidden rounded-xl block">
            {/* لایه زرد با افکت از بالا به پایین */}
            <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />

            {/* محتوای رویی */}
            <div className="relative z-10 w-full  flex justify-center   px-8 rounded-xl  mb-6">
              <img className="w-64 h-48 object-contain" src={data.image} alt={data.name} />
            </div>
            <div className="size-10 mt-4 flex items-center justify-center rounded-md hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-4 z-20">
              <svg className="pt-0.5 text-red-500 size-7" fill="red" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 className="relative z-10 text-xl md:text-lg font-medium text-center">{data.name}</h2>
            <div className=" flex my-2.5 justify-center ">
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
            </div>
            <p className="relative z-10 text-xl md:text-lg text-[#D12525] text-center font-semibold mb-6 mt-2">قیمت {data.price} تومان</p>

            <div className="absolute bottom-4 left-1/2 top-10 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button className="relative cursor-pointer w-full mt-12 group rounded-full h-10 overflow-hidden">
                <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
                <div className="relative z-10 flex justify-center items-center h-full w-full">
                  <p className="text-black group-hover:text-white px-4 py-2.5 text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
                </div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
