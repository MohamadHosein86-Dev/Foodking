import ScrollAnimation from "@/app/components/animation/scrollanimation/ScrollAnimation";
import ProductList from "./ProductList";

export default async function ProductSection() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <section className="relative pb-[6rem] bg-[#F4F1EA]">
        <div className="text-center pt-[6rem] max-w-[80rem] mx-auto p-4">
          <p className="font-medium text-[#00813D]">پرفروش ترین ظروف</p>
          <h2 className="font-bold text-[3rem]">محصولات ما را کاوش کنید</h2>
          <ProductList Home={true} />
        </div>
        <img className="hidden xl:block absolute  bottom-[3.5rem] left-[3rem]" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-3.png" alt="" />
      </section>
    </ScrollAnimation>
  );
}
