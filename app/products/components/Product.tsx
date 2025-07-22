import AddToCartHome from "@/app/components/home/addTocarthome/AddToCartHome";
import { Product } from "@/app/Types/DataType";
import Link from "next/link";

interface DataType {
  data: Product;
}
export default function ProductCard({ data }: DataType) {
  return (
    <div className="group relative  bg-white cursor-pointer w-full sm:max-w-md overflow-hidden rounded-xl block">
      <div className="absolute inset-0  bg-[#FFB936] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out rounded-xl z-0" />

      <div className="relative z-10 w-full  flex justify-center mt-6  px-8 rounded-xl py-14 mb-6">
        <Link href={`/products/${data.slug}`}>
          <div className="relative w-64 h-46 z-[100000]">
            <img src={data.image} alt={data.name} />
          </div>
        </Link>
        <div className="size-10 flex items-center justify-center rounded-md hover:bg-[#fff] transition ease-in delay-300 bg-black absolute top-[-.5rem] right-4 z-20">
          <svg className="pt-0.5 text-red-500 size-7" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
      </div>

      <h2 className="relative z-10 text-xl md:text-lg font-medium text-center">{data.name}</h2>
      <p className="relative z-10 text-xl md:text-lg text-[#D12525] text-center font-semibold mb-10 mt-2">قیمت {data.price} تومان</p>

      <AddToCartHome id={data.id} />
    </div>
  );
}
