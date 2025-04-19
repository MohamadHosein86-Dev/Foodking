"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function HeaderSecond() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox10, setShowBox10] = useState(false);
  const [showBox20, setShowBox20] = useState(false);

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
    <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
      <div ref={heroRef} className={` ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
        <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[2rem] items-center flex justify-between px-[1.5rem] `}>
          <div className=" flex items-center gap-[5rem] ">
            <button className=" outline-none rounded-md  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
              اکنون سفارش دهید
              <span>
                <FaTruckFast size={22} />{" "}
              </span>{" "}
            </button>
            <div className=" flex items-center gap-[1.5rem] relative  ">
              <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[.1rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
              <FaShoppingBasket className=" cursor-pointer " size={20} />
              <FaSearch className=" cursor-pointer " size={18} />
            </div>
          </div>
          <div className=" flex gap-[2rem] relative ">
            <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href="/contact">
              تماس باما{" "}
            </Link>

            <div className=" z-[100000]  relative ">
              <span
                onClick={() => {
                  setShowBox10((res) => !res);
                  setShowBox20(false);
                  setShowBox2(false);
                }}
                className=" flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in delay-150 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox10 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
                صفحات
              </span>
              <AnimatePresence>
                {showBox10 && (
                  <motion.div
                    className="mt-6 p-4 absolute  rounded shadow"
                    initial={{ opacity: 0 }} // حالت اولیه هنگام ظاهر شدن
                    animate={{ opacity: 1 }} // حالت نهایی هنگام ظاهر شدن
                    exit={{ opacity: 0 }} // حالت خروجی هنگام ناپدید شدن
                    transition={{ duration: 0.5 }}
                  >
                    <ul className={` absolute  z-[10000]  transition-opacity ease-in delay-100  shadwoCss top-[0rem] right-[-2rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] `}>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                        <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                      </Link>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                      </Link>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">گالری</span>
                      </Link>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                      </Link>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                      </Link>
                      <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                      </Link>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className=" z-[100000]  relative ">
              <span
                onClick={() => {
                  setShowBox2((res) => !res);
                  setShowBox3(false);
                  setShowBox(false);
                }}
                className=" flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in delay-150 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox2 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
                بلاگ
              </span>
              <AnimatePresence>
                {showBox2 && (
                  <motion.div
                    className="mt-6 p-4 absolute  rounded shadow"
                    initial={{ opacity: 0 }} // حالت اولیه هنگام ظاهر شدن
                    animate={{ opacity: 1 }} // حالت نهایی هنگام ظاهر شدن
                    exit={{ opacity: 0 }} // حالت خروجی هنگام ناپدید شدن
                    transition={{ duration: 0.5 }}
                  >
                    <ul className={` absolute  z-[10000]  transition-opacity ease-in delay-100  shadwoCss top-[0rem] right-[-1rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] `}>
                      <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                        <span className="  font-semibold    px-[1rem]  ">وبلاگ</span>
                      </Link>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className=" z-[100000]  relative ">
              <span
                onClick={() => {
                  setShowBox20((res) => !res);
                  setShowBox10(false);
                  setShowBox2(false);
                }}
                className=" flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in delay-150 font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox20 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
                فروشگاه
              </span>
              <AnimatePresence>
                {showBox20 && (
                  <motion.div
                    className="mt-6 p-4 absolute  rounded shadow"
                    initial={{ opacity: 0 }} // حالت اولیه هنگام ظاهر شدن
                    animate={{ opacity: 1 }} // حالت نهایی هنگام ظاهر شدن
                    exit={{ opacity: 0 }} // حالت خروجی هنگام ناپدید شدن
                    transition={{ duration: 0.5 }}
                  >
                    <ul className={` absolute  z-[10000]  transition-opacity ease-in delay-100  shadwoCss top-[0rem] right-[-2.5rem] flex flex-col gap-[2 clrem] text-right bg-white w-[14rem] text-[#212121] `}>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                        <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                      </Link>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                      </Link>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">گالری</span>
                      </Link>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                      </Link>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                      </Link>
                      <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                        <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                      </Link>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href={"/about-us"}>
              درباره ما{" "}
            </Link>

            <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={"/"}>
              <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
            </Link>
          </div>
          <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
        </div>
      </div>
      <AnimatePresence>
        {showSticky && (
          <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-full bg-[#ffff] shadow-xl z-50 px-4 py-3">
            <div className="   ">
              <div className={` z-[100000]  ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
                <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[.4rem] items-center flex justify-between px-[1.5rem] `}>
                  <div className=" flex items-center gap-[5rem] ">
                    <button className=" rounded-md outline-none  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                      اکنون سفارش دهید
                      <span>
                        <FaTruckFast size={22} />{" "}
                      </span>{" "}
                    </button>
                    <div className=" flex items-center gap-[1.5rem] relative  ">
                      <div className=" bg-[#212121] cursor-pointer top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[0rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                      <FaShoppingBasket className="  text-[#D12525] cursor-pointer " size={20} />
                      <FaSearch className="  text-[#D12525] cursor-pointer " size={18} />
                    </div>
                  </div>
                  <div className=" text-[#212121] flex gap-[2rem] relative ">
                    <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-100 font-semibold" href="/contact">
                      تماس باما{" "}
                    </Link>

                    <div>
                      <div
                        onClick={() => {
                          setShowBox((res) => !res);
                          setShowBox2(false);
                          setShowBox3(false);
                        }}
                        className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                      >
                        <span className=" hover:text-[#00813D] transition ease-in delay-100 font-semibold"> صفحات</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>{" "}
                      </div>
                      <ul className={` absolute   transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[-3.8rem] flex flex-col gap-[2 clrem] text-right bg-[#cecece] w-[14rem] text-[#212121] ${showBox ? " opacity-100 z-[10000]" : " opacity-0 "}`}>
                        <Link onClick={() => setShowBox(false)} className="  hidden text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]" href={"/shop/chef"}>
                          <span className="  font-semibold    px-[1rem]  "> اشپز </span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                          <span className="  font-semibold    px-[1rem]  "> اشپز </span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  ">گالری</span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/testimonial"}>
                          <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/reservation"}>
                          <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                        </Link>
                        <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/faqs"}>
                          <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                        </Link>
                      </ul>
                    </div>

                    <div>
                      <div
                        onClick={() => {
                          setShowBox2((res) => !res);
                          setShowBox3(false);
                          setShowBox(false);
                        }}
                        className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                      >
                        <span className=" hover:text-[#00813D] transition ease-in delay-100 font-semibold"> وبلاگ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox2 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>{" "}
                      </div>
                      <ul className={` absolute transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[1.5rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] ${showBox2 ? " opacity-100 z-[10000] " : " opacity-0 "}`}>
                        <Link onClick={() => setShowBox2(false)} className="  text-[#515151] bg-[#ffff] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/blog"}>
                          <span className="  font-semibold    px-[1rem]  "> بلاگ </span>
                        </Link>
                      </ul>
                    </div>

                    <div>
                      <div
                        onClick={() => {
                          setShowBox3((res) => !res);
                          setShowBox(false);
                          setShowBox2(false);
                        }}
                        className="  cursor-pointer     gap-[.2rem]  font-semibold flex  items-center flex-row-reverse "
                      >
                        <span className=" hover:text-[#00813D]  transition ease-in delay-100 font-semibold"> فروشگاه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox3 ? " rotate-180 " : " rotate-none  cursor-pointer    "} transition-transform duration-500   mt-[.4rem]  size-[12.5px]  `}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>{" "}
                      </div>
                      <ul className={` absolute   transition-opacity ease-in delay-100  shadwoCss top-[3.6rem] left-[8rem] flex flex-col gap-[2 clrem] text-right bg-[#fff] w-[14rem] text-[#212121] ${showBox3 ? " opacity-100 z-[10000] " : " opacity-0 "}`}>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                          <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                        </Link>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                        </Link>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  ">گالری</span>
                        </Link>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                        </Link>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                          <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                        </Link>
                        <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                          <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                        </Link>
                      </ul>
                    </div>

                    <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-100 font-semibold" href={"/about-us"}>
                      درباره ما{" "}
                    </Link>
                    <Link className="   cursor-pointer   gap-[.2rem] transition ease-in delay-100 font-semibold  flex  items-center flex-row-reverse " href={"/"}>
                      <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
                    </Link>
                  </div>
                  <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O%C2%AFU%C2%A9U_U_U%C2%AF_14-transformed.png" alt="" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
