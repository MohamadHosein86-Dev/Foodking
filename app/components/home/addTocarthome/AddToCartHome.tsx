"use client";
import { useAddToCart } from "@/app/hooks/useAddToCart";
import { useGetCart } from "@/app/hooks/useCart";
import React from "react";

export default function AddToCartHome({ id }: { id: string }) {
  const { cartproducts } = useGetCart();
  const { AddToCartProdcuts } = useAddToCart(id);

  const isInCart = cartproducts?.some((item) => item.product.id === id);
  const count = cartproducts?.find((item) => item.product.id === id);
  if (!isInCart)
    return (
      <div className="absolute bottom-4 left-1/2 top-28 h-0 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <div className="absolute bottom-4 left-1/2 top-[9rem] -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button onClick={() => AddToCartProdcuts()} className="relative cursor-pointer w-full mt-12 group rounded-full h-[2.5rem] overflow-hidden">
            <div className="bg-red-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
            <div className="relative z-10 flex justify-center items-center h-full w-full">
              <p className="text-black group-hover:text-white px-4 py-[.6rem] text-sm font-semibold transition-colors duration-500">افزودن به سبد خرید</p>
            </div>
          </button>
        </div>
      </div>
    );
  else {
    return (
      <div className="absolute bottom-4 left-1/2 top-28 h-0 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <div className="absolute bottom-4 left-1/2 top-[9rem] -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button onClick={() => AddToCartProdcuts()} className="relative cursor-pointer w-full mt-12 group rounded-full h-[2.5rem] overflow-hidden">
            <div className="bg-green-600 scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full"></div>
            <div className="relative z-10 flex justify-center items-center h-full w-full">
              <p className="text-black group-hover:text-white px-4 py-[.6rem] text-sm font-semibold transition-colors duration-500"> موجود در سبد خرید ({count?.count}) </p>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
