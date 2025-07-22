import { FaEdit, FaPaperPlane, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FormContact() {
  return (
    <form className=" basis-1/2 ">
      <h2 className=" font-bold text-4xl pb-1 text-right pr-28 ">فرم را پر کنید</h2>
      <p dir="rtl" className=" pr-28 font-medium text-[#5C5C5B] mb-28 ">
        آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *
      </p>
      <label className=" flex justify-end w-full mb-[-3.5rem] " htmlFor="">
        <FaUserAlt size={21} />
      </label>
      <input placeholder="اسم شما * " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-6 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />
      <label className=" flex justify-end w-full mb-[-3.5rem] mt-16 " htmlFor="">
        <MdEmail size={21} />
      </label>
      <input placeholder="ادرس ایمیل* " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-6 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />
      <label className=" flex justify-end w-full mb-[-3.5rem] mt-16 " htmlFor="">
        <FaEdit size={21} />
      </label>
      <input placeholder=" پیام خود را وارد کنید " dir="rtl" className=" text-[#5C5C5B] font-semibold pb-36 pr-8 mt-8 w-full bg-none border-b-1 outline-none " type="text" />

      <button className=" ml-auto rounded-xl mt-6 outline-none  transition-all text-white ease delay-200 cursor-pointer bg-[#00813D]  hidden  md:flex items-center justify-center gap-2 border-1 border-[#ffff] text-center px-4 w-44 py-4 pb-5 font-bold ">
        ارسال
        <span>
          <FaPaperPlane />
        </span>
      </button>
    </form>
  );
}
