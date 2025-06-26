import Image from "next/image";
import React from "react";

export default function InteroTitel() {
  return (
    <div className="  basis-[50%] relative mb-10 md:mb-0">
      <div className=" relative  ">
        <Image src={"/burger-4.png"} alt="Burger" width={800} height={600} className="rounded-xl" />
        <Image className=" absolute top-[1rem] " alt="Burger" src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-text-4.png" />
      </div>
      <div className="absolute bottom-8 left-8 bg-orange-400 text-white p-5 rounded-xl rotate-[30deg] text-4xl font-bold">از سال ۱۹۸۵</div>
    </div>
  );
}
