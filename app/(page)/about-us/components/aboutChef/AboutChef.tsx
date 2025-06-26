import MoreAboutUs from "@/app/(page)/chef/components/moreAboutChef/MoreAboutChef";
import React from "react";
import FoodProcessingAboutUs from "../foodProcessingAboutus/FoodProcessingAboutUs";

export default function AboutChef() {
  return (
    <div className=" py-1">
      <div className="w-full  flex-wrap space-y-4 flex mt-[7rem] justify-center items-end">
        <h1 className="font-semibold w-full text-center text-[1.2rem] md:text-xl text-green-700">در مورد غذای ما</h1>
        <h1 className="font-semibold w-full text-center text-[1.4rem] md:text-5xl text-slate-800">با سرآشپزهای متخصص ما ملاقات کنید</h1>
        <div className="flex   flex-wrap justify-center gap-12 w-2/3 min-h-96 mt-12">
          <MoreAboutUs role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAboutUs role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAboutUs role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        </div>
      </div>
      <FoodProcessingAboutUs />
    </div>
  );
}
