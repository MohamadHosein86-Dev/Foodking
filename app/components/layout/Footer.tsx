"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaPinterestP, FaTwitter, FaVimeoV } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <section className=" bg-[#f4f1ea]">
        <div dir="rtl" className="mx-auto relative grid grid-cols-1 sm:flex-wrap gap-y-10 gap-x-16 lg:gap-x-0   lg:flex-nowrap max-w-7xl py-20 sm:py-40 text-right items-center sm:flex justify-between px-4 sm:px-12 xl:px-6">
          <motion.img
            initial={{ x: -140 }} // starts lower, then moves up
            whileInView={{ x: -38 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className=" hidden xl:block opacity-30 absolute left-0 top-56"
            src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/fry-shape-2.png"
            alt=""
          />

          <div className="xl:-mb-12 w-72">
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
            <p className="my-6 font-medium text-[#707070]">ما معتقدیم که قدرت انجام آن را دارد چیزهای شگفت انگیز</p>
            <p className="my-4 font-medium text-[#707070]">علاقه مند به همکاری با ما هستید؟</p>
            <p className="font-bold text-xl text-[#00813d]">info@example.com</p>

            <div className="   mt-12 flex gap-6">
              {/* Social Icons */}
              {[
                { icon: <FaVimeoV size={18} />, key: "vimeo" },
                { icon: <FaPinterestP size={18} />, key: "pinterest" },
                { icon: <FaTwitter size={18} />, key: "twitter" },
                { icon: <FaFacebookF size={18} />, key: "facebook" }
              ].map(({ icon, key }) => (
                <div key={key} className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#00813d]">
                  <div className="text-[#212121] group-hover:text-white transition-colors duration-200">{icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:mb-16">
            <h2 className="mb-6 font-semibold text-lg">لینک های سریع</h2>
            <ul className="flex flex-col gap-0.5 text-[#212121] font-medium">
              <Link href="/" className="text-lg">
                خدمات
              </Link>
              <Link href="/" className="text-lg">
                درباره شرکت
              </Link>
              <Link href="/" className="text-lg">
                آخرین اخبار
              </Link>
              <Link href="/" className="text-lg">
                گواهینامه ها
              </Link>
            </ul>
          </div>

          <div className="xl:mb-16">
            <h2 className="mb-8 font-semibold text-lg">حساب من</h2>
            <ul className="flex flex-col gap-0.5 text-[#212121] font-medium">
              <Link href="/" className="text-lg">
                پرووفایل من
              </Link>
              <Link href="/" className="text-lg">
                تاریخچه سفارشات
              </Link>
              <Link href="/" className="text-lg">
                لیست علاقه مندی
              </Link>
              <Link href="/" className="text-lg">
                سبد خرید
              </Link>
            </ul>
          </div>

          <div className="w-60">
            <h2 className="mb-8 font-bold text-lg"> آدرس : </h2>
            <ul className="flex flex-col">
              <Link href="/" className="text-lg text-[#5c5c5b] font-medium">
                ، نیویورک، نیویورک <span className="text-[#d12525]">10018</span> ایالات متحده
              </Link>
              <h2 className="mb-4 font-bold text-lg mt-8"> ساعت : </h2>
              <p className="text-[#5c5c5b] text-lg font-medium">از ساعت 9:30 الی 18:30 از دوشنبه تا جمعه</p>
            </ul>
          </div>

          <div className="pt-4">
            <h2 className="mb-8 font-medium text-lg">برنامه را نصب کنید</h2>
            <ul className="flex flex-col text-lg font-normal text-[#5c5c5b]">
              <p className="font-medium text-[#515151]">از اپ استور یا گوگل پلی</p>
              <div className="my-8 ml-auto items-center flex gap-1">
                <Link href="">
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png" alt="" />
                </Link>
                <Link href="">
                  <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" alt="" />
                </Link>
              </div>
              <p className="font-medium text-[#515151]">مرکز پشتیبانی 24/7</p>
              <p className="font-bold text-2xl text-[#00813d]">+718-904-4450</p>
            </ul>
          </div>

          <motion.img initial={{ y: 200 }} whileInView={{ y: -140 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.2 }} className=" hidden xl:block  opacity-30 absolute -right-18 top-80" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-shape-3.png" alt="" />
        </div>
      </section>

      <section className="bg-[#00813d]">
        <div className="   mx-auto max-w-7xl py-11 gap-8 text-right items-center flex-wrap-reverse flex justify-center lg:justify-between px-4 ">
          <Image height={250} width={250} src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/card-1.png" alt="" />
          <h2 className=" text-[#ffff] font-medium text-lg ">
            {" "}
            . کپی رایت <span className=" text-[#ffb936] ">2024</span> فودکینگ . تمامی حقوق محفوظ است ©{" "}
          </h2>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
