"use client";
import "swiper/css";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMemo } from "react";
import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";
import SwiperHomeSlide from "./components/SwiperHomeSlide";

export default function SwiperSec() {
  const slides = useMemo(
    () => [
      {
        img: "/home/quote.svg",
        text: "هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.",
        avatar: "/home/05-2.jpg"
      },
      {
        img: "/home/quote.svg",
        text: "هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.",
        avatar: "/home/09-1.jpg"
      },
      {
        img: "/home/quote.svg",
        text: "هر لقمه درون یک نان نان برشته شده تازه و برشته شده، هارمونی کاملی از بافت ها را نشان می دهد که با لایه هایی از کاهوی ترد، گوجه فرنگی رسیده و ترشی ترشی ترکیب اختصاصی سس مخفی ما، مرزه تکمیل شده است.",
        avatar: "/home/06-2.jpg"
      }
    ],
    []
  );

  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className="h-full sm:px-9 md:px-11 mb-24 items-center flex-col md:flex-row max-w-7xl xl:p-2 mx-auto flex">
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
          className="h-full w-[118%] px-8 md:max-w-2xl"
        >
          {slides.map((slide, idx) => (
            <SwiperHomeSlide key={idx} {...slide} />
          ))}
        </Swiper>
        <img src="/home/07-1.jpg" alt="user1" className="px-6 w-full h-full object-cover md:w-72 xl:w-96" />
      </div>
    </ScrollAnimation>
  );
}
