import { FaEdit, FaPaperPlane, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FormContact() {
  return (
    <form className=" basis-[50%] ">
      <h2 className=" font-bold text-[2.2rem] pb-[.3rem] text-right pr-[7rem] ">فرم را پر کنید</h2>
      <p dir="rtl" className=" pr-[7rem] font-[480] text-[#5C5C5B] mb-[7rem] ">
        آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *
      </p>
      <label className=" flex justify-end w-full mb-[-3.5rem] " htmlFor="">
        <FaUserAlt size={21} />
      </label>
      <input placeholder="اسم شما * " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-[1.5rem] pr-[2rem] mt-[2rem] w-full bg-none border-b-[1px] outline-none " type="text" />
      <label className=" flex justify-end w-full mb-[-3.5rem] mt-[4rem] " htmlFor="">
        <MdEmail size={21} />
      </label>
      <input placeholder="ادرس ایمیل* " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-[1.5rem] pr-[2rem] mt-[2rem] w-full bg-none border-b-[1px] outline-none " type="text" />
      <label className=" flex justify-end w-full mb-[-3.5rem] mt-[4rem] " htmlFor="">
        <FaEdit size={21} />
      </label>
      <input placeholder=" پیام خود را وارد کنید " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-[9rem] pr-[2rem] mt-[2rem] w-full bg-none border-b-[1px] outline-none " type="text" />

      <button className=" ml-auto rounded-[.75rem] mt-[1.6rem] outline-none  transition-all text-white ease delay-200 cursor-pointer bg-[#00813D]  hidden  md:flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[11rem] py-[1rem] pb-[1.3rem] font-bold ">
        ارسال
        <span>
          <FaPaperPlane />
        </span>
      </button>
    </form>
  );
}
