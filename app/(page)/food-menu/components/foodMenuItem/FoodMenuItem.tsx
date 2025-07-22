import { FoodMenuItemType } from "@/app/Types/DataType";

export default function FoodMenuItem({ data }: { data: FoodMenuItemType }) {
  const { title, desc, price } = data;
  return (
    <div className="cursor-pointer col-span-6 border-b-1 border-dotted mx-7 hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
      <div className="grid grid-cols-12 items-center">
        <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
          <h4 className="text-xl md:text-2xl font-bold my-2">{title}</h4>
          <h6 className="text-sm md:text-base px-2 lg:px-0">{desc}</h6>
        </div>
        <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
          <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">{price}</span>
        </div>
      </div>
    </div>
  );
}
