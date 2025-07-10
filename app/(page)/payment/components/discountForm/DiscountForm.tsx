import React from "react";

export default function DiscountForm() {
  return (
    <form className=" rounded-[10px] border-[2px]  border-[#CBCBCB] flex items-center gap-5  py-[2.2rem] px-[1.5rem] ">
      <div className="  text-[#353535] flex items-center ml-[1.5rem] gap-[5px] ">
        <img src="/payment/discount-shape.png" alt="" />
        <p>ثبت کد تخفیف</p>
      </div>
      <input className="   pr-[1rem] py-[.5rem] rounded-[5px] w-75 border-[2px] border-[#CBCBCB]  " placeholder="کد تخفیف" type="text" />
      <button className={` bg-[#CBCBCB] text-[#fff] w-25 rounded-[5px] py-[.5rem] `}>ثبت کد</button>
    </form>
  );
}
