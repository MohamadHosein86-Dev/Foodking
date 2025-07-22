import ProductShop from "../productShop/ProductShop";
import FilterFood from "../filterFood/FilterFood";
import FormSearch from "../formSearch/FormSearch";

export default function TitleFoodkingShop() {
  return (
    <div className=" flex  mb-24 mt-8 gap-8 relative  mx-auto justify-center   p-4 max-w-7xl  ">
      <div className=" w-full flex flex-col ">
        <div className="px-8 flex-col  flex justify-between  w-full  ">
          <div className=" flex  gap-8 w-full ">
            <FilterFood />
            <FormSearch />
          </div>
          <ProductShop />
        </div>
      </div>
    </div>
  );
}
