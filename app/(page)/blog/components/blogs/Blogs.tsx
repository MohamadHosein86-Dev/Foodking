import { BlogData } from "@/app/data/Data";
import React from "react";
import BlogItem from "../blog/blogItem/BlogItem";

export default function Blogs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-[82rem] px-[1rem] sm:px-[3rem] xl:px-[1.6rem] lg-px-0 h-full   mt-[100px] ">
      <div className="lg:col-span-8  space-y-4">
        {BlogData.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
