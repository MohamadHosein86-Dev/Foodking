"use client";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";
import { usePathname } from "next/navigation";
import Isauthenticated from "../authenticationuser/Isauthenticated";
import Navbar_desktop from "./navbar_desktop/navbar_desktop";

export default function HeaderHomePage() {
  const Pathname = usePathname();
  const { totalCount = 0 } = useGetCart();

  const heroRef = useRef<HTMLDivElement>(null);

  if (Pathname == "/")
    return (
      <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
        <div ref={heroRef} className={` py-2 ${Pathname == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
          <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[1rem] items-center flex justify-between px-[1.5rem] `}>
            <div className=" flex items-center gap-[2rem] xl:gap-[3rem] ">
              <Isauthenticated home={true} totalCount={totalCount} />
              <button className="relative overflow-hidden outline-none rounded-md cursor-pointer border-[1px] border-white bg-[#D12525] text-white font-bold w-[15rem] py-[1rem] pb-[1.3rem] px-[1rem] xl:flex hidden items-center justify-center gap-[.5rem] group h-16">
                <span className="absolute inset-0 bg-[#00813D] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md" />
                <span className="relative z-10 flex items-center gap-2 text-xs md:text-base group-hover:text-white">
                  اکنون سفارش دهید
                  <FaTruckFast size={22} className="text-white transition-all duration-500" />
                </span>
              </button>
              <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#ffff" />
            </div>
            <Navbar_desktop />
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
          </div>
        </div>
      </section>
    );
}
