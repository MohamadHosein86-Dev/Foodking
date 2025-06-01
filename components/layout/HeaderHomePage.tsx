"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import Modal from "../modal/Modal";
import ModalLoginUser from "../authenticationuser/ModalLoginUser";
import HeaderBottom from "./HeaderBottom";
import Navbar_desktop from "../navbar_desktop/navbar_desktop";
import AnimationHeader from "./AnimationHeader";
import Isauthenticated from "../authenticationuser/Isauthenticated";

export default function HeaderHomePage({ curentUrl }: { curentUrl: string }) {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

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
        <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[1rem] items-center flex justify-between px-[1.5rem] `}>
          <div className=" flex items-center gap-[2rem] xl:gap-[3rem] ">
            <Isauthenticated>
              <FaUser onClick={() => setOpen(true)} size={22} color="#ffff" className=" cursor-pointer " />
              <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
                <ModalLoginUser setOpen={setOpen} />
              </Modal>
            </Isauthenticated>

            <button
              className="relative overflow-hidden outline-none rounded-md cursor-pointer border-[1px] border-white bg-[#D12525] text-white font-bold 
  w-[15rem] py-[1rem] pb-[1.3rem] px-[1rem] xl:flex hidden items-center justify-center gap-[.5rem] group h-16"
            >
              {/* لایه انیمیشنی با ترنزیشن scale از وسط */}
              <span className="absolute inset-0 bg-[#00813D] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md" />

              {/* محتوای دکمه بالای لایه رنگ */}
              <span className="relative z-10 flex items-center gap-2 text-xs md:text-base group-hover:text-white">
                اکنون سفارش دهید
                <FaTruckFast size={22} className="text-white transition-all duration-500" />
              </span>
            </button>

            <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#ffff" />
            <div className=" flex items-center gap-[1.5rem] relative  ">
              <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[0] pr-[1px] rounded-[.5rem] h-[1rem] xl:flex hidden  justify-center items-center text-[#fcfbfe] ">0</div>
              <FaShoppingBasket className=" xl:flex hidden  cursor-pointer " size={20} />
              <FaSearch className=" cursor-pointer " size={18} />
            </div>
          </div>
          <Navbar_desktop open={open} />
          <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
        </div>
      </div>
      <AnimationHeader showSticky={showSticky} />
      <HeaderBottom open={open} showSticky={showSticky} />
    </section>
  );
}
