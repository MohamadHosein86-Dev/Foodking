"use client";
import { useRef, useState } from "react";
type AccordionProps = {
  title: string;
  children: React.ReactNode;
};
export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div dir="rtl" className="w-full rounded-xl p-2">
      <button onClick={toggleAccordion} className="cursor-pointer w-full flex items-center justify-between p-4 text-right text-lg font-medium text-black duration-300 transition-all" aria-expanded={isOpen} type="button">
        <div className="text-xl">{typeof title === "string" ? title : String(title)}</div>
        <div className="text-3xl duration-300 transition-transform">{isOpen ? "-" : "+"}</div>
      </button>
      <div ref={contentRef} className={`px-4 overflow-hidden font-semibold duration-300 transition-all ${isOpen ? "max-h-full py-3" : "max-h-0 py-0"} text-black`}>
        {children}
      </div>
    </div>
  );
}
