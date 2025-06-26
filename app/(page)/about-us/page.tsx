import { FaChevronLeft } from "react-icons/fa";

import TitelPages from "@/app/components/titelPges/TitelPges";
import SwiperComponent from "@/app/components/swiper/SwiperComponent";
import InterductionAboutUs from "./components/interductionAboutUs/InterductionAboutUs";
import MotorSycleAboutUs from "./components/motorSycleAboutUs/MotorSycleAboutUs";
import AboutChef from "./components/aboutChef/AboutChef";

export default function AboutUs() {
  return (
    <section dir="rtl" className=" bg-amber-50  scrollbar-hide  ">
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">درباره ما</h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-green-500 font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-white font-semibold">درباره ما</span>
          </div>
        </div>
      </TitelPages>
      <InterductionAboutUs />
      <AboutChef />
      <SwiperComponent />
      <MotorSycleAboutUs />
    </section>
  );
}
