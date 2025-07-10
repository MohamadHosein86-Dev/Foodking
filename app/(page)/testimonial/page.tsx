import MotorSycle from "@/app/components/MotorCycelComponents/MotorSycle";
import MoreAboutTestimonial from "./components/moreAboutTestimonial/MoreAboutTestimonial";
import AnimationTestimonial from "./components/animationTestimonial/AnimationTestimonial";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Testimonial() {
  return (
    <div className="w-full bg-[#F4F1EA]">
      <AnimationTestimonial />
      <TitlePages currentpage="گواهینامه" nextPage="صفحه اصلی" secondPage="رزرواسیون" />
      <div className="mt-[6rem] mb-[2rem] flex w-full flex-wrap items-end justify-center space-y-4">
        <div className="grid max-w-[82rem] grid-cols-1 gap-[2rem] px-[1rem] py-[.7rem] sm:grid-cols-2 sm:px-[3rem] xl:grid-cols-3 xl:px-[1.6rem]">
          <MoreAboutTestimonial role="بلاگر مواد غذایی" testimonialName="فرانک اچ. هیوستون" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/09.jpg" />
          <MoreAboutTestimonial role="توسعه دهنده" testimonialName="جین کوپر" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/08.jpg" />
          <MoreAboutTestimonial role="عاشق غذا" testimonialName="کنت میکس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/11.jpg" />
          <MoreAboutTestimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/10.jpg" />
          <MoreAboutTestimonial role="نورین احمد" testimonialName="عاشق وردپرس" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/13.jpg" />
          <MoreAboutTestimonial role="نگاه کن پسر" testimonialName="فرانت کار" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/12.jpg" />
        </div>
      </div>
      <MotorSycle />
    </div>
  );
}
