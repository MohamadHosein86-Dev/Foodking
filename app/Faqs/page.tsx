import { FaChevronLeft } from "react-icons/fa";

export default function Faqs() {
    return (
        <div className="w-full">
            <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-95">
                <div className="space-y-5">
                    <h1 className="font-semibold text-6xl text-white">سایر اعضا</h1>
                    <div className="flex space-x-1 items-center h-8 flex-row-reverse">
                        <h1 className="font-semibold text-xl text-green-700">
                            صفحه اصلی
                        </h1>
                        <FaChevronLeft className="mt-2 text-base text-green-700" />
                        <h1 className="font-semibold text-xl text-white">سوالات متداول</h1>
                    </div>
                </div>
            </div>

            <div className="faqs flex flex-col justify-center items-center">
                <div className="title my-12 flex items-center justify-center flex-col gap-y-2">
                    <h5 className="text-green-700 h5">سوالات پرتکرار</h5>
                    <h2 className="text-[25px]">سوالات متداول</h2>
                </div>
                <div dir="rtl" id="accordion-flush" data-accordion="collapse" className="w-1/2" data-active-classes="bg-white text-gray-900" data-inactive-classes="text-gray-500">
                    <h2 id="accordion-flush-heading-1">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-gray-200">
                            <p className="mb-2 text-gray-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h2 id="accordion-flush-heading-2">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="py-5 border-b border-gray-200">
                            <p className="mb-2 text-gray-500">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-flush-heading-3">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <div className="py-5 border-b border-gray-200">
                            <p className="mb-2 text-gray-500">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500">Learn more about these technologies:</p>
                            <ul className="ps-5 text-gray-500 list-disc">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
=======
import Accordion from "@/components/faqs_Accordion/Accordion";
import { FaChevronLeft } from "react-icons/fa";
interface Faq {
    title: string;
    content: string;
}
const faqs: Faq[] = [
    {
        title: "آیا قیمت های منوی شما با قیمت های رستوران یکی است؟",
        content:
            "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپ",
    },
    {
        title: "متن ساختگی با تولید سادگی نامفهوم",
        content:
            "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپ",
    },
    {
        title: "متن ساختگی با تولید سادگی نامفهوم",
        content:
            "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپ",
    },
    {
        title: "متن ساختگی با تولید سادگی نامفهوم",
        content:
            "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپ",
    },
    {
        title: "متن ساختگی با تولید سادگی نامفهوم",
        content:
            "متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپ",
    },
];
export default function Faqs() {
    return (
        <div className="w-full">
            <div className="w-full bg-breadcamp flex items-center justify-center py-24">
                <div className="text-center space-y-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">سوالات متداول</h1>
                    <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
                        <span className="text-green-500 font-semibold">صفحه اصلی</span>
                        <FaChevronLeft className="mt-1 text-green-500" />
                        <span className="text-white font-semibold">سوالات متداول</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="title my-12 flex items-center justify-center flex-col gap-y-2">
                    <p className="text-green-700">سوالات پرتکرار</p>
                    <p className="text-[25px]">سوالات متداول</p>
                </div>

                <div className="max-w-5xl mx-auto mt-10 space-y-4">
                    {faqs.map((faq, index) => (
                        <Accordion key={index} title={faq.title}>
                            {faq.content}
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}
