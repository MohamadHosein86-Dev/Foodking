"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import Modal from "../modal/Modal";
import ModalLoginUser from "../authenticationuser/ModalLoginUser";
import HeaderBottom from "./HeaderBottom";
import Navbar_desktop from "../navbar_desktop/navbar_desktop";
import AnimationHeader from "./AnimationHeader";
import { useSession } from "next-auth/react";

export default function HeaderHomePage({ curentUrl }: { curentUrl: string }) {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const { data: session, status } = useSession();

  console.log(status + "  Dc");

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
            <FaUser onClick={() => setOpen(true)} size={22} color="#ffff" className=" cursor-pointer " />
            <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
              <ModalLoginUser setOpen={setOpen} />
            </Modal>
            <button className=" outline-none rounded-md  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] xl:flex hidden  items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
              اکنون سفارش دهید
              <span>
                <FaTruckFast size={22} />{" "}
              </span>{" "}
            </button>
            <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#ffff" />
            <div className=" flex items-center gap-[1.5rem] relative  ">
              <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[.1rem] rounded-[.5rem] h-[1rem] xl:flex hidden  justify-center items-center text-[#fcfbfe] ">0</div>
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
