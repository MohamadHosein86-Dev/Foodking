import ScrollAnimation from "../../animation/scrollanimation/ScrollAnimation";

export default function AboutChefSec() {
  return (
    <ScrollAnimation direction="up" delay={0.3}>
      <div className=" px-[4rem]  sm:p-[3rem] md:p-4 overflow-hidden flex-wrap md:flex-nowrap  pb-[6rem] my-[8rem] relative  mx-auto justify-center flex items-center p-4 max-w-[100rem]  ">
        <div className="  sm:ml-auto md:m-0 relative      ">
          <div className=" md:w-[25rem] ">
            <img className=" mx-auto  md:m-0 w-[290px]  h-[360px]    " src="/home/04-3.jpg" alt="" />
            <img className=" z-[-1000] hidden w-[28rem] opacity-[.40] xl:block absolute   right-[-15rem] top-[5.5rem] " src="/home/shape-Image.png" alt="" />
          </div>
        </div>

        <div className=" text-center sm:text-right flex flex-col w-full md:w-[60%]   xl:w-[36%] ">
          <p className=" mt-[2rem] text-[#D12525]  text-[1rem] sm:text-[1.2rem] font-semibold pb-[1rem] ">چیزی در مورد غذا یاد بگیرید</p>
          <p className=" text-[#212121] font-semibold  text-[1.5rem] sm:text-[1.6rem] ">به پناهگاه آشپزی ما خوش آمدید، جایی که هر غذا سمفونی از طعم هایی است که با دقت درست شده اند و ذائقه شما را وسوسه می کند. رستوران ما که در قلب [شهر] واقع شده است، فضایی جذاب است که ترکیب شده است.</p>
          <div className=" mt-[1.5rem] text-sm sm:text-[1rem] flex gap-[.5rem] sm:gap-[1rem] items-center ">
            <img className=" w-[3.5rem] " src="/home/05-2.jpg" alt="" />
            <p className=" font-semibold ">
              مایکل وی کریستنس /<span className=" font-normal text-[#5C5C5B] ">مدیر عامل و موسس</span>
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
