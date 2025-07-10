import InterItems from "./interItem/IterItems";
import InteroTitle from "./interoTitel/InteroTitel";

export default function InterductionAboutUs() {
  return (
    <div className="flex max-w-[80rem]  mx-auto  flex-col gap-[2rem] md:flex-row items-center justify-evenly p-6 md:p-16 ">
      <InteroTitle />
      <InterItems />
    </div>
  );
}
