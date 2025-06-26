import TitelPages from "@/app/components/titelPges/TitelPges";
import { FaChevronLeft } from "react-icons/fa";
import Blogs from "./components/blogs/Blogs";
import BlogBox from "./components/blog/blogBox/BlogBox";

export default function Blog() {
  return (
    <div dir="rtl" className=" bg-[#F4F1EA] ">
      <TitelPages>
        <div className="flex justify-center flex-col gap-[2rem] items-center h-full">
          <h2 className="text-white text-7xl font-bold">صفحه وبلاگ</h2>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="  text-white font-semibold"> درباره ما </span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-green-500 font-semibold"> صفحه اصلی </span>
          </div>
        </div>
      </TitelPages>
      <Blogs />
      <BlogBox />
    </div>
  );
}
