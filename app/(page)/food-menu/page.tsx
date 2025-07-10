import TitlePages from "@/app/components/titelPges/TitelPges";
import FoodIntroduction from "./components/foodIntroduction/FoodIntroduction";

export default function Menu1() {
  return (
    <div dir="rtl">
      <TitlePages currentpage="منو غذا" nextPage="صفحه اصلی" secondPage="منو غذا " />
      <FoodIntroduction />
    </div>
  );
}
