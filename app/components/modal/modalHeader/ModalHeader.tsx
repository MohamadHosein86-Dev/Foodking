"use client";

import Link from "next/link";
import { useState } from "react";
import { FaClock, FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { TbTruckDelivery } from "react-icons/tb";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalHeader({ setOpen }: PropsType) {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [, setShowBox10] = useState(false);
  const [, setShowBox20] = useState(false);
  return (
    <div className="p-4 pb-8 w-full h-full bg-white rounded-lg pt-8 ">
      <div className=" flex justify-between items-center ">
        <button onClick={() => setOpen(false)} className=" bg-red-500 text-white px-4 py-1.5 cursor-pointer rounded-full text-2xl font-bold mb-4">
          ×
        </button>
        <img className=" " src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
      </div>
      <div dir="rtl" className=" text-xl font-normal mt-8 mb-24  flex-col-reverse flex text-[#5C5C5B] gap-8  ">
        <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium" href="/contact">
          تماس باما{" "}
        </Link>

        <div
          className="relative z-[100000]"
          onMouseEnter={() => {
            setShowBox(true);
            setShowBox2(false);
            setShowBox20(false);
          }}
          onMouseLeave={() => setShowBox(false)}
        >
          <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D]  transition ease-in-out duration-200 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            صفحات
          </span>

          <AnimatePresence>
            {showBox && (
              <motion.div className="absolute shadow-md  -right-0 top-10 border-1 border-[#eeeeee] bg-[#ffffff] rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <ul className="flex shadow-md  rounded-md flex-col text-right text-[#212121]">
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/chef"}>
                    <span className="  font-semibold    px-4  ">آشپز</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/food-menu"}>
                    <span className="  font-semibold    px-4  "> منوی غذا</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/gallery"}>
                    <span className="  font-semibold    px-4  ">گالری</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/testimonial"}>
                    <span className="  font-semibold    px-4  ">گواهینامه</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/reservation"}>
                    <span className="  font-semibold    px-4  ">رزرواسیون</span>
                  </Link>
                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={""}>
                    <span className="  font-semibold    px-4  ">سوالات متداول</span>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative z-[100000]"
          onMouseEnter={() => {
            setShowBox2(true);
            setShowBox20(false);
            setShowBox10(false);
          }}
          onMouseLeave={() => setShowBox2(false)}
        >
          <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D]  transition ease-in-out duration-200 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            بلاگ
          </span>

          <AnimatePresence>
            {showBox2 && (
              <motion.div className="absolute  border-1 border-[#eeeeee] bg-[#ffffff]  -right-0 top-10 shadow-lg rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <ul className="flex flex-col text-right text-[#212121]">
                  <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={""}>
                    <span className="  font-semibold    px-4  "> وبلاگ </span>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative z-[10000000]"
          onMouseEnter={() => {
            setShowBox3(true);
            setShowBox2(false);
            setShowBox10(false);
          }}
          onMouseLeave={() => setShowBox3(false)}
        >
          <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox3 ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            فروشگاه
          </span>

          <AnimatePresence>
            {showBox3 && (
              <motion.div className="absolute -right-0 shadow-md top-10 border-1 border-[#eeeeee] bg-[#ffffff] rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <ul className="flex flex-col text-right text-[#212121]   ">
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/foodking-shop"}>
                    <span className="  font-semibold    px-4  "> لیست فروشگاه </span>
                  </Link>

                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/cart"}>
                    <span className="  font-semibold    px-4  ">سبد خرید</span>
                  </Link>
                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/dashboard/favarit"}>
                    <span className="  font-semibold    px-4  ">لیست علاقه مندی</span>
                  </Link>

                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={"/my-account"}>
                    <span className="  font-semibold    px-4  "> حساب کاربری من </span>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium" href={"/about-us"}>
          درباره ما{" "}
        </Link>

        <Link className="   cursor-pointer   gap-1 " href={"/"}>
          <span className=" hover:text-[#00813D] transition ease-in delay-150 font-medium"> صفحه اصلی</span>
        </Link>
      </div>
      <div dir="rtl" className="  font-semibold mt-8 text-lg flex flex-col gap-4 text-[#212121] ">
        <h2 className=" mb-6 font-semibold text-2xl ">اطلاعات تماس</h2>
        <div className=" flex gap-4 items-center ">
          <FaMapMarker color="#D12525" />
          <p className="">خیابان اصلی، ملبورن، استرالیا</p>
        </div>
        <div className=" flex gap-4 items-center ">
          <FaEnvelope color="#D12525" /> <p className="">info@foodking.com</p>
        </div>
        <div className=" flex gap-4 items-center ">
          <FaClock color="#D12525" />
          <p className="">یکشنبه - جمعه، ۹ صبح تا ۵ بعد از ظهر</p>
        </div>
        <div className=" flex gap-4 items-center ">
          <FaPhone color="#D12525" />
          <p className="">+۹۰۹۹۴۵۳۲۱۱۰۰</p>
        </div>

        <button className=" w-full h-16 md:h-16 mb-6 group relative font-semibold rounded-xl text-white bg-[#00813D] ">
          <div className="w-full h-full cursor-pointer z-10  absolute inset-0 flex items-center justify-center space-x-1 font-semibold">
            <TbTruckDelivery className=" text-white transition-all duration-500  text-xl md:text-2xl" />
            <h1>اکنون سفارش دهید</h1>
          </div>
          <span className="absolute inset-0 w-full  rounded-xl bg-[#D12525] scale-0 group-hover:scale-100 transition-all duration-500 ease-out origin-center"></span>
        </button>
        <div className="   mb-4 flex gap-6">
          <div className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#D12525]">
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"></path>
              </svg>
            </div>
          </div>
          <div className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#D12525]">
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
              </svg>
            </div>
          </div>
          <div className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#D12525]">
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </div>
          </div>
          <div className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#D12525]">
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
