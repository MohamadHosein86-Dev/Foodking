import { Fragment } from "react";
import IntroductionConatct from "../introductionConatct/IntroductionConatct";
import ContactItem from "./contactItem/ContactItem";
import MotorSycle from "@/app/components/MotorCycelComponents/MotorSycle";

export default function ContactItems() {
  return (
    <Fragment>
      <div className=" pt-32 max-w-7xl px-4 sm:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-4 xl:px-6  py-3 ">
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/email.svg" Title="آدرس ایمیل" email="email@example.com" info="info@yourdomain.com" />
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/location.svg" Title="شماره تلفن  " email="+1255 - 568 - 6523 4374-221" info="+1255 - 568 - 6523" />
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/phone.svg" Title="خط آدرس" email="خیابان بووری، نیویورک، 37 ایالات متحده آمریکا" info="NY 10013، ایالات متحده آمریکا" />
      </div>
      <IntroductionConatct />
      <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
    </Fragment>
  );
}
