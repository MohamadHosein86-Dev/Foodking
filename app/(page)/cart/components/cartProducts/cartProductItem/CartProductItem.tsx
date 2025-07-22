"use client";
import { useDeleteToCart } from "@/app/hooks/useDeleteToCart";
import { Product } from "@/app/Types/DataType";
import { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

export default function CartProductItem({ data, count }: { data: Product; count: number | undefined }) {
  const { description, name, id: productId, price, image } = data;

  const [id, setid] = useState("");
  const { DeleteToCartProdcuts } = useDeleteToCart(id);

  return (
    <div className="flex-row-reverse border-2 border-gray-300 rounded-lg pl-8 bg-[#ffff] flex flex-wrap w-full justify-center items-center">
      <div className="w-3/5 flex flex-wrap h-1/2 content-center">
        <div className="flex justify-between w-full items-center">
          <h1 className="w-full font-semibold my-3 text-right text-3xl text-black sm:text-3xl md:text-4xl lg:text-2xl">{name}</h1>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
          </div>
        </div>
        <h2 className="w-[90%] font-semibold text-right text-base text-slate-500 py-2 md:text-2xl lg:text-base">{description}</h2>
        <div className="flex justify-between my-6 w-full items-center">
          <div className="flex items-center gap-2">
            <FaTrash
              onClick={() => {
                DeleteToCartProdcuts();
                setid(productId);
              }}
              size={20}
              color="gray"
              className="cursor-pointer"
            />
            <div className="h-8 w-32 flex justify-center items-center">
              <button className="border-1 cursor-pointer group border-slate-200 px-3 py-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
              </button>
              <div className="text-lg border-1 py-2 border-r-0 border-l-0 border-slate-200 px-3">{count}</div>
              <button className="border-1 cursor-pointer border-slate-200 group px-3 py-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex font-semibold text-2xl">
            <div className="flex space-x-2">
              <p className="text-[#D12525]">تومان</p>
              <div className="text-[#D12525]">{price}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex items-center">
        <img src={image} className="" alt="" />
      </div>
    </div>
  );
}
