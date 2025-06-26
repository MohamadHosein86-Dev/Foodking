"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function wipercomponents() {
  return (
    <div className="h-full bg-[#F4F1EA] max-w-[82rem] mx-auto grid grid-cols-12">
      <div className="col-span-1">
        <img src="/pages/menu_1/shape_food3.png" alt="" className="my-[150px]" />
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
        className="h-full bg-[#F4F1EA] max-w-[70rem]  py-[2rem] col-span-10"
      >
        <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
          <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
          <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
          <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

          {/* ستاره‌ها */}
          <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

          {/* آواتارها */}
          <div className="flex gap-4 justify-center mt-4">
            <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
          <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
          <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
          <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

          {/* ستاره‌ها */}
          <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

          {/* آواتارها */}
          <div className="flex gap-4 justify-center mt-4">
            <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
          <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
          <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
          <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

          {/* ستاره‌ها */}
          <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

          {/* آواتارها */}
          <div className="flex gap-4 justify-center mt-4">
            <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
          <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
          <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
          <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :)</p>

          {/* ستاره‌ها */}
          <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

          {/* آواتارها */}
          <div className="flex gap-4 justify-center mt-4">
            <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
          <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
          <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
          <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :)</p>

          {/* ستاره‌ها */}
          <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

          {/* آواتارها */}
          <div className="flex gap-4 justify-center mt-4">
            <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="col-span-1 ps-5">
        <img src="/pages/menu_1/shape_food1.png" alt="" className="my-[100px]" />
        <img src="/pages/menu_1/shape_food2.png" alt="" />
      </div>
    </div>
  );
}
