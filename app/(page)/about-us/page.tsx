import SwiperComponent from "@/app/components/swiper/SwiperComponent";
import InterductionAboutUs from "./components/interductionAboutUs/InterductionAboutUs";
import AboutChef from "./components/aboutChef/AboutChef";
import MotorSycle from "@/app/components/MotorCycelComponents/MotorSycle";

import { Fragment } from "react";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function AboutUs() {
  return (
    <Fragment>
      <section dir="rtl" className=" bg-amber-50  scrollbar-hide  ">
        <TitlePages currentpage="درباره ما" nextPage="صفحه اصلی" secondPage="درباره ما" />
        <InterductionAboutUs />
        <AboutChef />
        <SwiperComponent />
      </section>
      <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
    </Fragment>
  );
}
