import Image from "next/image";
import { FaArrowLeft, FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";

export default function BlogItem({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <>
      <div className="flex">
        <div className="flex gap-x-2 justify-center items-center mx-2">
          <span>
            <FaUser size="20px" style={{ color: "var(--primaryColor)" }} />
          </span>
          <span className="text-xl" style={{ color: "var(--textColor)" }}>
            foodking
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center mx-2">
          <span>
            <FaComment size="20px" style={{ color: "var(--primaryColor)" }} />
          </span>
          <span className="text-xl" style={{ color: "var(--textColor)" }}>
            1 نظرات
          </span>
        </div>
        <div className="flex gap-x-2 justify-center items-center mx-2">
          <span>
            <FaCalendarAlt size="20px" style={{ color: "var(--primaryColor)" }} />
          </span>
          <span className="text-xl" style={{ color: "var(--textColor)" }}>
            ۰۹ مرد ۱۴۰۳
          </span>
        </div>
      </div>
      <div className="my-10">
        <div className="my-10 relative w-full lg:h-[700px] h-[400px]">
          <Image className="rounded-2xl object-center cover" src={image} alt="تصویر غذا" fill />
        </div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <h4 className="text-lg my-10 font-bold" style={{ color: "var(--textColor)" }}>
          {desc}
        </h4>
        <a href="#" className="flex items-center w-52 font-bold hover:[color:var(--primaryColor)] transition-all">
          <span className="me-1 text-xl">مشاهده بیشتر </span>
          <span>
            <FaArrowLeft size="20px" />
          </span>
        </a>
      </div>
    </>
  );
}
