"use client";

import LoadingFoodking from "@/app/components/loader/Loading";
import PanleUserPage from "@/app/components/panleUserPage/panleUserPage";
import TitlePages from "@/app/components/titelPges/TitelPges";
import BtnProfile from "@/app/components/ui/btn/BtnProfile";
import Container from "@/app/components/ui/container/container";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfileUser() {
  const { data: session, status } = useSession();
  const name = session?.user?.name && session.user.name;
  const phone = session?.user?.phone && session.user.phone;
  console.log("kobs = ", phone, name);

  const pathname = usePathname();
  const ruoterLink = useRouter();
  const [, setshowmodal] = useState(false);

  if (status == "loading") return <LoadingFoodking />;

  return (
    <section dir="rtl" className=" pb-[5rem] mb-[3rem]  ">
      <TitlePages currentpage={"داشبورد"} nextPage="داشبورد" secondPage=" داشبورد" />
      <Container flex={"flex gap-[2rem] "}>
        <div className="  rounded-[16px] flex flex-col gap-[.8rem] w-full md:w-[35rem] lg:w-[30rem]  xl:basis-[30%] ">
          <div className=" rounded-[15px] px-[2rem]  border-[1px] border-[#E7E7E8]  py-[1.5rem] flex gap-[1rem]  w-full ">
            <img className=" w-[3rem] " src="/e2946bbdae579b021ad972a47e0370a956703380.png" alt="" />
            <p onClick={() => {}} className=" flex-col justify-center cursor-pointer flex  gap-[4px] text-[#B19276] ">
              <span className=" text-sm text-[#3C3D45] font-semibold ml-auto ">{name}</span>
              <span className=" text-sm text-[#3C3D45] font-semibold ">{phone}</span>
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
            <BtnProfile
              logout={true}
              onclick={() => {
                signOut();
              }}
              icon={""}
              rout=""
            >
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
