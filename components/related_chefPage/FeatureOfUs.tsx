"use client";

import Image from "next/image";

export default function featureOfUs({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: string;
}) {
  return (
    <section
      className="
  -space-y-24
    md:justify-end
    md:w-[300px]
    lg:w-[400px]
    lg:justify-end
    xl:w-[500px]
    2xl:w-[350px]




     flex h-[300px] flex-wrap justify-center items-center  w-[350px]
     "
    >
      <Image className="" alt="#" height={70} width={70} src={imageUrl} />

      <h1
        className="font-semibold w-full 
        text-center
          md:text-right
    lg:text-right
      text-2xl text-white"
      >
        {title}
      </h1>
      <h1
        className="font-semibold w-full 
           text-center
          md:text-right
    lg:text-right
      text-base text-white"
      >
        {content}
      </h1>
    </section>
  );
}
