import { getProducts } from "@/lib/api-product";
import { Fragment } from "react";
import ProductCard from "./Product";

export default async function ProductList() {
  const products = await getProducts();
  return (
    <Fragment>
      {products?.map((res) => (
        <ProductCard key={res.id} data={res} />
      ))}
    </Fragment>
  );
}
