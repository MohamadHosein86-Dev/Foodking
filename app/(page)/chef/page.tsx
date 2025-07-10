import TitlePages from "@/app/components/titelPges/TitelPges";
import IntroductionChef from "./components/introductionChef/IntroductionChef";

export default function Chef() {
  return (
    <div className="w-full bg-amber-50">
      <TitlePages currentpage="آشپز" nextPage="صفحه اصلی" secondPage="فروشگاه" />
      <IntroductionChef />
    </div>
  );
}
