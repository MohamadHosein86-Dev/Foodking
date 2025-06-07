import PriceFilter from "@/components/pricefilter/PriceFilter";
import TitelPages from "@/components/titelCompo/TitelPges";
import { getProducts } from "@/lib/api-product";
import { FaChevronLeft, FaHamburger, FaStar } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

export default async function ShopPage() {
  const products = await getProducts();
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
          <div className=" flex flex-col mt-[3rem]  gap-[2rem] ">
            {products?.map((res) => (
              <div key={res.id} className="flex-row-reverse rounded-[.8rem] py-[2rem] px-[2.3rem]  bg-[#ffff] flex flex-wrap w-full justify-center items-center">
                <section className="  w-[60%]   flex flex-wrap h-1/2  content-center">
                  <div className="flex justify-between w-full items-center ">
                    <p className=" text-slate-500  font-semibold text-[1.2rem] ">امتیاز</p>
                    <div className=" flex ">
                      <FaStar className="text-amber-400" />
                      <FaStar className="text-amber-400" />
                      <FaStar className="text-amber-400" />
                      <FaStar className="text-amber-400" />
                      <FaStar className="text-amber-400" />
                    </div>
                  </div>

                  <h1 className="w-full font-semibold my-[.8rem]  text-right text-3xl text-black sm:text-3xl md:text-4xl lg:text-[1.8rem] ">{res.name}</h1>

                  <h2 className="w-[90%] font-semibold  text-right text-base text-slate-500  md:text-[1.4rem] lg:text-[.9rem]">{res.description}</h2>

                  <div className="flex w-full mt-4  font-semibold text-2xl space-x-6">
                    <div className="flex space-x-2">
                      <p className="text-[#D12525]">تومان</p>
                      <div className="text-[#D12525]">{res.price}</div>
                    </div>
                  </div>

                  <button className="relative cursor-pointer bg-green-700 w-40 h-12 mt-4 mr-2 group rounded-lg">
                    <div className="bg-red-600 scale-0 duration-500 group-hover:scale-100 z-0 absolute rounded-lg w-full inset-0 h-full"></div>
                    <div className="absolute z-10 inset-0 h-full">
                      <div className="flex w-full h-full justify-center items-center">
                        <p className="font-semibold text-white text-base"> سفارش </p>
                      </div>
                    </div>
                  </button>
                </section>
                <section className=" w-[40%]  flex  items-center">
                  <img src={res.image} className="" alt="" />
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
