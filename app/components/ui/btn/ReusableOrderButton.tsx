import React from "react";

export interface ReusableOrderButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  bgColor?: string; // e.g. 'bg-[#D12525]' or 'bg-[#FFB936]'
  hoverBgColor?: string; // e.g. 'group-hover:bg-[#00813D]'
  textColor?: string; // e.g. 'text-white'
  hoverTextColor?: string; // e.g. 'group-hover:text-white'
  fullWidth?: boolean;
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode; // for custom content
  variant?: "filled" | "outline" | "ghost";
  disabled?: boolean;
}

const base =
  "relative overflow-hidden outline-none transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 group font-bold px-4 py-4 h-16";

export default function ReusableOrderButton({
  text = "اکنون سفارش دهید",
  icon,
  onClick,
  bgColor = "bg-[#D12525]",
  hoverBgColor = "group-hover:bg-[#00813D]",
  textColor = "text-white",
  hoverTextColor = "group-hover:text-white",
  fullWidth = false,
  rounded = true,
  className = "",
  children,
  variant = "filled",
  disabled = false,
}: ReusableOrderButtonProps) {
  // Variant styles
  let variantClass = "";
  if (variant === "outline") {
    variantClass = `border border-white bg-transparent ${textColor} ${hoverBgColor}`;
  } else if (variant === "ghost") {
    variantClass = `bg-transparent ${textColor} ${hoverBgColor}`;
  } else {
    variantClass = `${bgColor} ${textColor} ${hoverBgColor}`;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        base,
        variantClass,
        fullWidth ? "w-full" : "w-60",
        rounded ? "rounded-xl" : "rounded-md",
        disabled ? "opacity-60 cursor-not-allowed" : "",
        className,
      ].join(" ")}
    >
      {/* Animated hover background for filled/outline */}
      {(variant === "filled" || variant === "outline") && (
        <span
          className={`absolute inset-0 scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 ${hoverBgColor} ${rounded ? "rounded-xl" : "rounded-md"}`}
        />
      )}
      <span className="relative z-10 flex items-center gap-2 text-base">
        {icon}
        {text}
        {children}
      </span>
    </button>
  );
} 