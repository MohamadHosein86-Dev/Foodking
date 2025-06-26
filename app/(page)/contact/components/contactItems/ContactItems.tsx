import { Fragment } from "react";

import MotorSycle from "@/app/components/MotorCycelComponents/MotorSycle";
import ContactItem from "./contactItem/ContactItem";
import IntroductionConatct from "../introductionConatct/IntroductionConatct";

export default function ContactItems() {
  return (
    <Fragment>
      <div className=" pt-[8rem] max-w-[82rem] px-[1rem] sm:px-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-[1rem] xl:px-[1.6rem]  py-[.7rem] ">
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/email.svg" titel="آدرس ایمیل" email="email@example.com" info="info@yourdomain.com" />
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/location.svg" titel="شماره تلفن  " email="+1255 - 568 - 6523 4374-221" info="+1255 - 568 - 6523" />
        <ContactItem image="https://modinatheme.com/foodking/wp-content/uploads/2024/03/phone.svg" titel="خط آدرس" email="خیابان بووری، نیویورک، 37 ایالات متحده آمریکا" info="NY 10013، ایالات متحده آمریکا" />
      </div>
      <IntroductionConatct />
      <MotorSycle bg="bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/main-cta-bg.jpg)]" />
    </Fragment>
  );
}
