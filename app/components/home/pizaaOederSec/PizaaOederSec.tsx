import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";
import Boxfoodorder from "./Boxfoodorder";

export default function PizaaOederSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className="p-4  mb-14 md:pb-16 flex-wrap  justify-center md:justify-between xl:gap-0  flex max-w-screen-xl mx-auto">
        <Boxfoodorder logo="/home/delicious-pizza.png" Title="پیتزای کلاسیک ایتالیایی خوشمزه" />
        <Boxfoodorder logo="/home/vagetable-burger.png" Title="همبرگر سبزیجات خوشمزه" />
        <Boxfoodorder logo="/home/roasted-chicken.png" Title="گوشت مرغ سوخاری پیتزا ایتالیایی" />
        <Boxfoodorder logo="/home/roll-samosa.png" Title="سمبوسه سیگاری به شکل رول" />
      </div>
    </ScrollAnimation>
  );
}
