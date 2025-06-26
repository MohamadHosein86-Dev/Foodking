"use client";

import Loader from "@/app/components/loader/Loader";
import TitelPages from "@/app/components/titelPges/TitelPges";

import { useGetCart } from "@/hooks/useCart";
import { FaChevronLeft } from "react-icons/fa";
import IntroductionCart from "./components/introductionCart/InteroductionCart";

export default function Cart() {
  const { totalCount, isLoading } = useGetCart();
  if (isLoading) return <Loader />;
  return (
    <section dir="rtl">
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold"> سبد خرید </h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-green-500 font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-white font-semibold"> سبد خرید </span>
          </div>
        </div>
      </TitelPages>
      <IntroductionCart totalCount={totalCount} />
    </section>
  );
}
