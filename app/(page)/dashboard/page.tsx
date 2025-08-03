"use client";
import { useSession } from "next-auth/react";

export default function Acount() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>در حال دریافت اطلاعات کاربر...</div>;
  }
  if (status === "unauthenticated") {
    return <div>شما وارد نشده‌اید.</div>;
  }

  const name = session?.user?.name;
  const email = session?.user?.email;
  const phone = session?.user?.phone;
  return (
    <div className="  gap-8 rounded-2xl border-1 border-[#E7E7E8] basis-3xl  xl:basis-7/10 ">
      <div className=" px-8  border-b-1 border-b-[#E7E7E8]  py-6 flex justify-between  w-full ">
        <h2 className="  text-[#23242E] font-bold flex gap-1  ">
          حساب من
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </span>
        </h2>
      </div>
      <div className=" mt-4 p-8 flex gap-4 items-center ">
        <p className=" font-semibold  ">نام : </p>
        <p className=" ">{name}</p>
      </div>
      <div className=" w-full p-8 flex gap-4 items-center ">
        <p className=" font-semibold  ">ایمیل : </p>
        <p className=" ">{email}</p>
      </div>
      <div className=" p-8 flex gap-4 items-center ">
        <p className=" font-semibold  ">تلفن : </p>
        <p className=" ">{phone}</p>
      </div>
    </div>
  );
}
