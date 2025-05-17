"use client";
import Container from "@/components/container/container";
import PanleUserPage from "@/components/panleUserPage/panleUserPage";
import BtnProfile from "@/components/ui/BtnProfile";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfileUser() {
  const name = "نام وارد نشده است";
  const email = "آدرس ایمیل وارد نشده است";
  const phone = "  شماره تلفن وارد نشده است";
  const pathname = usePathname();
  const ruoterLink = useRouter();
  const [showmodal, setshowmodal] = useState(false);

  return (
    <section dir="rtl" className=" pb-[5rem] mb-[3rem]  ">
      <Container flex={"flex gap-[2rem] "}>
        <div className="  rounded-[16px] flex flex-col gap-[.8rem] w-full md:w-[35rem] lg:w-[30rem]  xl:basis-[30%] ">
          <div className=" rounded-[15px] px-[2rem]  border-[1px] border-[#E7E7E8]  py-[1.5rem] flex gap-[1rem]  w-full ">
            <img className=" w-[3rem] " src="/e2946bbdae579b021ad972a47e0370a956703380.png" alt="" />
            <p onClick={() => {}} className=" flex-col justify-start cursor-pointer flex items-center gap-[4px] text-[#B19276] ">
              <span className=" text-sm text-[#3C3D45] font-semibold ml-auto ">{name}</span>
              <span className=" text-sm text-[#3C3D45] font-semibold ">{email}</span>
            </p>
          </div>

          <div className=" rounded-[15px]  pb-[1rem] px-[1rem] flex-col border-[1px] border-[#E7E7E8] gap-[.3rem] py-[1.5rem] flex  ">
            <BtnProfile onclick={() => ruoterLink.push(`/dashboard`)} icon={"user"} rout="/dashboard">
              حساب کاربری
            </BtnProfile>
            <BtnProfile onclick={() => ruoterLink.push(`/dashboard/order`)} icon={"order"} rout="/dashboard/orders">
              سفارشات
            </BtnProfile>
            <BtnProfile onclick={() => ruoterLink.push(`/dashboard/favarit`)} icon={"favarit"} rout="/dashboard/favarit">
              علاقه مندی ها
            </BtnProfile>
            <BtnProfile onclick={() => ruoterLink.push(`/dashboard/mylocation`)} icon={"mylocation"} rout="/dashboard/mylocation">
              ادرس های من
            </BtnProfile>
            <BtnProfile logout={true} onclick={() => ruoterLink.push(``)} icon={""} rout="">
              خروج
            </BtnProfile>

            <BtnProfile rout="/profile" icon="user" sm={true} onclick={() => setshowmodal((x) => !x)}>
              <div className={`p-2 rounded-full transition-all duration-200 ${pathname === "/5" ? "bg-[#b1b1b1]" : "group-hover:bg-[#b1b1b1]"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${pathname === "5" ? "text-[#f2f2f2]" : "text-[#3C3D45] group-hover:text-[#f2f2f2]"}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <p className="font-semibold text-[#3C3D45]">حساب کاربری</p>
            </BtnProfile>
          </div>
        </div>
        <PanleUserPage />
      </Container>
    </section>
  );
}
