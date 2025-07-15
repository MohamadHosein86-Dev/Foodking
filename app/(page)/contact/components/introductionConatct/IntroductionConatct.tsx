import FormContact from "../formContact/FormContact";

export default function IntroductionConatct() {
  return (
    <div className=" pt-[8rem] flex-col md:flex-row max-w-[82rem] px-[1rem] sm:px-[3rem] flex mx-auto  gap-[1rem] xl:px-[1.6rem]  py-[.7rem] ">
      <FormContact />
      <div className=" w-full mt-[4rem] md:mt-0  md:w-[50%] ">
        <h2 className=" font-bold text-[2.2rem] pb-[.4rem] text-right   ">در تماس باشید</h2>
        <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        <p className=" text-right text-[#5C5C5B] ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        {/* <div className=" w-[40rem] py-[2rem] h-[30rem] pl-[6rem] flex justify-end ">
          <MapCountanerShop />
        </div> */}
      </div>
    </div>
  );
}
