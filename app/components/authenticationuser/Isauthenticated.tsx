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
      <div className="flex gap-8">
        <FaUser onClick={() => setOpen(true)} size={22} className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer `} />
        <Link href={"/cart"} className=" hidden xl:flex items-center gap-6 relative  ">
          <FaShoppingBasket className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={24} />
        </Link>
        <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
          <ModalLoginUser setOpen={setOpen} />
        </Modal>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className=" flex gap-8 ">
        <FaUser onClick={() => router.push("/dashboard")} size={22} className={` text-[#FFB936]  cursor-pointer `} />
        <Link href={"/cart"} className=" hidden xl:flex items-center gap-6 relative  ">
          <FaShoppingBasket className={` ${home ? " text-[#ffff] " : " text-[#D12525] "}  cursor-pointer  `} size={24} />
        </Link>
      </div>
    );
  }
}
