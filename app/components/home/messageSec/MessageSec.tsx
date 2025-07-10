import { FaEnvelope } from "react-icons/fa";

export default function MessageSec() {
  return (
    <section className=" max-w-[80rem] mb-[5rem]  flex px-4 md:px-12 mx-auto">
      <div className=" relative bg-masseghome    py-30  px-6 md:px-18 gap-[1.5rem] xl:gap-[6rem] xl:flex-row flex-col flex  mx-auto ">
        <div className="absolute z-[100] inset-0 bg-gradient-to-b from-[#f6f0e4] to-transparent"></div>

        <div className=" z-[1000] w-full xl:w-[55%] ">
          <h2 className=" text-[#212121] font-bold text-[1.8rem] md:text-[2.4rem]  ">مشترک خبرنامه ما شوید برای دریافت پیشنهادات بیشتر</h2>
          <p className=" text-[#5C5C5B] text-sm font-semibold pt-[1rem] ">اما در حقيقت، هم آنها را متهم مي‌كنيم و هم آنها را با نفرت عادلانه فرود مي‌آوريم، آنهايي كه از تملق لذت‌هاي كنوني نرم شده‌اند.</p>
        </div>

        <form className="z-[1000] w-full  relative xl:w-[42%] ">
          <input placeholder="آدرس ایمیل را وارد کن" className=" w-full bg-[#ffff] h-[3.8rem] pr-12 outline-none border-none " type="text" />
          <FaEnvelope className="  absolute text-[#5C5C5B]   top-[1.5rem] right-[1.5rem] " />
          <button className=" mt-[1rem]   bg-[#d12525] text-[#fff] relative overflow-hidden outline-none  cursor-pointer  font-bold  w-[14rem] py-[1rem] pb-[1.3rem] px-[1rem] flex items-center justify-center gap-[.5rem] group h-15 ">
            <span className="absolute inset-0 bg-[#ffff] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 "></span>
            <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-black">اکنون مشترک شوید </span>
          </button>
          <div className=" mt-[1rem] flex items-center gap-[10px] ">
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
  );
}
