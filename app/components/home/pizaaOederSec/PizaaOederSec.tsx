import Boxfoodorder from "./Boxfoodorder";

export default function PizaaOederSec() {
  return (
    <div className="p-4  mb-[3.5rem] md:pb-[4rem] flex-wrap  justify-center md:justify-between xl:gap-0  flex max-w-[95rem] mx-auto">
      <Boxfoodorder logo="/home/delicious-pizza.png" Title="پیتزای کلاسیک ایتالیایی خوشمزه" />
      <Boxfoodorder logo="/home/vagetable-burger.png" Title="همبرگر سبزیجات خوشمزه" />
      <Boxfoodorder logo="/home/roasted-chicken.png" Title="گوشت مرغ سوخاری پیتزا ایتالیایی" />
      <Boxfoodorder logo="/home/roll-samosa.png" Title="سمبوسه سیگاری به شکل رول" />
    </div>
  );
}
