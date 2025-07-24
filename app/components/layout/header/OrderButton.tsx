import React from "react";

interface OrderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

export default function OrderButton({ icon, text, className = "", ...props }: OrderButtonProps) {
  return (
    <button
      className={`relative overflow-hidden outline-none rounded-md cursor-pointer border border-white bg-[#D12525] text-white font-bold w-60 py-4 pb-5 px-4 flex items-center justify-center gap-2 group h-16 ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-[#00813D] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md" />
      <span className="relative z-10 flex items-center gap-2 text-base group-hover:text-white">
        {text}
        {icon}
      </span>
    </button>
  );
} 