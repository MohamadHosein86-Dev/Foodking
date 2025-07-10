"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function SwiperSec() {
  return (
    <div className="h-full   sm:px-[2.2rem] md:px-11   mb-[6rem] items-center flex-col md:flex-row max-w-[80rem] xl:p-2 mx-auto flex">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          320: {
            slidesPerView: 1
          }
        }}
        className="h-full w-[118%] px-8 md:max-w-[50rem]  "
      >
        <SwiperSlide className=" px-6  cursor-pointer flex flex-col   pt-[100px] ">
          <div className=" flex items-center gap-[1.5rem] ">
            <img src="/home/quote.svg" alt="" />
            <p className="  font-bold text-[1.4rem] ">غذای با کیفیت</p>
            <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
          </div>
          <p className="text-black text-[1.8rem] md:text-[1.6rem] xl:text-[2rem] w-[85%]  leading-10 py-[1rem]  font-[470] my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
          <div className=" mt-[1.5rem] text-sm sm:text-[1rem] flex gap-[.5rem] sm:gap-[1rem] items-center ">
            <img className=" w-[3.5rem] " src="/home/05-2.jpg" alt="" />
            <p className=" font-semibold ">
              {" "}
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" px-6 cursor-pointer    flex flex-col   pt-[100px]">
          <div className=" flex items-center gap-[1.5rem] ">
            <img src="/home/quote.svg" alt="" />
            <p className="  font-bold text-[1.4rem] ">غذای با کیفیت</p>
            <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
          </div>
          <p className="text-black text-[1.6rem] xl:text-[2rem] w-[85%]  leading-10 py-[1rem]  font-[470] my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
          <div className=" mt-[1.5rem] text-sm sm:text-[1rem] flex gap-[.5rem] sm:gap-[1rem] items-center ">
            <img className=" w-[3.5rem] " src="/home/09-1.jpg" alt="" />
            <p className=" font-semibold ">
              {" "}
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" px-6 cursor-pointer    flex flex-col   pt-[100px]">
          <div className=" flex items-center gap-[1.5rem] ">
            <img src="/home/quote.svg" alt="" />
            <p className="  font-bold text-[1.4rem] ">غذای با کیفیت</p>
            <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
          </div>
          <p className="text-black text-[1.6rem] xl:text-[2rem] w-[85%]  leading-10 py-[1rem]  font-[470] my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
          <div className=" mt-[1.5rem] text-sm sm:text-[1rem] flex gap-[.5rem] sm:gap-[1rem] items-center ">
            <img className=" w-[3.5rem] " src="/home/06-2.jpg" alt="" />
            <p className=" font-semibold ">
              {" "}
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <img src="/home/07-1.jpg" alt="user1" className="  px-[1.6rem]  w-full h-full object-cover md:w-[18rem] xl:w-[24rem] " />
    </div>
  );
}
