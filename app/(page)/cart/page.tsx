"use client";
import { useGetCart } from "@/app/hooks/useCart";
import { useSession } from "next-auth/react";
import IntroductionCart from "./components/introductionCart/InteroductionCart";
import TitlePages from "@/app/components/titelPges/TitelPges";
import LoadingFoodking from "@/app/components/loader/Loading";

export default function Cart() {
  const { status, data } = useSession();
  const { totalCount, isLoading } = useGetCart();

  console.log("nanat = ", data);

  if (status === "loading" || isLoading) {
    return <LoadingFoodking />;
  }

  return (
    <section dir="rtl">
      <TitlePages currentpage="سبد خرید " nextPage="صفحه اصلی" secondPage="پرداخت" />
      <IntroductionCart totalCount={totalCount} />
    </section>
  );
}
