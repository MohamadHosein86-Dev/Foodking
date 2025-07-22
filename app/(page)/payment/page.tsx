"use client";
import { Fragment, useState } from "react";
import IntroductionPayment from "./components/introductionPayment/IntroductionPayment";
import DiscountForm from "./components/discountForm/DiscountForm";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState("online");

  return (
    <section dir="rtl">
      <TitlePages currentpage="پرداخت" nextPage="صفحه اصلی" secondPage="سفارش ها" />
      <section className=" bg-[#fff] flex gap-6 mx-auto max-w-7xl px-4 py-16 ">
        <div className="  basis-8/12 flex flex-col gap-5 px-5 rounded-lg  ">
          <DiscountForm />
          <PaymentMethod selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          <Fragment>
            {selectedOption == "cash" ? (
              <div className=" bg-[#F9F9F9] rounded-xl border-2  border-[#CBCBCB] flex items-center gap-5  py-9 px-6 ">
                <div className=" text-[#353535] flex items-center gap-1.5 w-4/12 ">
                  <img src="/payment/warning-2.png" alt="" />
                  <p>قابل توجه</p>
                </div>
                <p className=" text-xs  text-[#717171] ">هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.</p>
              </div>
            ) : (
              <div className=" bg-[#F9F9F9] rounded-xl border-2  border-[#CBCBCB] flex items-center gap-5  py-9 px-6 ">
                <div className=" text-[#353535] flex items-center gap-1.5 w-4/12 ">
                  <p>قابل توجه</p>
                </div>
                <p className=" text-xs  text-[#717171] ">هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.</p>
              </div>
            )}
          </Fragment>
        </div>
        <IntroductionPayment />
      </section>
    </section>
  );
}
