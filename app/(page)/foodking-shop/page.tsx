import ProductList from "@/app/products/components/ProductList";
import PriceFilter from "@/components/pricefilter/PriceFilter";
import TitelPages from "@/components/titelCompo/TitelPges";
import { FaChevronLeft, FaHamburger } from "react-icons/fa";

export default async function ShopPage() {
  return (
    <section dir="rtl" className="bg-[#F4F1EA] ">
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
      <div className=" flex  my-[6rem] gap-8 relative  mx-auto justify-center   p-4 max-w-[80rem]  ">
        <div className=" font-semibold basis-[30%]  ">
          <div className="pb-[3rem] mb-[2.5rem] border-b-[1px] border-gray-300 ">
            <h2 className=" text-[1.6rem] mb-[1.8rem]   ">دسته بندی ها </h2>
            <div className="  flex flex-col gap-[1.5rem] ">
              <div className=" flex items-center gap-[5px] ">
                <FaHamburger />
                <p>پرو برگر</p>
              </div>
              <div className=" flex items-center gap-[5px] ">
                <FaHamburger />
                <p>پرو برگر</p>
              </div>
              <div className=" flex items-center gap-[5px] ">
                <FaHamburger />
                <p>سیب زمینی سرخ کرده </p>
              </div>
              <div className=" flex items-center gap-[5px] ">
                <FaHamburger />
                <p>پرو برگر</p>
              </div>
              <div className=" flex items-center gap-[5px] ">
                <FaHamburger />
                <p>پرو برگر</p>
              </div>
            </div>
          </div>
          <PriceFilter />
        </div>
        <div className=" basis-[70%] flex flex-col ">
          <div className=" w-full px-[1rem] py-[1rem] flex justify-between items-center border-gray-300 border-[1px] ">
            <p>
              نمایش {1} از {8} نتیجه
            </p>
            <form className=" px-[1rem] py-[1rem] border-[1px] rounded-[6px] bg-[#D12525] text-white font-semibold border-gray-300 ">مرتب‌سازی بر اساس محبوبیت</form>
          </div>
          <ProductList Shop={true} />
        </div>
      </div>
    </section>
  );
}
