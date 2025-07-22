import { FaEnvelope } from "react-icons/fa";
import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";

export default function MessageSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <section className=" max-w-7xl mb-20  flex px-4 md:px-12 mx-auto">
        <div className=" relative bg-masseghome    py-30  px-6 md:px-18 gap-6 xl:gap-24 xl:flex-row flex-col flex  mx-auto ">
          <div className="absolute z-[100] inset-0 bg-gradient-to-b from-[#f6f0e4] to-transparent"></div>
          <div className=" z-[1000] w-full xl:w-6/12 ">
            <h2 className=" text-[#212121] font-bold text-2xl md:text-4xl  ">مشترک خبرنامه ما شوید برای دریافت پیشنهادات بیشتر</h2>
            <p className=" text-[#5C5C5B] text-sm font-semibold pt-4 ">اما در حقيقت، هم آنها را متهم مي‌كنيم و هم آنها را با نفرت عادلانه فرود مي‌آوريم، آنهايي كه از تملق لذت‌هاي كنوني نرم شده‌اند.</p>
          </div>
          <form className="z-[1000] w-full  relative xl:w-5/12 ">
            <input placeholder="آدرس ایمیل را وارد کن" className=" w-full bg-[#ffff] h-15 pr-12 outline-none border-none " type="text" />
            <FaEnvelope className="  absolute text-[#5C5C5B]   top-6 right-6 " />
            <button className=" mt-4   bg-[#d12525] text-[#fff] relative overflow-hidden outline-none  cursor-pointer  font-bold  w-56 py-4 pb-5 px-4 flex items-center justify-center gap-2 group h-15 ">
              <span className="absolute inset-0 bg-[#ffff] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 "></span>
              <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-black">اکنون مشترک شوید </span>
            </button>
            <div className=" mt-4 flex items-center gap-2.5 ">
              <input className=" w-4 h-4 accent-[#D12525] checked:shadow-md  text-white  border-none outline-none " type="checkbox" name="" id="" />
              <label className="  text-[#5C5C5B] fontse " htmlFor="">
                من موافقم
                <a className=" underline text-black  " href="">
                  سیاست حفظ حریم خصوصی.
                </a>
              </label>
            </div>
          </form>
        </div>
      </section>
    </ScrollAnimation>
  );
}
