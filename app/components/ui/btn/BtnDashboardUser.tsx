"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface PropsType {
  children: React.ReactNode;
  rout: string;
  icon: string;
  onclick: () => void;
  sm?: boolean;
  logout?: boolean;
}
export default function BtnProfile({ children, rout, icon, sm, onclick, logout }: PropsType) {
  const pathname = usePathname();
  const icons =
    (icon === "user" && (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 text-[#f2f2f2] ${pathname === rout ? "" : " group-hover:text-[#f2f2f2]"}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    )) ||
    (icon === "order" && (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` text-[#f2f2f2]  size-6 ${pathname === rout ? "" : " group-hover:text-[#f2f2f2]"}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    )) ||
    (icon === "favarit" && (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` text-[#f2f2f2]  size-6 ${pathname === rout ? "" : " group-hover:text-[#f2f2f2]"}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    )) ||
    (icon === "mylocation" && (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` text-[#f2f2f2]  size-6 ${pathname === rout ? "" : " group-hover:text-[#f2f2f2]"}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ));

  if (logout) {
    return (
      <button onClick={onclick} className={!sm ? ` hover:bg-[#f2f2f2] group transition ease-in delay-100 cursor-pointer rounded-lg px-3 py-5 items-center flex  gap-2 w-full   ` : `group transition ease-in delay-100 cursor-pointer rounded-lg px-3 py-5 items-center border-b border-b-gray-200 sm:border-none flex gap-2 w-full ${pathname === "/profile" ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"}`}>
        <div className={`p-2 rounded-full transition-all duration-200    text-[#ffff] group group-hover:bg-[#FF6666] `}>
          <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`   size-6 group-hover:text-[#ffff] text-[#FF6666]  `}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
        </div>
        <p className="font-semibold text-[#FF6666]  "> خروج</p>
      </button>
    );
  }
  return (
    <button onClick={onclick} className={!sm ? `  group transition ease-in delay-100 cursor-pointer rounded-lg px-3 py-5 items-center flex  gap-2 w-full  ${pathname === rout ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"} ` : `group transition ease-in delay-100 cursor-pointer rounded-lg px-3 py-5 items-center border-b border-b-gray-200 sm:border-none flex md:hidden gap-2 w-full ${pathname === "/profile" ? "bg-[#f2f2f2]" : "hover:bg-[#f2f2f2]"}`}>
      <div className={`p-2 rounded-full transition-all duration-200 bg-[#b1b1b1] `}>{icons}</div>
      <p className="font-semibold text-[#3C3D45]"> {children} </p>
    </button>
  );
}
