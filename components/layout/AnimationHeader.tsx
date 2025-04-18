"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

interface PropsType {
  setShowBox3: (s: boolean) => void;
  showBox2: boolean;
  showBox3: boolean;
  showSticky: boolean;
  setShowBox: (s: boolean) => void;
  setShowBox2: (s: boolean) => void;
  setShowBox10: (s: boolean) => void;
  setShowBox20: (s: boolean) => void;
  showBox: boolean;
}
export default function AnimationHeader({ setShowBox3, showBox2, showBox3, showSticky, setShowBox, setShowBox2, setShowBox10, setShowBox20, showBox }: PropsType) {
  const curentUrl = usePathname();

  return (
    <AnimatePresence>
      {showSticky && (
        <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-full bg-white shadow-xl z-50 px-4 py-3">
          <div className=" bg-[#ffff]  ">
            <div className={` z-[100000]  ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
              <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[.4rem] items-center flex justify-between  sm:px-[3rem] `}>
                <div className=" flex items-center gap-[5rem] md:gap-[1.5rem] ">
                  <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#212121" />
                  <button className=" rounded-md outline-none  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] hidden  md:flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                    اکنون سفارش دهید
                    <span>
                      <FaTruckFast size={22} />{" "}
                    </span>{" "}
                  </button>
                  <div className=" hidden xl:flex items-center gap-[1.5rem] relative  ">
                    <div className=" bg-[#212121] cursor-pointer top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[0rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                    <FaShoppingBasket className="  text-[#D12525] cursor-pointer " size={20} />
                  </div>
                </div>
                <div className=" hidden xl:flex text-[#212121] gap-[2rem] relative ">
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
                    <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      صفحات
                    </span>

                    <AnimatePresence>
                      {showBox && (
                        <motion.div className="absolute shadow-md  right-[0rem] top-[2.5rem] border-[1px] border-[#eeeeee] bg-[#ffffff] rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex shadow-md  rounded-md flex-col text-right text-[#212121]">
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                              <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                              <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                              <span className="  font-semibold    px-[1rem]  ">گالری</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                              <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                              <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
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
                        <motion.div className="absolute  border-[1px] border-[#eeeeee] bg-[#ffffff]  right-[0rem] top-[2.5rem] shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex flex-col text-right text-[#212121]">
                            <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                              <span className="  font-semibold    px-[1rem]  "> وبلاگ </span>
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
                    <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox3 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      فروشگاه
                    </span>

                    <AnimatePresence>
                      {showBox3 && (
                        <motion.div className="absolute right-[0rem] top-[2.5rem] border-[1px] border-[#eeeeee] bg-[#ffffff] rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex flex-col text-right text-[#212121]   ">
                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/foodking-shop"}>
                              <span className="  font-semibold    px-[1rem]  "> لیست فروشگاه </span>
                            </Link>

                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                              <span className="  font-semibold    px-[1rem]  ">سبد خرید</span>
                            </Link>
                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/favarit"}>
                              <span className="  font-semibold    px-[1rem]  ">لیست علاقه مندی</span>
                            </Link>
                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/cart"}>
                              <span className="  font-semibold    px-[1rem]  ">پرداخت</span>
                            </Link>
                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/my-account"}>
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

                  <Link className="   cursor-pointer   gap-[.2rem] font-medium  flex  items-center flex-row-reverse " href={"/"}>
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
  );
}
