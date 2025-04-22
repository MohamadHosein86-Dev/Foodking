import MapCountanerShop from "@/components/map/MapCountaner";
import MotorSycle from "@/components/MotorCycelComponents/MotorSycle";
import TitelPages from "@/components/titelCompo/TitelPges";

import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaEdit, FaPaperPlane, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="  bg-[#f4f1ea] ">
      <TitelPages>
        <div className=" space-y-5">
          <h1
            className="w-full font-semibold  text-center text-2xl text-white
              sm:text-3xl 
              md:text-4xl 
              lg:text-6xl lg:text-white 
  
             "
          >
            {" "}
            تماس با ما
          </h1>
          <div className="flex justify-center space-x-1 items-center h-8 flex-row-reverse">
            <Link href={"/"}>
              <h1 className="font-semibold   text-xl text-green-500"> صفحه اصلی</h1>
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100"> تماس با ما </h1>
          </div>
        </div>
      </TitelPages>
      <section>
        <div className=" pt-[8rem] max-w-[82rem] px-[1rem] sm:px-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-[1rem] xl:px-[1.6rem]  py-[.7rem] ">
          <div className=" hover:bg-[#00813D] group transition ease-in delay-200 hover:text-white text-black  cursor-pointer rounded-[.5rem]  bg-[#ffff] flex-col flex justify-center items-center w-full px-[2.5rem] py-[3.8rem] ">
            <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/email.svg" />
            <h2 className=" mt-[1.2rem] mb-[.7rem]  font-bold text-2xl ">آدرس ایمیل</h2>
            <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-[1rem] font-semibold mb-[.2rem] ">email@example.com</p>
            <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-[1rem] font-semibold ">info@yourdomain.com</p>
          </div>
          <div className=" hover:bg-[#00813D] group transition ease-in delay-200 hover:text-white   cursor-pointer rounded-[.5rem]  bg-[#ffff] flex-col flex justify-center items-center w-full px-[2.5rem] py-[3.8rem] ">
            <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/location.svg" />
            <h2 className=" mt-[1.2rem] mb-[.7rem]  font-bold text-2xl "> شماره تلفن </h2>
            <p className=" text-[#5C5C5B] text-[1rem] font-semibold mb-[.2rem] group-hover:text-white transition ease-in delay-200 ">+1255 - 568 - 6523 4374-221</p>
            <p className=" text-[#5C5C5B] text-[1rem] font-semibold group-hover:text-white transition ease-in delay-200 ">+1255 - 568 - 6523</p>
          </div>
          <div className=" hover:bg-[#00813D] group transition ease-in delay-200 hover:text-white cursor-pointer rounded-[.5rem]  bg-[#ffff] flex-col flex justify-center items-center w-full px-[2.5rem] py-[3.8rem] ">
            <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/phone.svg" />
            <h2 className=" mt-[1.2rem] mb-[.7rem]  font-bold text-2xl ">خط آدرس</h2>
            <p className=" text-[#5C5C5B] text-[1rem] font-semibold mb-[.2rem] group-hover:text-white transition ease-in delay-200 ">خیابان بووری، نیویورک، 37 ایالات متحده آمریکا</p>
            <p className=" text-[#5C5C5B] text-[1rem] font-semibold group-hover:text-white transition ease-in delay-200 ">NY 10013، ایالات متحده آمریکا</p>
          </div>
        </div>
        <div className=" pt-[8rem] flex-col md:flex-row max-w-[82rem] px-[1rem] sm:px-[3rem] flex mx-auto  gap-[1rem] xl:px-[1.6rem]  py-[.7rem] ">
          <div className=" basis-[50%] ">
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
              </span>{" "}
            </button>
          </div>
          <div className=" w-full mt-[4rem] md:mt-0  md:w-[50%] ">
            <h2 className=" font-bold text-[2.2rem] pb-[.4rem] text-right   ">در تماس باشید</h2>
            <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            <div className=" w-[40rem] py-[2rem] h-[30rem] pl-[6rem] flex justify-end ">
              <MapCountanerShop />
            </div>
          </div>
        </div>
        <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
      </section>
    </section>
  );
}

export default Contact;
