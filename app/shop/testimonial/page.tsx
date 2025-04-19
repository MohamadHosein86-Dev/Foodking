"use client";

import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";

import { FaChevronLeft } from "react-icons/fa";
import MoreAbout_testimonial from "@/components/related_testimonial/moreAbout_testimonial";
export default function Testimonial() {
  return (
    <div className="w-full bg-amber-50">
      <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-95">
        <div className=" space-y-5">
          <h1 className="font-semibold  text-6xl text-white"> گواهینامه</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold  text-xl text-green-500">
              {" "}
              صفحه اصلی
            </h1>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100">
              {" "}
              گواهینامه
            </h1>
          </div>
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div className="w-full flex-wrap space-y-4 flex  justify-center items-end">
        <div
          className=" flex flex-wrap gap-6 justify-center space-y-3 w-2/3
         min-h-96 mt-12"
        >
          <MoreAbout_testimonial
            role="بلاگر مواد غذایی"
            testimonialName="فرانک اچ. هیوستون"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/09.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="توسعه دهنده"
            testimonialName="جین کوپر"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/08.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="عاشق غذا"
            testimonialName="کنت میکس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/11.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نورین احمد"
            testimonialName="عاشق وردپرس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/10.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نورین احمد"
            testimonialName="عاشق وردپرس"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/13.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
          <MoreAbout_testimonial
            role="نگاه کن پسر"
            testimonialName="فرانت کار"
            imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/12.jpg"
            content="برای اطمینان از تسلط فعالانه، استراتژی های برد-برد 
            را
             به روی میز بیاورید. در پایان روز رو به جلو عادی است که از X عملیاتی تکامل یافته 
             است"
          />
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
    </div>
  );
}
