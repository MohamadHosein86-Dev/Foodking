"use client";
import { useRef, useState, useEffect } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  index: number;
};

export default function Accordion({ title, children, index }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={
        index !== 3
          ? {
              borderBottom: "1px solid",
              borderImage: "linear-gradient(270deg, rgba(255, 255, 255, 0.02) 0%, #c0bfbf 20.25%) 1"
            }
          : {}
      }
      className="w-[90%] py-4"
    >
      <button onClick={toggleAccordion} className="cursor-pointer w-full flex items-center justify-between pb-3 text-right text-lg font-medium text-white duration-300 transition-all" aria-expanded={isOpen} type="button">
        <div className="text-md">{typeof title === "string" ? title : String(title)}</div>
        <div className={`text-3xl duration-300 transition-transform ${isOpen ? "rotate-180" : ""}`}>{isOpen ? "-" : "+"}</div>
      </button>
      <div ref={contentRef} style={{ height: `${contentHeight}px` }} className="overflow-hidden transition-all duration-300 ease-in-out">
        <div className="py-3 text-[#FFFFFFC2] leading-6.5 text-sm">{children}</div>
      </div>
    </div>
  );
}
