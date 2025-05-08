"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaPinterestP, FaShoppingBasket, FaTruck, FaTwitter, FaUser, FaVimeoV } from "react-icons/fa";
import { FaFacebookF, FaTruckFast } from "react-icons/fa6";
import AnimationHeader from "./AnimationHeader";
import Modal from "../modal/Modal";
import ModalLoginUser from "../authenticationuser/ModalLoginUser";

export default function HeaderSecond() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox10, setShowBox10] = useState(false);
  const [showBox20, setShowBox20] = useState(false);
  const [open, setOpen] = useState(false);

  const curentUrl = usePathname();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section>
      <div ref={heroRef}>
        <div className=" hidden   xl:flex border-b-[1px] border-[#21212128]  ">
          <div className=" w-full relative  bg-[#F4F1EA]  ">
            <div className=" top-0  w-[33%] h-full absolute  bg-[#212121] "></div>
            <div className=" mx-auto flex items-center justify-between max-w-[82rem] px-[1.5rem]  py-[.7rem]  ">
              <div className=" z-[100000000] flex gap-[1.5rem] ">
                <FaVimeoV className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                <FaPinterestP className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                <FaTwitter className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                <FaFacebookF className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
              </div>
              <div className=" flex items-center gap-[2.5rem] ">
                <h2 className=" font-medium flex items-center gap-[.2rem] ">
                  سفارشتان را پیگیری کنید <FaTruck size={21} color="#D12525" />
                </h2>
                <div className=" font-medium flex flex-row-">
                  <h2> تحویل مطمئن بدون تماس با پیک</h2>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#F4F1EA]   ">
          <div className={`  ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
            <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[1.2rem] items-center flex justify-between px-[1rem] sm:px-[3rem] lg:px-[1rem] xl:px-[1.5rem] `}>
              <div className=" flex items-center gap-[1.5rem] xl:gap-[1.7rem] ">
                <FaUser onClick={() => setOpen(true)} size={22} color="#D12525" className=" cursor-pointer " />
                <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
                  <ModalLoginUser setOpen={setOpen} />
                </Modal>

                <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#212121" />
                <button className=" rounded-md outline-none  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] hidden md:flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                  اکنون سفارش دهید
                  <span>
                    <FaTruckFast size={22} />{" "}
                  </span>{" "}
                </button>

                <div className="hidden   xl:flex items-center gap-[1.5rem] relative  ">
                  <div className=" bg-[#212121] cursor-pointer top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[0rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                  <FaShoppingBasket className="  text-[#D12525] cursor-pointer " size={20} />
                </div>
              </div>
              <div className=" hidden text-[#212121]   xl:flex  gap-[2rem] relative ">
                <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium " href="/contact">
                  تماس باما{" "}
                </Link>

                <div
                  className="relative z-[100000]"
                  onMouseEnter={() => {
                    setShowBox10(true);
                    setShowBox2(false);
                    setShowBox20(false);
                  }}
                  onMouseLeave={() => setShowBox10(false)}
                >
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox10 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    صفحات
                  </span>

                  <AnimatePresence>
                    {showBox10 && (
                      <motion.div className="absolute right-[0rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                            <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/food-menu"}>
                            <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/gallery"}>
                            <span className="  font-semibold    px-[1rem]  ">گالری</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/testimonial"}>
                            <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/reservation"}>
                            <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/faqs"}>
                            <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
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
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    بلاگ
                  </span>

                  <AnimatePresence>
                    {showBox2 && (
                      <motion.div className="absolute right-[0rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/blog"}>
                            <span className="  font-semibold    px-[1rem]  "> وبلاگ </span>
                          </Link>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="relative z-[100000]"
                  onMouseEnter={() => {
                    setShowBox20(true);
                    setShowBox2(false);
                    setShowBox10(false);
                  }}
                  onMouseLeave={() => setShowBox20(false)}
                >
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox20 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    فروشگاه
                  </span>

                  <AnimatePresence>
                    {showBox20 && (
                      <motion.div className="absolute right-[0rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/foodking-shop"}>
                            <span className="  font-semibold    px-[1rem]  "> لیست فروشگاه </span>
                          </Link>

                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                            <span className="  font-semibold    px-[1rem]  ">سبد خرید</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/favarit"}>
                            <span className="  font-semibold    px-[1rem]  ">لیست علاقه مندی</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                            <span className="  font-semibold    px-[1rem]  ">پرداخت</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/my-account"}>
                            <span className="  font-semibold    px-[1rem]  "> حساب کاربری من </span>
                          </Link>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium" href={"/about-us"}>
                  درباره ما{" "}
                </Link>

                <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={"/"}>
                  <span className=" hover:text-[#00813D] transition ease-in delay-150 font-medium"> صفحه اصلی</span>
                </Link>
              </div>
              <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O%C2%AFU%C2%A9U_U_U%C2%AF_14-transformed.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <AnimationHeader showSticky={showSticky} />
    </section>
  );
}
