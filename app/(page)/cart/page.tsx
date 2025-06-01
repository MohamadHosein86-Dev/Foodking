import TitelPages from "@/components/titelCompo/TitelPges";
import { Fragment } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function Cart() {
  return (
    <Fragment>
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold"> سبد خرید </h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-green-500 font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-white font-semibold"> سبد خرید </span>
          </div>
        </div>
      </TitelPages>
      <section className=" bg-[#fff] max-w-[80rem] px-4 py-[4rem] "></section>
    </Fragment>
  );
}
