import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import AddToshopipngCard from "@/components/related_ProductPage/AddToshopipngCard";
export default async function ProductPage() {
  const product = {
    id: "1266",
    name: "همبرگر کلاسیک",
    description: "همبرگر گوشت ۱۰۰ گرمی با کاهو، گوجه و سس مخصوص",
    inventory: 200,
    price: "75000",
    category: ["فست فود", "همبرگر"],
    attributes: ["با پنیر", "بدون پیاز"],
    restaurant_id: 2,
    isActivate: true,
    img: "https://t-theme.com/foodking/wp-content/uploads/2024/03/main-food-2.png",
  };

  return (
    <div>
      <div
        className="
         bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)]
          bg-cover bg-center  w-full flex justify-center items-center h-95"
      >
        <div className=" space-y-5">
          <h1
            className="w-full font-semibold  text-center text-3xl text-white
                sm:text-3xl 
                md:text-4xl 
                lg:text-6xl lg:text-white "
          >
            {product.name}
          </h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <Link href={"/"} className="font-semibold  text-xl text-red-700">
              {" "}
              صفحه اصلی
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <Link
              href={"/shop"}
              className="font-semibold  text-xl text-red-700"
            >
              {" "}
              فروشگاه
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-red-700">
              {product.name}
            </h1>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center h-[550px] ">
        <AddToshopipngCard
          category={product.category}
          name={product.name}
          newPrice={product.price}
          productImage={product.img}
          title={product.description}
          oldPrice={"80000"}
        />
      </section>
    </div>
  );
}
