"use client";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { testimonials } from "@/app/data/Data";
import TestimonialSlide from "../testimonialSlide/TestimonialSlide";
import "swiper/css";

export default function Swipercomponents() {
  return (
    <div className="h-full bg-[#F4F1EA] max-w-7xl mx-auto grid grid-cols-12">
      <div className="col-span-1">
        <img src="/pages/menu_1/shape_food3.png" alt="" className="my-36" />
      </div>
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
        className="h-full bg-[#F4F1EA] max-w-6xl  py-8 col-span-10"
      >
        {testimonials.map((item, idx) => (
          <TestimonialSlide key={idx} {...item} />
        ))}
      </Swiper>
      <div className="col-span-1 ps-5">
        <img src="/pages/menu_1/shape_food1.png" alt="" className="my-24" />
        <img src="/pages/menu_1/shape_food2.png" alt="" />
      </div>
    </div>
  );
}
