import TitelPages from "@/app/components/titelPges/TitelPges";
import { FaChevronLeft, FaSearch } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProductShop from "./components/productShop/ProductShop";

export default async function ShopPage() {
  return (
    <section dir="rtl" className=" ">
      <TitelPages>
        6{" "}
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold"> فروشگاه </h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className=" text-[#D12525] font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className=" text-[#D12525] font-semibold">درباره ما</span>
          </div>
        </div>
      </TitelPages>
      <div className=" flex  mb-24 mt-8 gap-8 relative  mx-auto justify-center   p-4 max-w-[80rem]  ">
        <div className=" w-full flex flex-col ">
          <div className="px-[2rem] flex-col  flex justify-between  w-full  ">
            <div className=" flex  gap-[2rem] w-full ">
              <div className=" flex items-center gap-[.5rem]  ">
                <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#417F56] bg-[#E5F2E9] ">
                  همه
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
                <button className=" cursor-pointer  px-[12px] py-[7px] rounded-[20px]  flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  برگرها
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
                <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  روتی
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
                <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  پاستا
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>

                <button className="  cursor-pointer px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  پیتزا
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
                <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  مرغ گریل‌شده
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
                <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#353535] bg-[#EDEDED] ">
                  پک‌های ترکیبی
                  <span>
                    <FaArrowLeftLong />
                  </span>
                </button>
              </div>
              <div className=" relative w-[31%] ">
                <input className=" border-[2px] text-black font-semibold pb-[12px] pr-[.5rem] rounded-[.5rem] py-[.4rem] w-[100%] border-gray-300 " placeholder="جستجو" type="text" />
                <span className=" absolute top-[1rem] left-[.7rem] ">
                  <FaSearch color="gray" />
                </span>
              </div>
            </div>
            <div className=" w-full ">
              <ProductShop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
