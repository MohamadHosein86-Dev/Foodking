import { SwiperSlide } from "swiper/react";

export default function SwiperSlideMenu({ Title, paragraf, desc, image }: { Title: string; paragraf: string; desc: string; image: string; rating: number }) {
  return (
    <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
      <h3 className="text-4xl font-bold text-black my-5">{Title}</h3>
      <p className="text-red-600 text-2xl my-3 font-medium">{paragraf}</p>
      <p className="text-black text-xl leading-7  font-bold my-5">{desc}</p>
      <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>
      <div className="flex gap-4 justify-center mt-4">
        <img src={image} alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
      </div>
    </SwiperSlide>
  );
}
