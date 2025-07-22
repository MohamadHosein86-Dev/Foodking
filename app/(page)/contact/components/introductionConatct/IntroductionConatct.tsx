import FormContact from "../formContact/FormContact";

export default function IntroductionConatct() {
  return (
    <div className=" pt-32 flex-col md:flex-row max-w-7xl px-4 sm:px-12 flex mx-auto  gap-4 xl:px-6  py-3 ">
      <FormContact />
      <div className=" w-full mt-16 md:mt-0  md:w-1/2 ">
        <h2 className=" font-bold text-4xl pb-1.5 text-right   ">در تماس باشید</h2>
        <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        {/* <div className=" w-[40rem] py-[2rem] h-[30rem] pl-[6rem] flex justify-end ">
          <MapCountanerShop />
        </div> */}
      </div>
    </div>
  );
}
