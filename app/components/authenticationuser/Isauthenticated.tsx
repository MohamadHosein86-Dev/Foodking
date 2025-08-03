"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Modal from "../modal/modal/Modal";
import ModalLoginUser from "../modal/modalLoginUser/ModalLoginUser";
import Link from "next/link";
import MiniLoader from "../loader/MiniLoader";
import MobileMenu from "../layout/header/components/MobileMenu";

interface PropsType {
  totalCount: number;
  home?: boolean;
}
export default function Isauthenticated({ totalCount, home }: PropsType) {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  if (status === "loading") {
    return <MiniLoader />;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex gap-8 mt-0 xl:mt-4 ">
        <MobileMenu />
        <div className=" hidden xl:flex items-center gap-6 relative  ">
          <FaUser onClick={() => setOpen(true)} size={24} className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer `} />
          <Link href={"/cart"}>
            <FaShoppingBasket className={`  ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={28} />
            <div className={` pb-[1px] px-2 rounded-md font-semibold  absolute right-[2px] bottom-[24px] text-white ${home ? "bg-[#FFB936]" : " bg-[#D12525]"} `}>
              <span>{totalCount}</span>
            </div>
          </Link>
        </div>
        <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
          <ModalLoginUser setOpen={setOpen} />
        </Modal>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className=" flex gap-8 mt-0 xl:mt-4 ">
        <MobileMenu />
        <div className=" hidden xl:flex items-center gap-8 relative  ">
          <FaUser onClick={() => router.push("/dashboard")} size={24} className={` mb-1 ${home ? " text-[#FFB936] " : " text-[#D12525] "}  cursor-pointer `} />
          <Link href={"/cart"}>
            <FaShoppingBasket className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={28} />
            <div className={` pb-[1px]  px-2 rounded-md font-semibold  absolute right-[2px] bottom-[24px] text-white ${home ? "bg-[#FFB936]" : " bg-[#D12525]"} `}>
              <span>{totalCount}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
