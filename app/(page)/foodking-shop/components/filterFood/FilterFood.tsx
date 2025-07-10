import BtnFoodkingShop from "@/app/components/ui/btn/BtnFoodkingShop";

export default function FilterFood() {
  return (
    <div className=" flex items-center gap-[.5rem]  ">
      <BtnFoodkingShop Title="همه" />
      <BtnFoodkingShop Title="برگرها" />
      <BtnFoodkingShop Title="روتی" />
      <BtnFoodkingShop Title="پاستا" />
      <BtnFoodkingShop Title="پیتزا" />
      <BtnFoodkingShop Title="مرغ گریل‌شده" />
      <BtnFoodkingShop Title="پک‌های ترکیبی" />
    </div>
  );
}
