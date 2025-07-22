"use client";
import { useGetCart } from "@/app/hooks/useCart";
import CartProductItem from "./cartProductItem/CartProductItem";
import Loader from "@/app/components/loader/Loader";

export default function CartProducs() {
  const { cartproducts, error, isLoading } = useGetCart();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">خطا در دریافت اطلاعات سبد خرید</p>
      </div>
    );
  }

  if (!cartproducts || cartproducts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">سبد خرید شما خالی است</p>
      </div>
    );
  }

  return (
    <section className=" h-[43.75rem] basis-3/5 border-2 px-5 rounded-lg border-gray-300  ">
      <div dir="rtl" className="overflow-x-auto h-[93%] flex flex-col mt-5 gap-8">
        {cartproducts?.map((res, index: number) => {
          const count = cartproducts.find((item) => item.product.id === res.product.id);
          return <CartProductItem key={index} data={res.product} count={count?.count} />;
        })}
      </div>
    </section>
  );
}
