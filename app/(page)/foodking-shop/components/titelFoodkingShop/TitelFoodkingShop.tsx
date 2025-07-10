import ProductShop from "../productShop/ProductShop";
import FilterFood from "../filterFood/FilterFood";
import FormSearch from "../formSearch/FormSearch";

export default function TitleFoodkingShop() {
  return (
    <div className=" flex  mb-24 mt-8 gap-8 relative  mx-auto justify-center   p-4 max-w-[80rem]  ">
      <div className=" w-full flex flex-col ">
        <div className="px-[2rem] flex-col  flex justify-between  w-full  ">
          <div className=" flex  gap-[2rem] w-full ">
            <FilterFood />
            <FormSearch />
          </div>
          <ProductShop />
        </div>
      </div>
    </div>
  );
}
