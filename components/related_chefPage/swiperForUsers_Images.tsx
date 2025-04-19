import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useSwiperSlide } from "swiper/react";
export default function SwipperComponentsImages({ url }: { url: string }) {
  // var { isActive } = useSwiperSlide();

  return (
    <div className={`flex w-full justify-center  items-center cursor-pointer`}>
      <Image
        className={`rounded-full  border-4 border-slate-200`}
        alt="#"
        width={100}
        height={100}
        src={url}
      />
    </div>
  );
}
