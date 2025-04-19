"use client";
import { motion } from "framer-motion";
import { SiComma } from "react-icons/si";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export default function moreAboutTestimonial({
  role,
  testimonialName,
  imageUrl,
  content,
}: {
  role: string;
  testimonialName: string;
  imageUrl: string;
  content: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-[400px] flex p-4  flex-wrap  bg-[#fff] shadow rounded-2xl h-[340px]  "
    >
      <section className=" w-full flex h-24 ">
        <div className="w-1/2 h-12 flex items-start justify-start ">
          <div className=" flex -scale-100">
            <SiComma className="text-red-700 text-3xl " />
            <SiComma className="text-red-700 text-3xl " />
          </div>
        </div>
        <div className="w-1/2 h-24 flex justify-center ">
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt="#"
            className="rounded-full"
          />
        </div>
      </section>
      <section className="text-right text-slate-600 font-semibold text-base">
        {content}
      </section>
      <section className="text-right w-full text-black font-semibold text-xl">
        {testimonialName}
      </section>
      <section className="text-right w-full text-slate-600 font-semibold text-base">
        {role}
      </section>
    </motion.div>
  );
}
