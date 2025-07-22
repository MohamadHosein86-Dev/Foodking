import { SwiperSlide } from "swiper/react";

export default function TestimonialSlide({ name, role, text, avatar }: { name: string; role: string; text: string; avatar: string }) {
  return (
    <SwiperSlide className="bg-[#F4F1EA] cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 pt-24">
      <h3 className="text-4xl font-bold text-black my-5">{name}</h3>
      <p className="text-red-600 text-2xl my-3 font-medium">{role}</p>
      <p className="text-black text-xl leading-7  font-bold my-5">{text}</p>
      <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>
      <div className="flex gap-4 justify-center mt-4">
        <img src={avatar} alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
      </div>
    </SwiperSlide>
  );
}
