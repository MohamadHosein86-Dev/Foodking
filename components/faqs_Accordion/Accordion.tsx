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
            <button
                onClick={toggleAccordion}
                className="cursor-pointer w-full flex items-center justify-between p-4 text-right text-lg font-medium text-black transition"
                aria-expanded={isOpen}
                type="button"
            >
                <div className="text-xl">{typeof title === "string" ? title : String(title)}</div>
                <div className="text-3xl transition-transform duration-300">
                    {isOpen ? "+" : "-"}
                </div>
            </button>
            <div
                ref={contentRef}
                className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-full py-3" : "max-h-0 py-0"
                    } text-black`}
            >
                {children}
            </div>
        </div>
    );
}
