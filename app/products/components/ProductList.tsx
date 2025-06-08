import { getProducts } from "@/lib/api-product";
import ProductCard from "./Product";
import { FaStar, FaTrash } from "react-icons/fa";

interface PropsType {
  Home?: boolean;
  Shop?: boolean;
  Favarit?: boolean;
  ShopingCart?: boolean;
}
export default async function ProductList({ Home, Shop, ShopingCart, Favarit }: PropsType) {
  const products = await getProducts();

  if (Home)
    return (
      <div className="sm:px-[1rem] md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-[3rem] gap-[1.5rem]">
        {products?.map((res) => (
          <ProductCard key={res.id} data={res} />
        ))}
      </div>
    );
  if (Shop)
    return (
      <section className=" flex flex-col mt-[3rem]  gap-[2rem] ">
        {products?.map((res) => (
          <div key={res.id} className="flex-row-reverse rounded-[.8rem] py-[2rem] px-[2.3rem]  bg-[#ffff] flex flex-wrap w-full justify-center items-center">
            <div className="  w-[60%]   flex flex-wrap h-1/2  content-center">
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
            </div>
            <div className=" w-[40%]  flex  items-center">
              <img src={res.image} className="" alt="" />
            </div>
          </div>
        ))}
      </section>
    );
  if (ShopingCart)
    return (
      <section dir="rtl" className=" overflow-x-auto h-[90%] flex flex-col mt-[1.3rem]  gap-[2rem] ">
        {products?.map((res) => (
          <div key={res.id} className="flex-row-reverse border-[2px] border-gray-300  rounded-[.8rem]  pl-[2rem]  bg-[#ffff] flex flex-wrap w-full justify-center items-center">
            <div className="  w-[60%]   flex flex-wrap h-1/2  content-center">
              <div className="flex justify-between w-full items-center ">
                <h1 className="w-full font-semibold my-[.8rem]  text-right text-3xl text-black sm:text-3xl md:text-4xl lg:text-[1.8rem] ">{res.name}</h1>
                <div className=" flex ">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                </div>
              </div>
              <h2 className="w-[90%] font-semibold  text-right text-base text-slate-500 py-[.5rem]  md:text-[1.4rem] lg:text-[.9rem]">{res.description}</h2>
              <div className=" flex justify-between my-6 w-full items-center ">
                <div className=" flex items-center gap-[.5rem] ">
                  <FaTrash size={20} color="gray" />
                  <div className=" h-8 w-32  flex justify-center items-center">
                    <button className="border-1 cursor-pointer  group border-slate-200 px-3 py-3">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                    <div className="text-lg border-1 py-[7px] border-r-0 border-l-0 border-slate-200 px-3 ">0</div>
                    <button className="border-1 cursor-pointer border-slate-200 group px-3 py-3">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="text-black duration-700 group-hover:text-green-800 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex  font-semibold text-2xl ">
                  <div className="flex space-x-2">
                    <p className="text-[#D12525]">تومان</p>
                    <div className="text-[#D12525]">{res.price}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[40%]  flex   items-center">
              <img src={res.image} className="" alt="" />
            </div>
          </div>
        ))}
      </section>
    );
}
