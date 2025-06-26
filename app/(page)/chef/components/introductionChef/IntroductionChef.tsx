"use client";
import MoreAboutChef from "@/app/(page)/about-us/components/moreAboutUs/MoreAboutUs";
import { motion } from "framer-motion";
export default function IntroductionChef() {
  return (
    <div className="w-full flex-wrap space-y-4 flex justify-center items-end">
      <h1 className="font-semibold w-full text-center text-xl text-green-700">درباره ما مواد غذایی</h1>
      <h1 className="font-semibold  w-full text-center text-5xl text-slate-800">دیدار با کارشناس و سرآشپزها</h1>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className=" flex flex-wrap justify-center space-x-12 space-y-3 w-2/3 min-h-96 mt-12">
        <MoreAboutChef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        <MoreAboutChef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/06-2.jpg" chefName="لزلی مایکل" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        <MoreAboutChef role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        <MoreAboutChef role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        <MoreAboutChef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/03-2.jpg" chefName="متئو لوی" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        <MoreAboutChef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/02-2.jpg" chefName="دنیل جک" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
      </motion.div>
    </div>
  );
}
