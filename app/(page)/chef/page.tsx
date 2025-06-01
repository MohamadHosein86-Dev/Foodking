"use client";
import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
import { FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Chef() {
  return (
    <div className="w-full bg-amber-50">
      <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-90">
        <div className=" space-y-5">
          <h1 className="font-semibold  text-6xl text-white"> سایر اعضا</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold  text-xl text-green-500"> صفحه اصلی</h1>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />
            <h1 className="font-semibold  text-xl text-green-500"> فروشگاه</h1>
            <FaChevronLeft className="mt-2 font-semibold  text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100"> آشپز</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex-wrap space-y-4 flex justify-center items-end">
        <h1 className="font-semibold w-full text-center text-xl text-green-700">درباره ما مواد غذایی</h1>
        <h1 className="font-semibold  w-full text-center text-5xl text-slate-800">دیدار با کارشناس و سرآشپزها</h1>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className=" flex flex-wrap justify-center space-x-12 space-y-3 w-2/3 min-h-96 mt-12">
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/06-2.jpg" chefName="لزلی مایکل" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/03-2.jpg" chefName="متئو لوی" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/02-2.jpg" chefName="دنیل جک" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        </motion.div>
      </div>
    </div>
  );
}
