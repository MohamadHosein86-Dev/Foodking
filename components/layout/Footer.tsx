"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <section className=" bg-[#f4f1ea] ">
        <div className="   mx-auto max-w-[82rem] py-[10rem] text-right items-center flex justify-between px-[1rem] ">
          <div className="  mt-[3rem] ">
            <h2 className=" mb-[2rem] font-medium  text-[1.2rem] "> برنامه را نصب کنید </h2>
            <ul className=" flex flex-col text-[1.1rem] font-[400]  text-[#5c5c5b]   ">
              <p className=" font-[450] text-[#515151] ">از اپ استور یا گوگل پلی</p>
              <div className=" my-[2rem] ml-auto flex gap-[.3rem] ">
                <Link href={""}>
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png" alt="" />
                </Link>
                <Link href={""}>
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" alt="" />
                </Link>
              </div>
              <p className=" font-[450] text-[#515151] "> مرکز پشتیبانی 24/7 </p>
              <p className=" font-bold  text-[1.7rem] text-[#00813d] ">+718-904-4450 </p>
            </ul>
          </div>
          <div className=" ">
            <h2 className=" mb-[2rem] font-bold  text-[1.1rem] "> : آدرس </h2>
            <ul className=" flex flex-col ">
              <Link href={"/"} className="   text-[1.1rem]  text-[#5c5c5b] font-medium ">
                ، نیویورک، نیویورک 10018 ایالات متحده
              </Link>
              <h2 className=" mb-[1rem] font-bold  text-[1.1rem] mt-[2rem] "> : ساعت </h2>

              <p className="  text-[#5c5c5b]  text-[1.1rem] font-medium ">از ساعت 9:30 الی 18:30 از دوشنبه تا جمعه</p>
            </ul>
          </div>
          <div className=" mb-[1.2rem] ">
            <h2 className=" mb-[2rem] font-semibold text-[1.2rem] ">حساب من</h2>
            <ul className=" flex flex-col gap-[.1rem] text-[#212121] font-[470] ">
              <Link href={"/"} className=" text-[1.1rem] ">
                پرووفایل من
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                تاریخچه سفارشات
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                لیست علاقه مندی
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                سبد خرید
              </Link>
            </ul>
          </div>
          <div className=" mb-[1.2rem] ">
            <h2 className=" mb-[1.6em]  font-semibold text-[1.2rem] ">لینک های سریع</h2>
            <ul className=" flex flex-col gap-[.1rem] text-[#212121] font-[470] ">
              <Link href={"/"} className=" text-[1.1rem] ">
                خدمات
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                درباره شرکت
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                آخرین اخبار
              </Link>
              <Link href={"/"} className=" text-[1.1rem] ">
                گواهینامه ها
              </Link>
            </ul>
          </div>
          <div className="  w-[20%] ">
            <img className=" ml-auto " src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
            <p className=" my-[1.6rem] font-medium text-[#707070] ">ما معتقدیم که قدرت انجام آن را دارد چیزهای شگفت انگیز </p>
            <p className=" my-[1rem]  font-medium text-[#707070] ">علاقه مند به همکاری با ما هستید؟</p>
            <p className=" font-bold text-xl text-[#00813d] ">info@example.com</p>
          </div>
        </div>
      </section>
      <section className="bg-[#00813d]">
        <div className="   mx-auto max-w-[82rem] py-[2.8rem] text-right items-center flex justify-between px-[1rem] ">
          <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/card-1.png" alt="" />
          <h2 className=" text-[#ffff] font-medium text-[1.2rem] ">
            {" "}
            . کپی رایت <span className=" text-[#ffb936] ">2024</span> فودکینگ . تمامی حقوق محفوظ است ©{" "}
          </h2>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
