import Image from "next/image";
import ProductList from "./ProductList";

export default async function ProductSection() {
  return (
    <section className="relative pb-[6rem] bg-[#F4F1EA]">
      <Image width={128} height={128} className=" hidden xl:block absolute top-[7rem] left-[2.5rem] opacity-[.5]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-2.png" alt="" />
      <Image width={66} height={66} className=" hidden xl:block absolute top-[33rem] right-[2rem] " src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/pizza-shape.png" alt="" />

      <div className="text-center pt-[6rem] max-w-[80rem] mx-auto p-4">
        <p className="font-medium text-[#00813D]">پرفروش ترین ظروف</p>
        <h2 className="font-bold text-[3rem]">محصولات ما را کاوش کنید</h2>

        <ProductList Home={true} />
      </div>

      <Image width={44.8} height={44.8} className="hidden xl:block absolute  bottom-[3.5rem] left-[3rem]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-3.png" alt="" />
    </section>
  );
}
