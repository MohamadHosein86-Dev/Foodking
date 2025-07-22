"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";
export default function SwiperSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className="h-full   sm:px-9 md:px-11   mb-24 items-center flex-col md:flex-row max-w-7xl xl:p-2 mx-auto flex">
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
          className="h-full w-[118%] px-8 md:max-w-2xl  "
        >
          <SwiperSlide className=" px-6  cursor-pointer flex flex-col   pt-24 ">
            <div className=" flex items-center gap-6 ">
              <img src="/home/quote.svg" alt="" />
              <p className="  font-bold text-xl ">غذای با کیفیت</p>
              <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
            </div>
            <p className="text-black text-2xl md:text-xl xl:text-3xl w-[85%]  leading-10 py-4  font-medium my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
            <div className=" mt-6 text-sm sm:text-base flex gap-2 sm:gap-4 items-center ">
              <img className=" w-14 " src="/home/05-2.jpg" alt="" />
              <p className=" font-semibold ">
                {" "}
                مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" px-6 cursor-pointer    flex flex-col   pt-24">
            <div className=" flex items-center gap-6 ">
              <img src="/home/quote.svg" alt="" />
              <p className="  font-bold text-xl ">غذای با کیفیت</p>
              <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
            </div>
            <p className="text-black text-xl xl:text-3xl w-[85%]  leading-10 py-4  font-medium my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
            <div className=" mt-6 text-sm sm:text-base flex gap-2 sm:gap-4 items-center ">
              <img className=" w-14 " src="/home/09-1.jpg" alt="" />
              <p className=" font-semibold ">
                {" "}
                مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" px-6 cursor-pointer    flex flex-col   pt-24">
            <div className=" flex items-center gap-6 ">
              <img src="/home/quote.svg" alt="" />
              <p className="  font-bold text-xl ">غذای با کیفیت</p>
              <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
            </div>
            <p className="text-black text-xl xl:text-3xl w-[85%]  leading-10 py-4  font-medium my-5"> هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.</p>
            <div className=" mt-6 text-sm sm:text-base flex gap-2 sm:gap-4 items-center ">
              <img className=" w-14 " src="/home/06-2.jpg" alt="" />
              <p className=" font-semibold ">
                {" "}
                مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <img src="/home/07-1.jpg" alt="user1" className="  px-6  w-full h-full object-cover md:w-72 xl:w-96 " />
      </div>
    </ScrollAnimation>
  );
}
