"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";
import { blogMenu, pagesMenu, shopMenu } from "@/app/data/Data";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import OrderButton from "../OrderButton";
import UserCartInfo from "./UserCartInfo";

export default function HeaderSecond() {
  const Pathname = usePathname();
  const heroRef = useRef<HTMLDivElement>(null);
  const { totalCount = 0 } = useGetCart();

  if (Pathname !== "/")
    return (
      <div ref={heroRef} className="hidden xl:flex ">
        <div className="w-full relative bg-[#F4F1EA]">
          <div className="top-0 w-1/3 h-full absolute bg-[#212121]" />
          <div className="mx-auto flex items-center justify-between max-w-7xl px-6 py-4 ">
            <div className="flex items-center gap-6 xl:gap-7">
              <UserCartInfo totalCount={totalCount} />
              <OrderButton icon={<FaTruckFast size={22} />} text="اکنون سفارش دهید" className="hidden md:flex" />
            </div>
            <div className="hidden xl:flex text-[#212121] gap-8 relative">
              <Link className="hover:text-[#00813D] cursor-pointer transition ease-in delay-150 font-medium" href="/contact">
                تماس باما
              </Link>
              <DropdownMenu title="صفحات" items={pagesMenu} />
              <DropdownMenu title="بلاگ" items={blogMenu} />
              <DropdownMenu title="فروشگاه" items={shopMenu} />
              <Link className="hover:text-[#00813D] cursor-pointer transition ease-in delay-150 font-medium" href="/about-us">
                درباره ما
              </Link>
              <Link className="cursor-pointer gap-1 font-semibold flex items-center flex-row-reverse" href="/">
                <span className="hover:text-[#00813D] transition ease-in delay-150 font-medium">صفحه اصلی</span>
              </Link>
            </div>
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
          </div>
        </div>
      </div>
    );
  return null;
}
