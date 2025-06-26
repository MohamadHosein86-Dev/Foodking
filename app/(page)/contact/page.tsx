import React from "react";
import Link from "next/link";

import TitelPages from "@/app/components/titelPges/TitelPges";
import ContactItem from "./components/contactItems/ContactItems";
import { FaChevronLeft } from "react-icons/fa";

function Contact() {
  return (
    <section className="  bg-[#f4f1ea] ">
      <TitelPages>
        <div className=" space-y-5">
          <h1 className="w-full font-semibold  text-center text-2xl text-white  sm:text-3xl   md:text-4xl lg:text-6xl lg:text-white "> تماس با ما</h1>
          <div className="flex justify-center space-x-1 items-center h-8 flex-row-reverse">
            <Link href={"/"}>
              <h1 className="font-semibold   text-xl text-green-500"> صفحه اصلی</h1>
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100"> تماس با ما </h1>
          </div>
        </div>
      </TitelPages>
      <ContactItem />
    </section>
  );
}

export default Contact;
