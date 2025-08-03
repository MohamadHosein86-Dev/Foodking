"use client";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";
import { usePathname } from "next/navigation";
import UserCartInfo from "./UserCartInfo";
import OrderButton from "../OrderButton";
import Navbar_desktop from "./navbar_desktop";

export default function HeaderHomePage() {
  const Pathname = usePathname();
  const { totalCount = 0 } = useGetCart();
  const heroRef = useRef<HTMLDivElement>(null);

  if (Pathname == "/")
    return (
      <section className="bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')] bg-cover bg-center">
        <div ref={heroRef} className={`py-2 ${Pathname == "/" ? "border-b-1 border-[#ffffff2b] " : "border-none"}`}>
          <div className={`text-[#fcfbfe] mx-auto max-w-7xl py-4 items-center flex justify-between px-6`}>
            <div className="flex items-center gap-8 xl:gap-12">
              <UserCartInfo home totalCount={totalCount} />
              <OrderButton icon={<FaTruckFast size={22} className="text-white transition-all duration-500" />} text="اکنون سفارش دهید" className="xl:flex hidden" />
              <FaBars className="block xl:hidden cursor-pointer" size={30} color="#ffff" />
            </div>
            <Navbar_desktop />
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
          </div>
        </div>
      </section>
    );
  return null;
}
