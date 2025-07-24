"use client";
import { motion } from "framer-motion";
import NavLinkList from "./components/NavLinkList";
import Image from "next/image";
import AddressSection from "./components/AddressSection";
import AboutSection from "./components/AboutSection";
import AppDownloadSection from "./components/AppDownloadSection";
import { accountLinks, quickLinks } from "@/app/data/Data";

function Footer() {
  return (
    <footer>
      <section className="bg-[#f4f1ea]">
        <div dir="rtl" className="mx-auto relative grid grid-cols-1 sm:flex-wrap gap-y-10 gap-x-16 lg:gap-x-0 lg:flex-nowrap max-w-7xl py-20 sm:py-40 text-right items-center sm:flex justify-between px-4 sm:px-12 xl:px-6">
          <motion.img
            initial={{ x: -140 }}
            whileInView={{ x: -38 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden xl:block opacity-30 absolute left-0 top-56"
            src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/fry-shape-2.png"
            alt=""
          />
          <AboutSection />
          <div className="xl:mb-16">
            <h2 className="mb-6 font-semibold text-lg">لینک های سریع</h2>
            <NavLinkList links={quickLinks} />
          </div>
          <div className="xl:mb-16">
            <h2 className="mb-8 font-semibold text-lg">حساب من</h2>
            <NavLinkList links={accountLinks} />
          </div>
          <AddressSection />
          <AppDownloadSection />
          <motion.img initial={{ y: 200 }} whileInView={{ y: -140 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.2 }} className="hidden xl:block opacity-30 absolute -right-18 top-80" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-shape-3.png" alt="" />
        </div>
      </section>
      <section className="bg-[#00813d]">
        <div className="mx-auto max-w-7xl py-11 gap-8 text-right items-center flex-wrap-reverse flex justify-center lg:justify-between px-4 ">
          <Image height={250} width={250} src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/card-1.png" alt="" />
          <h2 className="text-[#ffff] font-medium text-lg ">
            . کپی رایت <span className="text-[#ffb936]">2024</span> فودکینگ . تمامی حقوق محفوظ است ©
          </h2>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
