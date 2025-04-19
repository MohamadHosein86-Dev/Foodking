"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  Thumbs,
  A11y,
  FreeMode,
} from "swiper/modules";
import Image from "next/image";
import SwiperForUsers_Images from "./swiperForUsers_Images";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import SwiperForUsers_Contents from "./swiperForUsers_Contents";
export default function SwipperComponents() {
  const userSwipper = useRef<any>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <>
      <Swiper
        className=" h-[200px] w-full "
        style={
          {
            //   "--swiper-navigation-color": "#880808",
            "--swiper-pagination-color": "#880808",
            "--swiper-pagination-bottom": "2px",
          } as any
        }
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Autoplay, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        ref={userSwipper}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
        loopAdditionalSlides={1}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          userSwipper.current = swiper;
        }}
      >
        <SwiperSlide>
          <SwiperForUsers_Contents
            title="الیزابت آوا"
            subTitle="مدیر عامل و موسس کسب و کار"
            description="ممنون برای شام دیشب. شگفت انگیز بود!! من می گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده ام. قطعا در سال آینده شاهد غذا خوردن بیشتری خواهیم بود"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Contents
            title="آملیا امیلی"
            subTitle="مدیر عامل و موسس کسب و کار"
            description="ممنون برای شام دیشب. شگفت انگیز بود!! من می گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده ام. قطعا در سال آینده شاهد غذا خوردن بیشتری خواهیم بود"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperForUsers_Contents
            title="پیتر بومن"
            subTitle="مدیر عامل و موسس کسب و کار"
            description="ممنون برای شام دیشب. شگفت انگیز بود!! من می گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده ام. قطعا در سال آینده شاهد غذا خوردن بیشتری خواهیم بود"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        loopAdditionalSlides={5}
        // centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        className=" w-full"
        modules={[Thumbs, FreeMode]}
        loop={true}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}

        // slidesPerView="auto"
      >
        <SwiperSlide className="">
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/02-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="">
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/01-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="">
          <SwiperForUsers_Images url="https://t-theme.com/foodking/wp-content/uploads/2024/02/03-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
