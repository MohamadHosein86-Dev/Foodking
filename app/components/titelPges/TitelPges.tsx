import React from "react";

export default function TitelPages({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)]
  bg-cover bg-no-repeat object-contain inset-8  bg-[center_top_30%] w-full flex justify-center items-center h-[350px]  "
    >
      {children}
    </div>
  );
}
