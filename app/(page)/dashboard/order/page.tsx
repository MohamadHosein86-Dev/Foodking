"use client";
import { useGetCart } from "@/app/hooks/useCart";

export default function OrdersPage() {
  const { cartproducts } = useGetCart();
  return (
    <div className=" hidden md:block gap-8 rounded-2xl border-1 border-[#E7E7E8] w-200  xl:basis-7/10 ">
      <div className=" px-8  border-b-1 border-b-[#E7E7E8]  py-6 flex justify-between  w-full ">
        <h2 className="  text-[#23242E] font-bold  ">سفارشات🛒</h2>
      </div>
      <div>
        <div className=" flex justify-center gap-4 pt-4 ">
          {cartproducts?.map((res) => {
            const { product } = res;
            return (
              <div key={product.id} className=" cursor-pointer text-sm font-semibold text-gray-500 border-[#CBCBCB] rounded-xl border-2 flex flex-col items-center pb-2 ">
                <img className=" h-20 w-38 " src={product.image} alt="" />
                <p className=" my-2 ">{product.name}</p>
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
