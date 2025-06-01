import Image from "next/image";
import Product from "./Product";
import { getProducts } from "@/lib/api-product";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <section className="relative pb-[6rem] bg-[#F4F1EA]">
      <Image className="hidden xl:block absolute top-[7rem] left-[2.5rem] size-[8rem] opacity-[.5]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-2.png" alt="" />
      <Image className="hidden xl:block absolute top-[33rem] right-[2rem] size-[4.5rem]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/pizza-shape.png" alt="" />

      <div className="text-center pt-[6rem] max-w-[80rem] mx-auto p-4">
        <p className="font-medium text-[#00813D]">پرفروش ترین ظروف</p>
        <h2 className="font-bold text-[3rem]">محصولات ما را کاوش کنید</h2>

        <div className="sm:px-[1rem] md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-[3rem] gap-[1.5rem]">
          {products?.map((res) => (
            <Product key={res.id} data={res} />
          ))}
        </div>
      </div>

      <Image className="hidden xl:block absolute w-[2.8rem] bottom-[3.5rem] left-[3rem]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-3.png" alt="" />
    </section>
  );
}
