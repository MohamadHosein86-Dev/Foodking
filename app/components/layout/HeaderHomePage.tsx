"use client";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";
import { usePathname } from "next/navigation";
import Isauthenticated from "../authenticationuser/Isauthenticated";
import Navbar_desktop from "./navbar_desktop/navbar_desktop";
import ReusableOrderButton from "../ui/btn/ReusableOrderButton";

export default function HeaderHomePage() {
  const Pathname = usePathname();
  const { totalCount = 0 } = useGetCart();

  const heroRef = useRef<HTMLDivElement>(null);

  if (Pathname == "/")
    return (
      <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
        <div ref={heroRef} className={` py-2 ${Pathname == "/" ? "border-b border-b-neutral-200 " : " border-none "} `}>
          <div className={`  text-[#fcfbfe] mx-auto max-w-7xl py-4 items-center flex justify-between px-6 `}>
            <div className=" flex items-center gap-8 xl:gap-12 ">
              <Isauthenticated home={true} totalCount={totalCount} />
              <ReusableOrderButton
                icon={<FaTruckFast size={22} className="text-white transition-all duration-500" />}
                className="relative overflow-hidden outline-none rounded-md cursor-pointer border border-white bg-[#D12525] text-white font-bold w-60 py-4 pb-5 px-4 xl:flex hidden items-center justify-center gap-2 group h-16"
                hoverBgColor="group-hover:bg-[#00813D]"
                textColor="text-white"
                hoverTextColor="group-hover:text-white"
                rounded={true}
                fullWidth={false}
                text="اکنون سفارش دهید"
              />
              <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#ffff" />
            </div>
            <Navbar_desktop />
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
          </div>
        </div>
      </section>
    );
}
