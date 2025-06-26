"use client";
import { Navigation, Pagination, Autoplay, Scrollbar, Thumbs, A11y } from "swiper/modules";
import SwiperForUsers_Images from "./swiperForUsers_Images";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import SwiperForUsers_Contents from "./swiperForUsers_Contents";

export default function SwipperComponents() {
  const userSwipper = useRef<SwiperRef | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <>
      <Swiper
        className="h-[300px] sm:h-[240px] md:h-[240px] lg:h-[240px] xl:h-[200px] 2xl:h-[200px] w-full"
        style={
          {
            "--swiper-pagination-color": "#880808",
            "--swiper-pagination-bottom": "2px"
          } as React.CSSProperties
        }
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Autoplay, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        ref={userSwipper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          if (userSwipper.current) {
            userSwipper.current.swiper = swiper;
          }
        }}
      >
        <SwiperSlide>
          <SwiperForUsers_Contents title="الیزابت آوا" subTitle="مدیر عامل و موسس کسب و کار" description="ممنون برای شام دیشب. شگفت انگیز بود!! ..." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Contents title="آملیا امیلی" subTitle="مدیر عامل و موسس کسب و کار" description="ممنون برای شام دیشب. شگفت انگیز بود!! ..." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Contents title="پیتر بومن" subTitle="مدیر عامل و موسس کسب و کار" description="ممنون برای شام دیشب. شگفت انگیز بود!! ..." />
        </SwiperSlide>
      </Swiper>

      <Swiper spaceBetween={2} slidesPerView={1} className="lg:mt-[-9rem] w-full" modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}>
        <SwiperSlide>
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/02-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/03-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/01-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
