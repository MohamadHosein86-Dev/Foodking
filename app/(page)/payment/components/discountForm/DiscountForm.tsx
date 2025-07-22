import React from "react";

export default function DiscountForm() {
  return (
    <form className=" rounded-xl border-2  border-[#CBCBCB] flex items-center gap-5  py-9 px-6 ">
      <div className="  text-[#353535] flex items-center ml-6 gap-1.5 ">
        <img src="/payment/discount-shape.png" alt="" />
        <p>ثبت کد تخفیف</p>
      </div>
      <input className="   pr-4 py-2 rounded-md w-75 border-2 border-[#CBCBCB]  " placeholder="کد تخفیف" type="text" />
      <button className={` bg-[#CBCBCB] text-[#fff] w-25 rounded-md py-2 `}>ثبت کد</button>
    </form>
  );
}
