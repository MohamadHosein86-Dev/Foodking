"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { useGetCart } from "@/app/hooks/useCart";
import { AnimatePresence, motion } from "framer-motion";
import { blogMenu, pagesMenu, shopMenu } from "@/app/data/Data";
import DropdownMenu from "./DropdownMenu";
import OrderButton from "../OrderButton";
import UserCartInfo from "./UserCartInfo";
import Link from "next/link";

export default function AnimationHeader() {
  const Pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);
  const { totalCount = 0 } = useGetCart();

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY >= 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-full bg-white shadow-xl z-50 px-4 py-3">
          <div className="bg-[#ffff]">
            <div className={`z-50 ${Pathname == "/" ? "border-b border-b-neutral-200" : "border-none"}`}>
              <div className="text-[#fcfbfe] mx-auto max-w-7xl py-1.5 items-center flex justify-between sm:px-6">
                <div className="flex items-center gap-20 md:gap-6">
                  <UserCartInfo totalCount={totalCount} />
                  <OrderButton
                    icon={<FaTruckFast size={22} className="text-white transition-all duration-500" />}
                    text="اکنون سفارش دهید"
                    className="hidden xl:flex"
                  />
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
                  <Link className="cursor-pointer gap-1 font-medium flex items-center flex-row-reverse" href="/">
                    <span className="hover:text-[#00813D] transition ease-in delay-150 font-semibold">صفحه اصلی</span>
                  </Link>
                </div>
                <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 