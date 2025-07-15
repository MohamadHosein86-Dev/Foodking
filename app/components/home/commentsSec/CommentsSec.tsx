import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";
import CommentsBox from "../commentsBox/SectionHome";

export default function CommentsSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className=" text-[#ffff]  py-[8rem]  bg-sectionhome  bg-[#1A1919] ">
        <div className="  max-w-[80rem] gap-[3rem] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 p-4 mx-auto">
          <CommentsBox Title="بهترین کیفیت غذا" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/01-1.svg" />
          <CommentsBox Title="تحویل فست فود" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/02-1.svg" />
          <CommentsBox Title="تضمین بازگشت پول" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/03-1.svg" />
          <CommentsBox Title="غذای 100% طبیعی" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/04-1.svg" />
        </div>
      </div>
    </ScrollAnimation>
  );
}
