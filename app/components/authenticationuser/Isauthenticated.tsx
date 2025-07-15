"use celient";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Modal from "../modal/modal/Modal";
import ModalLoginUser from "../modal/modalLoginUser/ModalLoginUser";
import Link from "next/link";
import MiniLoader from "../loader/MiniLoader";

interface PropsType {
  totalCount: number;
}
export default function Isauthenticated({ totalCount }: PropsType) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("accessToken", session.accessToken);
    } else {
      console.log("Access Token یافت نشد یا session نامعتبر است. پاک کردن از localStorage...");
    }
  }, [session]);

  if (status === "loading") {
    return <MiniLoader />;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <FaUser onClick={() => setOpen(true)} size={22} color="#FFB936" className=" cursor-pointer " />
        <Modal center={true} isOpen={open} onClose={() => setOpen(false)}>
          <ModalLoginUser setOpen={setOpen} />
        </Modal>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className=" flex gap-8 ">
        <FaUser onClick={() => router.push("/dashboard")} size={22} color="#D12525" className=" cursor-pointer " />
        <Link href={"/cart"} className=" hidden xl:flex items-center gap-[1.5rem] relative  ">
          <div className=" bg-[#212121] cursor-pointer top-[-8px] left-[-.5rem] absolute  w-[1.2rem] text-[.6rem] pb-[0] pr-[1px] rounded-[.8rem] h-[1.2rem] flex justify-center items-center text-[#fcfbfe] ">
            <span className=" mb-[2px] ">{totalCount}</span>
          </div>
          <FaShoppingBasket className="  text-[#D12525] cursor-pointer " size={24} />
        </Link>
      </div>
    );
  }
}
