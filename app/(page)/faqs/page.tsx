import TitelPages from "@/app/components/titelPges/TitelPges";
import { FaqsData } from "@/app/data/Data";
import { FaChevronLeft } from "react-icons/fa";
import AccordionFaqs from "./components/accordionFaqs/AccordionFaqs";

export default function Faqs() {
  return (
    <div className="w-full">
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">سوالات متداول</h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-green-500 font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-white font-semibold">سوالات متداول</span>
          </div>
        </div>
      </TitelPages>
      <div className="flex flex-col justify-center items-center my-4">
        <div className="title mb-[0rem] mt-[6rem] flex items-center justify-center flex-col gap-y-2">
          <p className="text-green-700  font-bold ">سوالات پرتکرار</p>
          <p className="text-[40px] font-bold   ">سوالات متداول</p>
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
