"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Modal from "../modal/modal/Modal";
import ModalLoginUser from "../modal/modalLoginUser/ModalLoginUser";
import Link from "next/link";
import MiniLoader from "../loader/MiniLoader";

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
      <div className="flex gap-8 mt-4 ">
        <FaUser onClick={() => setOpen(true)} size={22} className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer `} />
        <Link href={"/cart"} className=" hidden xl:flex items-center gap-6 relative  ">
          <FaShoppingBasket className={`  ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={30} />
          <div className=" px-3 py-2 ">
            <span>{totalCount}</span>
          </div>
        </Link>
        <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
          <ModalLoginUser setOpen={setOpen} />
        </Modal>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className=" flex gap-8 mt-4 ">
        <Link href={"/cart"} className=" hidden xl:flex items-center gap-8 relative  ">
          <FaUser onClick={() => router.push("/dashboard")} size={26} className={` mb-2 ${home ? " text-[#FFB936] " : " text-[#D12525] "}  cursor-pointer `} />
          <FaShoppingBasket className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={30} />
          <div className={`  px-2 rounded-md font-semibold  absolute right-[2px] bottom-[25.5px] text-white ${home ? "bg-[#FFB936]" : " bg-[#D12525]"} `}>
            <span>{totalCount}</span>
          </div>
        </Link>
      </div>
    );
  }
}
