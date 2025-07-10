import FoodBox from "./FoodBox";

export default function OrderSec() {
  return (
    <div className=" flex-wrap flex gap-[1rem] justify-center ">
      <FoodBox bg="  bg-[#d12525]" price="38 تومن" />
      <FoodBox bg=" bg-[#FFB936]" box="bg-foodbox2" price="43 تومن" />
      <FoodBox bg="  bg-[#d12525]" price="38 تومن" />
    </div>
  );
}
