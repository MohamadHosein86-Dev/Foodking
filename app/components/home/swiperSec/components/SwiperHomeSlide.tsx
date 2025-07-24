import { SwiperSlide } from "swiper/react";

export default function SwiperHomeSlide({ text, avatar }: { img: string; text: string; avatar: string }) {
  return (
    <SwiperSlide className="px-6 cursor-pointer flex flex-col pt-24">
      <div className="flex items-center gap-6">
        <img src="/home/quote.svg" alt="quote" />
        <p className="font-bold text-xl">غذای با کیفیت</p>
        <div className="flex justify-center text-yellow-500 text-1xl">{"⭐⭐⭐⭐"}</div>
      </div>
      <p className="text-black text-xl xl:text-3xl w-[85%] leading-10 py-4 font-medium my-5">{text}</p>
      <div className="mt-6 text-sm sm:text-base flex gap-2 sm:gap-4 items-center">
        <img className="w-14" src={avatar} alt="avatar" />
        <p className="font-semibold">
          مایکل وی کریستنس /<span className="font-normal text-[#5C5C5B]">مدیر عامل و موسس</span>
        </p>
      </div>
    </SwiperSlide>
  );
}
