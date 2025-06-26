import SwiperComponent from "@/app/components/swiper/SwiperComponent";
import TitelPages from "@/app/components/titelPges/TitelPges";
import { FaChevronLeft } from "react-icons/fa";

export default function Menu1() {
  return (
    <div dir="rtl">
      <TitelPages>
        <div className="text-center space-y-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold"> منو غذا </h1>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="text-white font-semibold">صفحه اصلی</span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className=" text-green-500 font-semibold  "> منو غذا </span>
          </div>
        </div>
      </TitelPages>
      <div className="my-[140px] w-full">
        <h5 className="text-center text-[var(--primaryColor)] my-2 font-bold">درباره غذای ما</h5>
        <h2 className="text-center  text-3xl md:text-4xl pb-[2rem] lg:text-5xl xl:text-6xl font-bold">منوی غذای پرطرفدار</h2>
        <div className="  grid grid-cols-1 lg:grid-cols-12 gap-4 gap-y-12  border-1 border-dotted mx-5 xl:mx-auto max-w-[79rem]  py-[4.5rem] my-5 rounded-2xl  px-[2rem] lg-px-0">
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer col-span-6 border-b-[1px] border-dotted mx-[30px] hover:bg-[var(--primaryColor)] transition-all group duration-300 hover:text-white rounded-t-xl px-3 py-2">
            <div className="grid grid-cols-12 items-center">
              <div className="md:col-span-10 col-span-12 h-full lg:px-0 md:px-2">
                <h4 className="text-xl md:text-2xl font-bold my-2">پیتزا دیپ شیکاگو</h4>
                <h6 className="text-[14px] md:text-[16px] px-2 lg:px-0">این تجربه ناهار خوری عالی است که در آن تجربه سریع و کارآمد را داشته باشید</h6>
              </div>
              <div className="md:col-span-2 col-span-4 font-bold h-full flex justify-center items-center">
                <span className="text-2xl lg:text-3xl mt-5 text-red-600 group-hover:text-white">۲۲تومان</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-amber-50 ">
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
}
