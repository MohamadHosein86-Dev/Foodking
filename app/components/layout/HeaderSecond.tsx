"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaPinterestP, FaTruck, FaTwitter, FaVimeoV } from "react-icons/fa";
import { FaFacebookF, FaTruckFast } from "react-icons/fa6";
import Isauthenticated from "../authenticationuser/Isauthenticated";
import { useGetCart } from "@/app/hooks/useCart";
import ReusableOrderButton from "../ui/btn/ReusableOrderButton";

export default function HeaderSecond() {
  const [showBox2, setShowBox2] = useState(false);
  const [showBox10, setShowBox10] = useState(false);
  const [showBox20, setShowBox20] = useState(false);

  const Pathname = usePathname();
  const heroRef = useRef<HTMLDivElement>(null);
  const { totalCount = 0 } = useGetCart();

  if (Pathname !== "/")
    return (
      <section>
        <div ref={heroRef}>
          <div className=" hidden   xl:flex border-b-1 border-[#21212128]  ">
            <div className=" w-full relative  bg-[#F4F1EA]  ">
              <div className=" top-0  w-1/3 h-full absolute  bg-[#212121] "></div>
              <div className=" mx-auto flex items-center justify-between max-w-7xl px-6  py-3  ">
                <div className=" z-[100000000] flex gap-6 ">
                  <FaVimeoV className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                  <FaPinterestP className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                  <FaTwitter className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                  <FaFacebookF className=" cursor-pointer  text-[#ffff]  hover:text-[#D12525] transition ease-in delay-75 " />
                </div>
                <div className=" flex items-center gap-10 ">
                  <h2 className=" font-medium flex items-center gap-1 ">
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
            <div className={`  ${Pathname == "/" ? "border-b border-b-neutral-200 " : " border-none "} `}>
              <div className={`  text-[#fcfbfe] mx-auto max-w-7xl py-5 items-center flex justify-between px-4 sm:px-12 lg:px-4 xl:px-6 `}>
                <div className=" flex items-center gap-6 xl:gap-7 ">
                  <Isauthenticated totalCount={totalCount} />
                  <ReusableOrderButton
                    icon={<FaTruckFast size={22} />}
                    className="rounded-md outline-none  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] hidden md:flex items-center justify-center gap-2 border border-white text-center px-4 w-60 py-4 pb-5 font-bold "
                    hoverBgColor="hover:bg-[#00813D]"
                    textColor="text-white"
                    rounded={true}
                    fullWidth={false}
                    text="اکنون سفارش دهید"
                  />
                </div>
                <div className=" hidden text-[#212121]   xl:flex  gap-8 relative ">
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
                    <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox10 ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      صفحات
                    </span>

                    <AnimatePresence>
                      {showBox10 && (
                        <motion.div className="absolute -right-0 top-10 bg-white shadow-lg rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex flex-col text-right text-[#212121]">
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/chef"}>
                              <span className="  font-semibold    px-4  ">آشپز</span>
                            </Link>
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/food-menu"}>
                              <span className="  font-semibold    px-4  "> منوی غذا</span>
                            </Link>
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/gallery"}>
                              <span className="  font-semibold    px-4  ">گالری</span>
                            </Link>
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/testimonial"}>
                              <span className="  font-semibold    px-4  ">گواهینامه</span>
                            </Link>
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/reservation"}>
                              <span className="  font-semibold    px-4  ">رزرواسیون</span>
                            </Link>
                            <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={"/faqs"}>
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
                    <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D] transition ease-in-out duration-200 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      بلاگ
                    </span>

                    <AnimatePresence>
                      {showBox2 && (
                        <motion.div className="absolute -right-0 top-10 bg-white shadow-lg rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex flex-col text-right text-[#212121]">
                            <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={"/blog"}>
                              <span className="  font-semibold    px-4  "> وبلاگ </span>
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
                    <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D] transition ease-in-out duration-200 font-medium ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox20 ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                      فروشگاه
                    </span>

                    <AnimatePresence>
                      {showBox20 && (
                        <motion.div className="absolute -right-0 top-10 bg-white shadow-lg rounded-md w-56 overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          <ul className="flex flex-col text-right text-[#212121]">
                            <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/foodking-shop"}>
                              <span className="  font-semibold    px-4  "> لیست فروشگاه </span>
                            </Link>

                            <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/cart"}>
                              <span className="  font-semibold    px-4  ">سبد خرید</span>
                            </Link>
                            <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4  border-b-1 border-b-[#eaeaea]    " href={"/dashboard/favarit"}>
                              <span className="  font-semibold    px-4  ">لیست علاقه مندی</span>
                            </Link>

                            <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4     " href={"/my-account"}>
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

                  <Link className="   cursor-pointer   gap-1 font-semibold  flex  items-center flex-row-reverse " href={"/"}>
                    <span className=" hover:text-[#00813D] transition ease-in delay-150 font-medium"> صفحه اصلی</span>
                  </Link>
                </div>
                <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O%C2%AFU%C2%A9U_U_U%C2%AF_14-transformed.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
