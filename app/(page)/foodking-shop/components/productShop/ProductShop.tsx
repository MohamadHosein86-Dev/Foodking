import { getProducts } from "@/app/servises/products/product";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

export default async function ProductShop() {
  const products = await getProducts();
  return (
    <section className=" w-full ">
      <div className=" grid grid-cols-4 mt-12  gap-y-6 ">
        {products?.map((res) => (
          <Link key={res.id} href={`/products/${res.slug}`} className="group border-2 border-gray-300 relative  bg-white cursor-pointer w-full sm:max-w-68  overflow-hidden rounded-xl block">
            <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />
            <div className="relative z-10 w-full  flex justify-center   px-8 rounded-xl  mb-10">
              <img className="w-64 h-46 object-contain" src={res.image} alt={res.name} />
            </div>
            <div className="size-10 mt-4 flex items-center justify-center rounded-md hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-4 z-20">
              <svg className="pt-0.5 text-red-500 size-7" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 className="relative z-10 text-xl md:text-lg font-medium text-center">{res.name}</h2>
            <div className=" flex my-2.5 justify-center ">
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
              <FaStar color="#FFB936" />
            </div>
            <p className="relative z-10 text-xl md:text-lg text-[#D12525] text-center font-semibold mb-6 mt-2">قیمت {res.price} تومان</p>
            <div className="absolute bottom-4 left-1/2 top-8 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <button className="relative cursor-pointer w-full mt-12 group rounded-full h-10 overflow-hidden">
                <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
                <div className="relative z-10 flex justify-center items-center h-full w-full">
                  <p className="text-black group-hover:text-white px-4 py-2.5 text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
