import TitlePages from "@/app/components/titelPges/TitelPges";
import ContactItem from "./components/contactItems/ContactItems";

function Contact() {
  return (
    <section className="  bg-[#f4f1ea] ">
      <TitlePages currentpage="تماس با ما" nextPage="صفحه اصلی" secondPage="تماس با ما " />
      <ContactItem />
    </section>
  );
}

export default Contact;
