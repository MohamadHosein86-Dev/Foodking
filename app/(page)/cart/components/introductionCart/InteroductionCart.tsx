import React from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import CartProducs from "../cartProducts/CartProducts";

export default function IntroductionCart({ totalCount }: { totalCount: number | undefined }) {
  return (
    <section className=" bg-[#fff] flex gap-6 mx-auto max-w-7xl px-4 py-16 ">
      <CartProducs />
      <div className=" basis-2/5 h-4/5 py-6 rounded-lg px-4 border-2 border-gray-300 ">
        <div className=" mb-5 pb-5 border-b-2 border-gray-300 items-center flex justify-between ">
          <p className=" text-[#353535] ">سبد خرید ({totalCount})</p>
          <p>
            <FaTrash color="gray" />
          </p>
        </div>
        <div className=" mb-5 pb-5 border-b-2 border-gray-300 items-center flex justify-between ">
          <p className=" text-[#353535] ">تخفیف محصولات</p>
          <p className=" text-gray-500 ">63,000 تومان</p>
        </div>
        <div className=" mb-5 gap-3 pb-5 flex flex-col border-b-2 border-gray-300 ">
          <div className=" items-center flex justify-between   ">
            <p className=" text-[#353535] "> هزینه ارسال </p>
            <p className="text-gray-500">0 تومان</p>
          </div>
          <div className=" flex gap-2 items-center text-sm text-[#A9791C] ">
            <img src="/shopingcart/warning-2.jpg" alt="" />
            <p className=" text-xs  ">هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
          </div>
        </div>
        <div className="    gap-2 flex flex-col ">
          <div className="  items-center flex justify-between  ">
            <p className=" text-[#353535] "> مبلغ قابل پرداخت </p>
            <p className=" text-[#417F56] font-semibold ">۵۴۲٬۰۰۰ تومان</p>
          </div>
          <button className="relative mt-4 mx-auto bg-[#417F56] md:ml-auto overflow-hidden outline-none rounded-md cursor-pointer   text-white  w-full  pb-1 px-4 flex  items-center justify-center gap-2 group h-12 ">
            <span className="relative z-10 flex items-center gap-2 text-base ">
              <FaUser />
              ورود/ثبت‌نام
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
