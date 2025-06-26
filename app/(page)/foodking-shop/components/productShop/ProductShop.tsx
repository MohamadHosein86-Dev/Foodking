import { getProducts } from "@/servises/api-product";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

export default async function ProductShop() {
  const products = await getProducts();
  return (
    <section className=" grid grid-cols-4 mt-[3rem]  gap-y-6 ">
      {products?.map((res) => (
        <Link key={res.id} href={`/products/${res.slug}`} className="group border-[2px] border-gray-300 relative  bg-white cursor-pointer w-full sm:max-w-[17rem]  overflow-hidden rounded-xl block">
          {/* لایه زرد با افکت از بالا به پایین */}
          <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />

          {/* محتوای رویی */}
          <div className="relative z-10 w-full  flex justify-center   px-8 rounded-[1rem]  mb-6">
            <img className="w-[16rem] h-[11.5rem] object-contain" src={res.image} alt={res.name} />
          </div>
          <div className="size-[2.5rem] mt-[1rem] flex items-center justify-center rounded-[5px] hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-[1rem] z-20">
            <svg className="pt-[2px] text-red-500 size-[1.7rem]" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <h2 className="relative z-10 text-[1.4rem] md:text-[1.2rem] font-medium text-center">{res.name}</h2>
          <div className=" flex my-[10px] justify-center ">
            <FaStar color="#FFB936" />
            <FaStar color="#FFB936" />
            <FaStar color="#FFB936" />
            <FaStar color="#FFB936" />
          </div>
          <p className="relative z-10 text-[1.3rem] md:text-[1.2rem] text-[#D12525] text-center font-semibold mb-[1.5rem] mt-2">قیمت {res.price} تومان</p>

          <div className="absolute bottom-4 left-1/2 top-0 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button className="relative cursor-pointer w-full mt-12 group rounded-full h-[2.5rem] overflow-hidden">
              <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
              <div className="relative z-10 flex justify-center items-center h-full w-full">
                <p className="text-black group-hover:text-white px-4 py-[.6rem] text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
              </div>
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
}
