"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HumbrgrMenu from "./HumbrgrMenu";
import ModalHeader from "@/app/components/modal/modalHeader/ModalHeader";

export default function MobileMenu() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setOpenSideMenu(false);
  }, [router]);

  return (
    <nav className=" sm:hidden max-sm:block z-100000  ">
      <div className={`bg-white ${openSideMenu ? "w-85" : "w-0"}  transition-all duration-300 h-[428%] absolute left-0 top-0 overflow-x-hidden `}>
        <ModalHeader />
      </div>
      <button onClick={() => setOpenSideMenu(!openSideMenu)} className="w-8 h-8 z-100000 relative justify-center items-center overflow-hidden max-sm:flex sm2:hidden">
        <HumbrgrMenu svgRef={svgRef} openSideMenu={openSideMenu} />
      </button>
    </nav>
  );
}
