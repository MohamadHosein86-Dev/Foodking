"use client";
import { useRef, useState } from "react";
type AccordionProps = {
  title: string;
  children: React.ReactNode;
  index?: number;
};
export default function Accordion({ title, children, index }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className="w-[95%] py-4"
      style={
        index !== 3
          ? {
              borderBottom: "1px solid",
              borderImage: "linear-gradient(270deg, rgba(255, 255, 255, 0.02) 0%, #c0bfbf 20.25%) 1"
            }
          : {}
      }
    >
      <button onClick={toggleAccordion} className="cursor-pointer w-full flex items-center justify-between pb-3 text-right text-lg font-medium text-white  duration-300 transition-all" aria-expanded={isOpen} type="button">
        <div className="text-md ">{typeof title === "string" ? title : String(title)}</div>
        <div className="text-3xl duration-300 transition-transform">{isOpen ? "-" : "+"}</div>
      </button>
      <div ref={contentRef} className={`py-0 overflow-hidden  leading-6.5 text-sm duration-300 transition-all ${isOpen ? "max-h-full py-3" : "max-h-0 py-0"} text-[#FFFFFFC2] `}>
        {children}
      </div>
    </div>
  );
}
