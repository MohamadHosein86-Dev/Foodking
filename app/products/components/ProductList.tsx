import { getProducts } from "@/app/servises/products/product";
import ProductCard from "./Product";

interface PropsType {
  Home?: boolean;
}
export default async function ProductList({ Home }: PropsType) {
  const products = await getProducts();

  if (Home)
    return (
      <div className="sm:px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12 gap-6">
        {products?.map((res) => (
          <ProductCard key={res.id} data={res} />
        ))}
      </div>
    );
}
