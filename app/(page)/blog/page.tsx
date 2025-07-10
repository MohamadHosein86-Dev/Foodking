import Blogs from "./components/blogs/Blogs";
import BlogBox from "./components/blog/blogBox/BlogBox";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Blog() {
  return (
    <div dir="rtl" className=" bg-[#F4F1EA] ">
      <TitlePages currentpage="صفحه وبلاگ" nextPage="درباره ما " secondPage="صفحه اصلی " />
      <Blogs />
      <BlogBox />
    </div>
  );
}
