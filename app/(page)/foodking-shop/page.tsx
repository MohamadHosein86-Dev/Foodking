import TitlePages from "@/app/components/titelPges/TitelPges";
import TitleFoodkingShop from "./components/titelFoodkingShop/TitelFoodkingShop";

export default async function ShopPage() {
  return (
    <section dir="rtl" className=" ">
      <TitlePages currentpage="فروشگاه" nextPage="صفحه اصلی" secondPage="درباره ما" />
      <TitleFoodkingShop />
    </section>
  );
}
