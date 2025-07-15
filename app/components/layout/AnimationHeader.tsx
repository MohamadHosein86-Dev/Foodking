"use client";
import Isauthenticated from "../authenticationuser/Isauthenticated";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";

interface PropsType {
  showSticky: boolean;
}
export default function AnimationHeader({ showSticky }: PropsType) {
  const curentUrl = usePathname();
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [x, setShowBox10] = useState(false);
  const [y, setShowBox20] = useState(false);
  const name = x && y;
  const { totalCount = 0 } = useGetCart();
  return (
    <AnimatePresence>
      {showSticky && (
        <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-full bg-white shadow-xl z-[100000] px-4 py-3">
          <div className=" bg-[#ffff]  ">
            <div className={` z-[100000]  ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
              <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[.4rem] items-center flex justify-between  sm:px-[1.6rem] `}>
                <div className=" flex items-center gap-[5rem] md:gap-[1.5rem] ">
                  <Isauthenticated totalCount={totalCount} />
                  <button className="relative overflow-hidden outline-none rounded-md cursor-pointer  bg-[#D12525] text-white font-bold   w-[15rem] py-[1rem] pb-[1.3rem] px-[1rem] xl:flex hidden items-center justify-center gap-[.5rem] group h-16">
                    <span className="absolute inset-0 bg-[#00813D] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md" />
                    <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-white">
                      اکنون سفارش دهید
                      <FaTruckFast size={22} className="text-white transition-all duration-500" />
                    </span>
                  </button>
                </div>
                <div className=" hidden xl:flex text-[#212121] gap-[2rem] relative ">
                  <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-medium" href="/contact">
                    تماس باما {name}
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
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/chef"}>
                              <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/food-menu"}>
                              <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                            </Link>
                            <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/gallery"}>
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
                            <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={"/blog"}>
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
                            <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/dashboard/favarit"}>
                              <span className="  font-semibold    px-[1rem]  ">لیست علاقه مندی</span>
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
