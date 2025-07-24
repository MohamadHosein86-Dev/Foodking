import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface DropdownMenuProps {
  title: React.ReactNode;
  items: { label: string; href: string }[];
  className?: string;
}

export default function DropdownMenu({ title, items, className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative z-[100000] ${className || ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="flex items-center cursor-pointer gap-1 hover:text-[#00813D] transition ease-in-out duration-200 font-medium">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${open ? "rotate-180" : ""} transition-transform duration-500 mt-1.5 size-3`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-10 bg-white shadow-lg rounded-md w-56 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col text-right text-[#212121]">
              {items.map((item, idx) => (
                <Link
                  key={item.href + idx}
                  href={item.href}
                  className="text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-4 border-b-1 border-b-[#eaeaea] font-semibold px-4"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 