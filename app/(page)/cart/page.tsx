"use client";
import { useGetCart } from "@/app/hooks/useCart";

import Loader from "@/app/components/loader/Loader";
import IntroductionCart from "./components/introductionCart/InteroductionCart";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Cart() {
  const { totalCount, isLoading } = useGetCart();
  if (isLoading) return <Loader />;
  return (
    <section dir="rtl">
      <TitlePages currentpage="سبد خرید " nextPage="صفحه اصلی" secondPage="پرداخت" />
      <IntroductionCart totalCount={totalCount} />
    </section>
  );
}
