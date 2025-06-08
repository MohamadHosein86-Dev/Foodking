"use client";
import ProductList from "@/app/products/components/ProductList";
import TitelPages from "@/components/titelCompo/TitelPges";
import { getProductsCart } from "@/lib/api-product";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaChevronLeft, FaTrash, FaUser } from "react-icons/fa";

export default function Cart() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);

  const index = 4;
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
      <section className=" bg-[#fff] flex gap-[1.5rem] mx-auto max-w-[80rem] px-4 py-[4rem] ">
        <div className=" h-[700px] basis-[60%] border-[2px] px-[1.3rem] rounded-[.8rem] border-gray-300  ">
          <ProductList ShopingCart={true} />
        </div>
        <div className=" basis-[40%] h-[80%] py-[1.5rem] rounded-[.8rem] px-[1rem] border-[2px] border-gray-300 ">
          <div className=" mb-[1.3rem] pb-[1.3rem] border-b-[2px] border-gray-300 items-center flex justify-between ">
            <p className=" text-[#353535] ">سبد خرید ({index})</p>
            <p>
              <FaTrash color="gray" />
            </p>
          </div>
          <div className=" mb-[1.3rem] pb-[1.3rem] border-b-[2px] border-gray-300 items-center flex justify-between ">
            <p className=" text-[#353535] ">تخفیف محصولات</p>
            <p className=" text-gray-500 ">63,000 تومان</p>
          </div>
          <div className=" mb-[1.3rem] gap-[12px] pb-[1.3rem] flex flex-col border-b-[2px] border-gray-300 ">
            <div className=" items-center flex justify-between   ">
              <p className=" text-[#353535] "> هزینه ارسال </p>
              <p className="text-gray-500">0 تومان</p>
            </div>
            <div className=" flex gap-[8px] items-center text-sm text-[#A9791C] ">
              <img src="/shopingcart/warning-2.jpg" alt="" />
              <p className=" text-[12px]  ">هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
            </div>
          </div>
          <div className="    gap-[.5rem] flex flex-col ">
            <div className="  items-center flex justify-between  ">
              <p className=" text-[#353535] "> مبلغ قابل پرداخت </p>
              <p className=" text-[#417F56] font-semibold ">۵۴۲٬۰۰۰ تومان</p>
            </div>
            <button className="relative mt-[1rem] mx-auto bg-[#417F56] md:ml-auto overflow-hidden outline-none rounded-md cursor-pointer   text-white  w-full  pb-[.2rem] px-[1rem] flex  items-center justify-center gap-[.5rem] group h-12 ">
              <span className="relative z-10 flex items-center gap-2 text-base ">
                <FaUser />
                ورود/ثبت‌نام
              </span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
