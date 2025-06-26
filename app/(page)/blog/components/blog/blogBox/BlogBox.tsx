import { BlogBoxData } from "@/app/data/Data";
import BlogBoxItem from "./blogBoxItem/BlogBoxItem";

export default function BlogBox() {
  return (
    <div className="lg:col-span-4 px-3">
      <div className="flex mb-[100px] justify-end border py-[35px] px-3 border-gray-200">
        <input type="text" className="border border-gray-300 p-4 px-5 w-full focus:outline-none focus:border-gray-300 " style={{ borderStartStartRadius: "var(--wc-form-border-radius)" }} />
        <button className="px-5 py-3" style={{ backgroundColor: "var(--wc-orange)" }}>
          جستجو
        </button>
      </div>
      {BlogBoxData.map((res) => (
        <BlogBoxItem key={res.id} data={res} />
      ))}
    </div>
  );
}
