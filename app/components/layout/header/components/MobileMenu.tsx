"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HumbrgrMenu from "./HumbrgrMenu";
import ModalHeader from "@/app/components/modal/modalHeader/ModalHeader";
import Modal from "@/app/components/modal/modal/Modal";

export default function MobileMenu() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setOpenSideMenu(false);
  }, [router]);

  return (
    <nav className=" sm:hidden max-sm:block z-100000  ">
      <button onClick={() => setOpenSideMenu(!openSideMenu)} className="w-8 mb-2 h-8 z-100000 relative justify-center items-center overflow-hidden max-sm:flex sm2:hidden">
        <HumbrgrMenu svgRef={svgRef} openSideMenu={openSideMenu} />
      </button>
      <Modal center={true} onClose={() => setOpenSideMenu(false)} isOpen={openSideMenu}>
        <div className={`bg-white ${openSideMenu ? "w-85" : "w-0"}  transition-all duration-300 h-[428%] absolute left-0 top-0 overflow-x-hidden `}>
          <ModalHeader />
        </div>
      </Modal>
    </nav>
  );
}
