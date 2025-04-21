"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaPinterestP, FaTwitter, FaVimeoV } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <section className=" bg-[#f4f1ea]">
        <div dir="rtl" className="mx-auto relative grid grid-cols-1 sm:flex-wrap gap-y-[2.5rem] gap-x-[4rem] lg:gap-x-0   lg:flex-nowrap max-w-[82rem] py-[5rem] sm:py-[10rem] text-right items-center sm:flex justify-between px-[1rem] sm:px-[3rem] xl:px-[1.6rem]">
          <motion.img
            initial={{ x: -140 }} // starts lower, then moves up
            whileInView={{ x: -38 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className=" hidden 2xl:block opacity-[.30] absolute left-[0] top-[14rem]"
            src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/fry-shape-2.png"
            alt=""
          />

          <div className="xl:mb-[-3rem] w-[18rem]">
            <img className="ml-auto" src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
            <p className="my-[1.6rem] font-medium text-[#707070]">ما معتقدیم که قدرت انجام آن را دارد چیزهای شگفت انگیز</p>
            <p className="my-[1rem] font-medium text-[#707070]">علاقه مند به همکاری با ما هستید؟</p>
            <p className="font-bold text-xl text-[#00813d]">info@example.com</p>

            <div className="   mt-[3rem] flex gap-[1.5rem]">
              {/* Social Icons */}
              {[
                { icon: <FaVimeoV size={18} />, key: "vimeo" },
                { icon: <FaPinterestP size={18} />, key: "pinterest" },
                { icon: <FaTwitter size={18} />, key: "twitter" },
                { icon: <FaFacebookF size={18} />, key: "facebook" }
              ].map(({ icon, key }) => (
                <div key={key} className="group bg-[#5c5c5b1a] h-[2.5rem] w-[2.5rem] rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#00813d]">
                  <div className="text-[#212121] group-hover:text-white transition-colors duration-200">{icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:mb-[4rem]">
            <h2 className="mb-[1.6em] font-semibold text-[1.2rem]">لینک های سریع</h2>
            <ul className="flex flex-col gap-[.1rem] text-[#212121] font-[470]">
              <Link href="/" className="text-[1.1rem]">
                خدمات
              </Link>
              <Link href="/" className="text-[1.1rem]">
                درباره شرکت
              </Link>
              <Link href="/" className="text-[1.1rem]">
                آخرین اخبار
              </Link>
              <Link href="/" className="text-[1.1rem]">
                گواهینامه ها
              </Link>
            </ul>
          </div>

          <div className="xl:mb-[4rem]">
            <h2 className="mb-[2rem] font-semibold text-[1.2rem]">حساب من</h2>
            <ul className="flex flex-col gap-[.1rem] text-[#212121] font-[470]">
              <Link href="/" className="text-[1.1rem]">
                پرووفایل من
              </Link>
              <Link href="/" className="text-[1.1rem]">
                تاریخچه سفارشات
              </Link>
              <Link href="/" className="text-[1.1rem]">
                لیست علاقه مندی
              </Link>
              <Link href="/" className="text-[1.1rem]">
                سبد خرید
              </Link>
            </ul>
          </div>

          <div className="w-[15rem]">
            <h2 className="mb-[2rem] font-bold text-[1.1rem]">: آدرس</h2>
            <ul className="flex flex-col">
              <Link href="/" className="text-[1.1rem] text-[#5c5c5b] font-medium">
                ، نیویورک، نیویورک <span className="text-[#d12525]">10018</span> ایالات متحده
              </Link>
              <h2 className="mb-[1rem] font-bold text-[1.1rem] mt-[2rem]">: ساعت</h2>
              <p className="text-[#5c5c5b] text-[1.1rem] font-medium">از ساعت 9:30 الی 18:30 از دوشنبه تا جمعه</p>
            </ul>
          </div>

          <div className="pt-[1rem]">
            <h2 className="mb-[2rem] font-medium text-[1.2rem]">برنامه را نصب کنید</h2>
            <ul className="flex flex-col text-[1.1rem] font-[400] text-[#5c5c5b]">
              <p className="font-[450] text-[#515151]">از اپ استور یا گوگل پلی</p>
              <div className="my-[2rem] ml-auto items-center flex gap-[.3rem]">
                <Link href="">
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png" alt="" />
                </Link>
                <Link href="">
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" alt="" />
                </Link>
              </div>
              <p className="font-[450] text-[#515151]">مرکز پشتیبانی 24/7</p>
              <p className="font-bold text-[1.7rem] text-[#00813d]">+718-904-4450</p>
            </ul>
          </div>

          <motion.img
            initial={{ y: 200 }} // starts higher, then moves down
            whileInView={{ y: -140 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className=" hidden 2xl:block  opacity-[.28] absolute right-[-4.7rem] top-[20rem]"
            src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-shape-3.png"
            alt=""
          />
        </div>
      </section>

      <section className="bg-[#00813d]">
        <div className="   mx-auto max-w-[82rem] py-[2.8rem] gap-[2rem] text-right items-center flex-wrap-reverse flex justify-center lg:justify-between px-[1rem] ">
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
