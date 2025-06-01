"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function moreAboutChef({ role, chefName, imageUrl, chefLink, faceBookLink, twitterLink, youtubeLink, linkedinLink }: { role: string; chefName: string; imageUrl: string; chefLink: string; faceBookLink: string; twitterLink: string; youtubeLink: string; linkedinLink: string }) {
  const [onAction, setonAction] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} onMouseEnter={() => setonAction(true)} onMouseLeave={() => setonAction(false)} className=" w-[370px] flex flex-wrap  h-[500px]  ">
      <div className="h-[400px] w-full   relative">
        <div
          className={`${onAction ? "rotate-3" : "rotate-0"} rounded-xl absolute top-0 left-0 w-[280px] sm:w-[345px] h-96 
       border-2 border-dotted border-green-500 transition-all ease-in-out duration-500`}
        ></div>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={`bg-[url(${imageUrl})] bg-center absolute bottom-0 
         right-0 rounded-xl  w-[260px] sm:w-[345px] h-96 `}
        ></div>

        <div
          className={`${onAction ? "opacity-100" : "opacity-0"}  transition-all ease-in-out duration-500 flex justify-center items-center 
          bg-[url(/socialNetworkLists.png)]
         absolute 
        w-[50px] scale-x-150 
      -right-4 top-24 h-52`}
        >
          <motion.div
            className=" flex flex-wrap w-6 ml-3 justify-center items-center mt-3
         text-white  space-y-5"
          >
            <Link href={faceBookLink}>
              <FaFacebookF className="w-full" />
            </Link>
            <Link href={twitterLink}>
              <FaTwitter className="w-full" />
            </Link>
            <Link href={youtubeLink}>
              <FaYoutube className="w-full" />
            </Link>

            <Link href={linkedinLink}>
              <FaLinkedin className="w-full" />
            </Link>
          </motion.div>
        </div>
      </div>

      <h1 className="font-semibold w-full text-center text-xl text-green-700">{role}</h1>
      <Link href={chefLink} className="font-semibold w-full text-center text-2xl text-slate-950">
        {chefName}
      </Link>
    </motion.div>
  );
}
