"use client";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiMotorcycleDuotone } from "react-icons/pi";
import { MdOutlineMan } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
export default function AdditionalInformation() {
  const [foodNumber, setFoodNumber] = useState<number>();
  const foods = [
    { name: "پاستا سبزیجات", price: 80, discount: 0.2, number: 1 },
    { name: "پاستا ", price: 90, discount: 0.2, number: 1 },
    { name: " سبزیجات", price: 100, discount: 0.2, number: 1 },
    { name: "پاستا سبزیجات", price: 20, discount: 0.2, number: 1 },
    { name: "پاستا ", price: 40, discount: 0, number: 1 },
  ];
  const discounts = foods.reduce((prev: number, discount: any) => {
    return prev + (discount.price - discount.price * discount.discount);
  }, 0);
  const fees = foods.reduce((prev: number, discount: any) => {
    return prev + discount.price;
  }, 0);

  const renderFood = foods.map((food, i) => {
    return (
      <div className="  " key={i}>
        <div
          className={` flex w-full items-center h-12 justify-center px-4 mb-2 gap-x-64 ${
            i % 2 !== 0 && " bg-slate-200"
          }`}
        >
          <section className="flex justify-center text-green-600 items-center gap-x-2">
            <div className="">
              <RiDeleteBin6Line />
            </div>
            <div>{food.number}</div>
            <p>+</p>
          </section>
          <section className="text-right">
            <p className="text-right  min-w-[100px] text-base">{food.name}</p>
            <div className="text-right  flex justify-end opacity-60 text-sm">
              <div className="mr-1">تومان</div>
              {food.price}
            </div>
          </section>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full flex justify-center flex-wrap items-end h-[900px] mt-12">
      <form className="w-2/3 h-[600px]">
        <section
          className="w-full h-[600px] flex justify-center items-start gap-x-12
       "
        >
          <section
            className="border-2 border-slate-200 
           rounded-xl w-[600px] h-[450px]"
          >
            <div className="flex justify-center flex-wrap">
              <div
                className="w-7/8 flex items-center opacity-70 gap-x-80 justify-center mb-6 border-b-2
             border-slate-200"
              >
                <RiDeleteBin6Line className="text-xl" />
                <h1
                  className="  text-right text-lg 
                 py-4"
                >{`سبد خرید (${foods.length})`}</h1>
              </div>
              <div className=" h-[200px] w-7/8  overflow-y-scroll border-b-2 border-slate-200">
                {renderFood}
              </div>
              <div
                className=" gap-x-64 flex h-12 border-b-2 border-slate-200 
              justify-center items-center"
              >
                <div className="text-base flex space-x-1 opacity-60 ">
                  <p>{discounts}</p>
                  <p>تومان</p>
                </div>
                <h2 className="">تخفیف محصولات</h2>
              </div>
            </div>
            <div className="  flex h-12 gap-x-64 justify-center items-center">
              <div className="text-base text-green-700 flex space-x-1 opacity-80 ">
                <p>{fees}</p>
                <p>تومان</p>
              </div>
              <h2 className="">مبلغ قابل پرداخت</h2>
            </div>
            <button className="bg-green-700 w-7/8 flex h-12 rounded-md ml-8 justify-center items-center text-white">
              <p>ثبت سفارش</p>
              <IoCheckmarkCircleOutline className="text-2xl ml-1" />
            </button>
          </section>
          <section
            className=" w-[800px]  h-[550px] flex flex-wrap
          justify-center items-start 
        "
          >
            <section
              className="w-full flex justify-center items-center
             gap-x-12 border-2 border-slate-200 rounded-xl h-28"
            >
              <div className="flex justify-center gap-x-2 items-center">
                <MdOutlineMan className="text-3xl ml-1 opacity-50" />
                <div className=" text-right">
                  <p className="text-xs opacity-60 mb-2">تحویل حضوری</p>
                  <p style={{ fontSize: 9 }} className="opacity-60">
                    توسط پیک رستوران ارسال شود
                  </p>
                </div>
                <label htmlFor="courier">
                  <input
                    id="courier"
                    name="courier"
                    value={"ارسال توسط پیک"}
                    type="radio"
                  />
                </label>
              </div>
              <div className="flex justify-center gap-x-2 items-center">
                <CiDeliveryTruck className="text-3xl ml-1" />
                <div className=" text-right">
                  <p className="text-xs opacity-60 mb-2">ارسال توسط پیک</p>
                  <p style={{ fontSize: 9 }} className="opacity-60">
                    توسط پیک رستوران ارسال شود
                  </p>
                </div>
                <label htmlFor="courier">
                  <input
                    id="courier"
                    name="courier"
                    value={"ارسال توسط پیک"}
                    type="radio"
                  />
                </label>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-base">روش تحویل سفارش</p>
                <CiDeliveryTruck className="text-3xl ml-1" />
              </div>
            </section>
            <section className="w-full border-2 border-slate-200 rounded-xl h-64">
              <div className="w-full gap-x-16  flex justify-center items-center h-full flex-wrap ">
                <section className=" w-[220px]  h-[200px]  border-2 border-slate-200"></section>
                <div
                  className="flex 
                 flex-wrap w-1/2  mt-4  justify-end items-center"
                >
                  <div className="flex flex-wrap w-full mb-8  justify-end items-center">
                    <h1 className="">آدرس شعبه اکباتان</h1>
                    <CiLocationOn className="mr-2 text-3xl ml-1" />
                  </div>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-8 opacity-60">
                    ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                  </h3>
                  <button className="border-2 border-slate-300 mr-24 rounded-md opacity-70 text-sm w-1/2 h-8">
                    {"مشاهده در نقشه"}
                  </button>
                </div>
              </div>
            </section>
            <section className="w-full border-2 border-slate-200 rounded-xl h-32">
              <div
                className="flex flex-wrap w-full mt-6  opacity-50 
               justify-end items-center"
              >
                <h1 className="">(اختیاری) توضیحات سفارش </h1>

                <FaRegEdit className="mr-2 text-2xl ml-1 mr-6" />
              </div>
            </section>
          </section>
        </section>
      </form>
      <div
        className="bg-red-300 bg-position-[center_bottom_-420px] 
       bg-cover flex justify-center items-center bg-no-repeat h-[260px] 
       bg-[url(/home/image-3.jpg)] w-2/3"
      >
        <div className="flex flex-wrap mt-12 w-[270px] justify-start ml-2">
          <textarea
            className="p-4 placeholder-slate-300 text-xs  w-[260px] text-right h-[120px]
          mt-8 bg-transparent border-slate-400 border-1 rounded-md"
            placeholder="پیام شما"
          ></textarea>
          <button
            className="bg-transparent mt-4 border-slate-400 border-1 h-8 rounded-md
             px-2 text-slate-300 text-xs 
             w-32  text-center "
          >
            ارسال پیام
          </button>
        </div>
        <section className="flex h-2/3 w-[240px] justify-end flex-wrap gap-2 flex-wrap">
          <h1 className="text-white  text-right w-full text-lg">
            {" "}
            پیام به ترخینه
          </h1>
          <input
            className="bg-transparent border-slate-400 border-1 h-8 rounded-md
             px-2 placeholder-slate-300 text-xs 
             w-52  text-right "
            placeholder=" نام نام خانوادگی"
          ></input>
          <input
            className="bg-transparent border-slate-400 border-1 h-8
             rounded-md px-2 placeholder-slate-300 text-xs  w-52 text-right"
            placeholder=" آدرس ایمیل(اختیاری)"
          ></input>
          <input
            className="bg-transparent border-slate-400 border-1 h-8
             rounded-md px-2 placeholder-slate-300 text-xs  w-52 text-right"
            placeholder="شعبه اقدسیه"
          ></input>
        </section>
        <section className="flex w-1/3 justify-end gap-4 flex-wrap">
          <h1 className="text-white  text-right w-full text-lg">
            {" "}
            شعبه های ترخینه
          </h1>
          <Link
            className="text-white text-xs opacity-80 w-full  text-right "
            href="#"
          >
            {"   شعبه اکباتان"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full text-right"
            href="#"
          >
            {"  شعبه اقدسیه"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full text-right"
            href="#"
          >
            {"   شعبه چالوس"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full text-right"
            href="#"
          >
            {"   شعبه ونک"}
          </Link>
        </section>
        <section className="flex w-1/3 justify-end gap-4 flex-wrap">
          <h1 className="text-white  text-right w-full text-lg">دسترسی آسان</h1>
          <Link
            className="text-white text-xs opacity-80 w-full  text-right "
            href="#"
          >
            {" پرسش های متداول"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full text-right"
            href="#"
          >
            {" قوانین ترخینه"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full text-right"
            href="#"
          >
            {"  حریم خصوصی"}
          </Link>
          <div className="flex justify-end gap-x-4 text-xl text-white w-full">
            <FaTelegramPlane />
            <FaInstagram />
            <CiTwitter />
          </div>
        </section>
      </div>
    </div>
  );
}
