import ScrollAnimation from "@/app/components/animation/scrollanimation/ScrollAnimation";
import ProductList from "./ProductList";

export default async function ProductSection() {
  return (
    <section className="relative pb-24 bg-[#F4F1EA]">
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="text-center pt-24 max-w-7xl mx-auto p-4">
          <p className="font-medium text-[#00813D]">پرفروش ترین ظروف</p>
          <h2 className="font-bold text-5xl">محصولات ما را کاوش کنید</h2>
          <ProductList Home={true} />
        </div>
        <img className="hidden xl:block absolute  bottom-14 left-12" src="https://modinatheme.com/foodking/wp-content/uploads/2024/03/frame-3.png" alt="" />
      </ScrollAnimation>
    </section>
  );
}
