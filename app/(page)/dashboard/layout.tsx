"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingFoodking from "@/app/components/loader/Loading";
import PanleUserPage from "@/app/(page)/dashboard/components/panleUserPage";
import TitlePages from "@/app/components/titelPges/TitelPges";
import BtnProfile from "@/app/components/ui/btn/BtnDashboardUser";
import Container from "@/app/components/ui/container/container";

export default function ProfileUser() {
  const { data: session, status } = useSession();
  const name = session?.user?.name && session.user.name;
  const phone = session?.user?.phone && session.user.phone;

  const ruoterLink = useRouter();

  if (status == "loading") return <LoadingFoodking />;

  return (
    <section dir="rtl" className=" pb-20 mb-12  ">
      <TitlePages currentpage={"داشبورد"} nextPage="داشبورد" secondPage=" داشبورد" />
      <Container flex={"flex flex-col gap-8 "}>
        <div className="   rounded-2xl flex flex-col gap-3 w-full md:w-140 lg:w-120  xl:basis-3/10 ">
          <div className=" rounded-2xl px-8  border-1 border-[#E7E7E8]  py-6 flex gap-4  w-full ">
            <img className=" w-12 " src="/e2946bbdae579b021ad972a47e0370a956703380.png" alt="" />
            <p onClick={() => {}} className=" flex-col justify-center cursor-pointer flex  gap-1 text-[#B19276] ">
              <span className=" text-sm text-[#3C3D45] font-semibold ml-auto ">{name}</span>
              <span className=" text-sm text-[#3C3D45] font-semibold ">{phone}</span>
            </p>
          </div>

          <div className=" rounded-2xl  pb-4 px-4 flex-col border-1 border-[#E7E7E8] gap-1 py-6 flex  ">
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
          </div>
        </div>
        <PanleUserPage />
      </Container>
    </section>
  );
}
