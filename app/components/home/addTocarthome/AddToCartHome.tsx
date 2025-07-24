"use client";
import { useAddToCart } from "@/app/hooks/useAddToCart";
import { useGetCart } from "@/app/hooks/useCart";
import React from "react";
import BtnAddToCart from "../../ui/btn/BtnAddToCart";

export default function AddToCartHome({ id }: { id: string }) {
  const { cartproducts } = useGetCart();
  const { AddToCartProdcuts } = useAddToCart(id);

  const isInCart = cartproducts?.some((item) => item.product.id === id);
  const count = cartproducts?.find((item) => item.product.id === id);
  const countCart = count?.count;

  if (!isInCart)
    return (
      <div className="absolute bottom-4 left-1/2 top-28 h-0 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <div className="absolute bottom-4 left-1/2 top-36 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <BtnAddToCart bg="bg-red-600" onclick={() => AddToCartProdcuts()} text="افزودن به سبد خرید" />
        </div>
      </div>
    );
  else {
    return (
      <div className="absolute bottom-4 left-1/2 top-28 h-0 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <div className="absolute bottom-4 left-1/2 top-36 -translate-x-1/2 w-[85%] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <BtnAddToCart bg="bg-green-600" onclick={() => AddToCartProdcuts()} text={`موجود در سبد خرید (${countCart}) `} />
        </div>
      </div>
    );
  }
}
