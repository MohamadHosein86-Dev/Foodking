import MotorSycle from "@/app/components/MotorCycelComponents/MotorSycle";
import ReservationForm from "./components/reservationForm/ReservationForm";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Reservation() {
  return (
    <section dir="rtl" className="w-full">
      <TitlePages currentpage="سایر اعضا" nextPage="صفحه اصلی" secondPage="رزرواسیون" />
      <ReservationForm />
      <MotorSycle bg=" bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/pepsi-bg.png)] " />
    </section>
  );
}
