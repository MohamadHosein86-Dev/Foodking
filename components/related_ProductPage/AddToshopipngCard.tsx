"use client";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
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
    <div className="flex justify-center h-full w-2/3 ">
      <section className=" w-1/2 flex flex-wrap justify-end content-center">
        <div className="flex items-center justify-center h-12 ">
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
        <div className="flex w-full justify-end font-semibold text-2xl space-x-6">
          <div className="flex space-x-2">
            <p className="text-green-700">تومان</p>{" "}
            <div className="text-green-700">{newPrice}</div>
          </div>
          <div className=" flex space-x-2 text-slate-500">
            <p>تومان</p>
            <div className="line-through">{`${oldPrice}`}</div>
          </div>
        </div>
        <div className=" h-16 w-32 mt-12 flex justify-center items-center">
          <button
            onClick={() => setCounter((counter) => (counter += 1))}
            className="border-1 h-full group  border-slate-200 px-3 py-5"
          >
            <FaPlus className="text-black duration-700 group-hover:text-green-800  text-lg" />
          </button>
          <div className="text-lg border-1 border-r-0 border-l-0 border-slate-200  px-3 py-4">
            {counter}
          </div>
          <button
            disabled={counter === 0}
            onClick={() => setCounter((counter) => (counter -= 1))}
            className="border-1 border-slate-200 group px-3 py-5"
          >
            <FaMinus className="text-black duration-700 group-hover:text-green-800 text-lg" />
          </button>
        </div>
        {/* //////////////////! */}
        <button
          className=" relative
         bg-green-700 w-60 h-16 group rounded-lg"
        >
          <div
            className="bg-red-600 scale-0 duration-500 group-hover:scale-100 z-0 absolute
           rounded-lg w-full inset-0 h-full"
          ></div>
          <div className="absolute z-10 inset-0 w-full h-full">
            <div className="flex w-full h-full  justify-center items-center">
              <p className="font-semibold text-white text-base">
                {" "}
                افزودن به سبد خرید
              </p>
              <GiShoppingCart className="text-white text-3xl" />
            </div>
          </div>
        </button>
      </section>
      <section className=" flex justify-center h-full w-1/2 items-center">
        <img src={productImage} alt="" />;
      </section>
    </div>
  );
}
