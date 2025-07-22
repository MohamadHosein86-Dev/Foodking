import { FaqsData } from "@/app/data/Data";
import AccordionFaqs from "./components/accordionFaqs/AccordionFaqs";
import TitlePages from "@/app/components/titelPges/TitelPges";

export default function Faqs() {
  return (
    <div className="w-full">
      <TitlePages currentpage="سوالات متداول" nextPage="صفحه اصلی" secondPage="سوالات متداول" />
      <div className="flex flex-col justify-center items-center my-4">
        <div className="title mb-0 mt-24 flex items-center justify-center flex-col gap-y-2">
          <p className="text-green-700  font-bold ">سوالات پرتکرار</p>
          <p className="text-4xl font-bold   ">سوالات متداول</p>
        </div>
        <div className="max-w-5xl mx-auto mt-10 space-y-4">
          {FaqsData.map((faq, index) => (
            <AccordionFaqs key={index} title={faq.title} index={index}>
              {faq.content}
            </AccordionFaqs>
          ))}
        </div>
      </div>
    </div>
  );
}
