import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";

export default function AboutChefSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className=" px-16  sm:p-12 md:p-4 overflow-hidden flex-wrap md:flex-nowrap  pb-24 my-32 relative  mx-auto justify-center flex items-center p-4 max-w-7xl  ">
        <div className="  sm:ml-auto md:m-0 relative      ">
          <div className=" md:w-100 ">
            <img className=" mx-auto  md:m-0 w-72  h-90    " src="/home/04-3.jpg" alt="" />
            <img className=" z-[-1000] hidden w-112 opacity-40 xl:block absolute   -right-60 top-22 " src="/home/shape.png" alt="" />
          </div>
        </div>

        <div className=" text-center sm:text-right flex flex-col w-full md:w-3/5   xl:w-4/12 ">
          <p className=" mt-8 text-[#D12525]  text-base sm:text-lg font-semibold pb-4 ">چیزی در مورد غذا یاد بگیرید</p>
          <p className=" text-[#212121] font-semibold  text-xl sm:text-2xl ">به پناهگاه آشپزی ما خوش آمدید، جایی که هر غذا سمفونی از طعم هایی است که با دقت درست شده اند و ذائقه شما را وسوسه می کند. رستوران ما که در قلب [شهر] واقع شده است، فضایی جذاب است که ترکیب شده است.</p>
          <div className=" mt-6 text-sm sm:text-base flex gap-2 sm:gap-4 items-center ">
            <img className=" w-14 " src="/home/05-2.jpg" alt="" />
            <p className=" font-semibold ">
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
