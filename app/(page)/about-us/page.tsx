import Image from "next/image";
import burgur from "@/public/burger-4.png";
import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
import { FaChevronLeft } from "react-icons/fa";
import TitelPages from "@/components/titelCompo/TitelPges";
import FoodProcessing from "@/components/FoodProcessing_aboutUs/FoodProcessing";
import MotorSycle from "@/components/MotorCycelComponents/MotorSycle";
import SwiperComponent from "@/components/swiper/SwiperComponent";

const AboutUs: React.FC = () => {
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
      <section className="  ">
        <div className="flex max-w-[80rem]  mx-auto  flex-col gap-[2rem] md:flex-row items-center justify-evenly p-6 md:p-16 ">
          <div className="  basis-[50%] relative mb-10 md:mb-0">
            <div className=" relative  ">
              <Image src={burgur} alt="Burger" width={800} height={600} className="rounded-xl" />
              <Image className=" absolute top-[1rem] " alt="Burger" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-text-4.png" />
            </div>
            <div className="absolute bottom-8 left-8 bg-orange-400 text-white p-5 rounded-xl rotate-[30deg] text-4xl font-bold">از سال ۱۹۸۵</div>
          </div>
          <div className="  basis-[55%] text-right pt-[2rem] space-y-6">
            <h2 className="text-green-600  text-[1.2rem] md:text-lg font-bold">در مورد غذای ما</h2>
            <h1 className=" text-[2.4rem] md:text-6xl mb-[3rem] font-bold ">
              جایی که کیفیت با عالی <br /> روبرو می‌شود <span className="text-green-600">سرویس.</span>
            </h1>
            <p className="text-gray-600 text-lg  ">این تجربه ناهار خوری عالی است که در آن هر ظرف با تازه و با کیفیت بالا درست می شود. خدمات سریع و کارآمد را تجربه کنید که تضمین می کند غذای شما تازه سرو می شود تجربه غذاخوری که در آن هر ظرف با مواد تازه و با کیفیت بالا درست می شود.</p>
            <div className="flex justify-start  flex-col gap-[2rem] sm:flex-row items-center text-sm mt-8">
              <div className="flex w-full gap-2 justify-center items-start">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <g>
                      <rect x="22" y="12" width="20" height="2" />
                      <rect x="24" y="14" width="16" height="8" />
                      <path d="M24 22h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
                      <path d="M24 30h16v4H24z" />
                      <path d="M24 34h16v3a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-3z" />
                      <circle cx="16" cy="44" r="8" />
                      <polyline points="12 44 15 47 20 40" />
                      <path d="M12 52l1 8 3-2 3 2 1-8" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-[16px]">غذای فوق‌العاده با کیفیت</h3>
                  <p className=" w-full text-gray-700 md:max-w-52 font-semibold ">تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می‌کنند</p>
                </div>
              </div>
              <div className="flex w-full gap-2 justify-center items-start">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 64 64" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <g>
                      <circle cx="32" cy="26" r="6" />
                      <path d="M20 44c0-6.627 5.373-12 12-12s12 5.373 12 12v2H20v-2z" />
                      <path d="M32 8l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L32 15l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L32 8z" />
                      <path d="M16 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L16 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L16 10z" />
                      <path d="M48 10l1.5 3 3.5 0.5-2.5 2.5 0.5 3.5L48 17l-3 2 0.5-3.5-2.5-2.5 3.5-0.5L48 10z" />
                      <circle cx="48" cy="48" r="8" />
                      <polyline points="45 48 47 50 51 46" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col gap-y-3">
                  <h3 className="font-bold text-lg">شهرت خوب</h3>
                  <p className="font-semibold text-gray-700  w-full md:max-w-52">تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می‌کنند</p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-6 flex-col sm:flex-row justify-start items-center">
              <button className="relative overflow-hidden outline-none rounded-md cursor-pointer bg-[#00813D]   text-white font-bold    w-[15rem] py-[1rem] pb-[1.3rem] px-[1rem] xl:flex hidden items-center justify-center gap-[.5rem] group h-16">
                <span className="absolute inset-0 bg-[#D12525] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md"></span>
                <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-white">اطلاعات بیشتر درباره ما</span>
              </button>
              <div>
                <h3 className="text-red-500 font-bold ">برندون گاری</h3>
                <p className="text-black font-semibold">تجربه مشتری بالاترین اولویت ما است.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="chef  py-1">
        {/* //! دیدار با کارشناس ها و سرآشپزها */}
        <div className="w-full  flex-wrap space-y-4 flex mt-[7rem] justify-center items-end">
          <h1 className="font-semibold w-full text-center text-[1.2rem] md:text-xl text-green-700">در مورد غذای ما</h1>
          <h1 className="font-semibold w-full text-center text-[1.4rem] md:text-5xl text-slate-800">با سرآشپزهای متخصص ما ملاقات کنید</h1>

          <div className="flex   flex-wrap justify-center gap-12 w-2/3 min-h-96 mt-12">
            <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
            <MoreAbout_chef role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
            <MoreAbout_chef role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          </div>
        </div>

        <FoodProcessing />
      </div>

      <SwiperComponent />
      <div className=" mt-[-6rem] ">
        <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
      </div>
    </section>
  );
};

export default AboutUs;
