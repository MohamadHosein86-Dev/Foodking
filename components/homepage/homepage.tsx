import FoodBoxHome from "@/components/foodBoxHome/FoodBoxHome";
import Boxfoodorder from "@/components/boxfoodorder/Boxfoodorder";
import SliderHome from "@/components/sliderhome/SliderHome";
import Swiperhome from "@/components/swiperhome/swiperhome";
import SectionHome from "@/components/sectionHome/SectionHome";
import SectionBlogHome from "@/components/sectionbloghome/SectionBlogHome";
import BoxMessageHome from "@/components/ui/BoxMessageHome";
import ProductList from "@/app/products/components/ProductList";

export default function Homepage() {
  return (
    <section dir="rtl">
      <div className=" px-[4rem]  sm:p-[3rem] md:p-4 overflow-hidden flex-wrap md:flex-nowrap  pb-[6rem] my-[8rem] relative  mx-auto justify-center flex items-center p-4 max-w-[100rem]  ">
        <div className="  sm:ml-auto md:m-0 relative      ">
          <div className=" md:w-[25rem] ">
            <img className=" mx-auto  md:m-0 w-[290px]  h-[360px]    " src="/home/04-3.jpg" alt="" />
            <img className=" z-[-1000] hidden w-[28rem] opacity-[.40] xl:block absolute   right-[-15rem] top-[5.5rem] " src="/home/shape-img.png" alt="" />
          </div>
        </div>

        <div className=" text-center sm:text-right flex flex-col w-full md:w-[60%]   xl:w-[36%] ">
          <p className=" mt-[2rem] text-[#D12525]  text-[1rem] sm:text-[1.2rem] font-semibold pb-[1rem] ">چیزی در مورد غذا یاد بگیرید</p>
          <p className=" text-[#212121] font-semibold  text-[1.5rem] sm:text-[1.6rem] ">به پناهگاه آشپزی ما خوش آمدید، جایی که هر غذا سمفونی از طعم هایی است که با دقت درست شده اند و ذائقه شما را وسوسه می کند. رستوران ما که در قلب [شهر] واقع شده است، فضایی جذاب است که ترکیب شده است.</p>
          <div className=" mt-[1.5rem] text-sm sm:text-[1rem] flex gap-[.5rem] sm:gap-[1rem] items-center ">
            <img className=" w-[3.5rem] " src="/home/05-2.jpg" alt="" />
            <p className=" font-semibold ">
              {" "}
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex-wrap flex gap-[1rem] justify-center ">
        <FoodBoxHome bg="  bg-[#d12525]" price="38 تومن" />
        <FoodBoxHome bg=" bg-[#FFB936]" box="bg-foodbox2" price="43 تومن" />
        <FoodBoxHome bg="  bg-[#d12525]" price="38 تومن" />
      </div>
      <ProductList />
      <SliderHome />
      <div className="p-4  mb-[3.5rem] md:pb-[4rem] flex-wrap  justify-center md:justify-between xl:gap-0  flex max-w-[95rem] mx-auto">
        <Boxfoodorder logo="/home/delicious-pizza.png" titel="پیتزای کلاسیک ایتالیایی خوشمزه" />
        <Boxfoodorder logo="/home/vagetable-burger.png" titel="همبرگر سبزیجات خوشمزه" />
        <Boxfoodorder logo="/home/roasted-chicken.png" titel="گوشت مرغ سوخاری پیتزا ایتالیایی" />
        <Boxfoodorder logo="/home/roll-samosa.png" titel="سمبوسه سیگاری به شکل رول" />
      </div>
      <Swiperhome />
      <div className=" text-[#ffff]  py-[8rem]  bg-sectionhome  bg-[#1A1919] ">
        <div className="  max-w-[80rem] gap-[3rem] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 p-4 mx-auto">
          <SectionHome titel="بهترین کیفیت غذا" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/01-1.svg" />
          <SectionHome titel="تحویل فست فود" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/02-1.svg" />
          <SectionHome titel="تضمین بازگشت پول" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/03-1.svg" />
          <SectionHome titel="غذای 100% طبیعی" desc="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" logo="/home/04-1.svg" />
        </div>
      </div>
      <SectionBlogHome />
      <BoxMessageHome />
    </section>
  );
}
