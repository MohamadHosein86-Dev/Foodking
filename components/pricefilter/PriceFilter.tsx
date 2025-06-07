"use client";
import { ChangeEvent, useState } from "react";

export default function PriceFilter({ onFilter }) {
  const [price, setPrice] = useState(30);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const applyFilter = () => {
    onFilter(Number(price));
  };

  return (
    <div className="w-full max-w-xsrounded-2xl  ">
      <h2 className="  font-bold  mb-[1rem]  text-[1.6rem] ">فیلتر براساس قیمت</h2>
      <input id="priceRange" type="range" min="30" max="50" step="1" value={price} onChange={handleChange} className="w-full outline-none border-none outline-none accent-green-500" />
      <div className=" flex items-center mt-[.5rem] gap-[5px] ">
        <button onClick={applyFilter} className=" w-[50%] bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition">
          فیلتر
        </button>
        <label htmlFor="priceRange" className="block  text-sm font-medium">
          قیمت: <span className="text-green-600 font-bold">{price} تومان</span>
        </label>
      </div>
    </div>
  );
}
