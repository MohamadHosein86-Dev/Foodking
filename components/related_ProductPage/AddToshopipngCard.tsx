"use client";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
export default function AddToShoppingCard({
  name,
  title,
  newPrice,
  oldPrice,
  category,
  productImage,
}: {
  name: string;
  title: string;
  newPrice: string;
  oldPrice: string | null;
  category: string[];
  productImage: string;
}) {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="flex justify-center h-full">
      <section className=" w-1/3 flex flex-wrap justify-end content-start">
        <div className="flex items-center justify-center h-12 bg-yellow-200">
          <p className=" font-semibold  text-center text-base mb-1 mr-3 text-black">
            (بررسی مشتری)
          </p>
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
        </div>
        <h1
          className="w-full font-semibold h-20 text-right text-3xl text-black
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl "
        >
          {name}
        </h1>
        <h2
          className="w-full font-semibold h-14 text-right text-base text-slate-500
            sm:text-3xl 
            md:text-4xl 
            lg:text-lg "
        >
          {title}
        </h2>
        <div className="flex  justify-end font-semibold text-2xl space-x-6">
          <div className="flex space-x-2">
            <p className="text-green-700">تومان</p>{" "}
            <div className="text-green-700">{newPrice}</div>
          </div>
          <div className=" flex space-x-2 text-slate-500">
            <p>تومان</p>
            <div className="line-through">{`${oldPrice}`}</div>
          </div>
        </div>
        <div className=" h-12 w-32 flex justify-center items-center">
          <div className="border-1 border-slate-200 p-3">
            <FaPlus className="text-black text-lg" />
          </div>
          <div className="text-lg border-1 border-slate-200 p-2">{counter}</div>
          <div className="border-1 border-slate-200 p-3">
            <FaMinus className="text-black text-lg" />
          </div>
        </div>
      </section>
      <section>
        <img src={productImage} alt="" />;
      </section>
    </div>
  );
}
