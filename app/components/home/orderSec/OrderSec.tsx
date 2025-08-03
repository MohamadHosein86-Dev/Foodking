import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";
import FoodBox from "./FoodBox";

export default function OrderSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className=" flex-wrap flex gap-3  justify-center ">
        <FoodBox bg="  bg-[#d12525]" price="38 تومن" />
        <FoodBox bg=" bg-[#FFB936]" box="bg-foodbox2" price="43 تومن" />
        <FoodBox bg="  bg-[#d12525]" price="38 تومن" />
      </div>
    </ScrollAnimation>
  );
}
