import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { getProduct } from "@/app/servises/products/product";
import AddToShoppingCard from "@/app/(page)/cart/components/addtoShoppingCard/AddToshopipngCard";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
export default async function ProductstPage({ params }: ProductPageProps) {
  const slug = params.slug;
  const product = await getProduct(slug);
  console.log("kir");

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

            <Link href={"/shop"} className="font-semibold  text-xl text-red-700">
              {" "}
              فروشگاه
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-red-700">{product.name}</h1>
          </div>
        </div>
      </div>

      <section className="w-full flex justify-center min-h-[550px]  ">
        <AddToShoppingCard productId={product.id} name={product.name} newPrice={product.price} productImage={product.image} title={product.description} oldPrice={product.price} />
      </section>
    </div>
  );
}
