"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ← اینو اضافه کن
import "swiper/css";
export default function Menu1() {
  return (
    <div dir="rtl">
      <div className="bg-[url('/pages/blog/blog_01.jpg')] bg-cover bg-center h-[200px]">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-white text-6xl font-bold">منو غذا ۰۱</h2>
        </div>
      </div>
      <div className="my-[140px] w-full">
        <h5 className="text-center text-[var(--primaryColor)] my-2 font-bold">درباره غذای ما</h5>
        <h2 className="text-center  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">منوی غذای پرطرفدار</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 gap-y-12  border-1 border-dotted mx-5 xl:mx-auto max-w-[82rem]  py-[2rem] my-5 rounded-2xl  px-2 lg-px-0">
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
        <div className=" h-[500px] bg-[var(--wc-secondary)]">
          <div className="h-full bg-[var(--wc-secondary)] max-w-[82rem] mx-auto grid grid-cols-12">
            <div className="col-span-1">
              <img src="/pages/menu_1/shape_food3.png" alt="" className="my-[150px]" />
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1
                }
              }}
              className="h-full bg-[var(--wc-secondary)] max-w-[70rem]  py-[2rem] col-span-10"
            >
              <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
                <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
                <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
                <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

                {/* ستاره‌ها */}
                <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

                {/* آواتارها */}
                <div className="flex gap-4 justify-center mt-4">
                  <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
                <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
                <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
                <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

                {/* ستاره‌ها */}
                <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

                {/* آواتارها */}
                <div className="flex gap-4 justify-center mt-4">
                  <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
                <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
                <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
                <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

                {/* ستاره‌ها */}
                <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

                {/* آواتارها */}
                <div className="flex gap-4 justify-center mt-4">
                  <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
                <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
                <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
                <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

                {/* ستاره‌ها */}
                <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

                {/* آواتارها */}
                <div className="flex gap-4 justify-center mt-4">
                  <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[var(--wc-secondary)] p-6 text-center flex flex-col items-center justify-center gap-4 pt-[100px]">
                <h3 className="text-4xl font-bold text-black my-5">امیلیا امیلی</h3>
                <p className="text-red-600 text-2xl my-3 font-medium">مدیر عامل و موسس کسب و کار</p>
                <p className="text-black text-xl leading-7  font-bold my-5">ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :</p>

                {/* ستاره‌ها */}
                <div className="flex justify-center text-yellow-500 text-3xl">{"★★★★★"}</div>

                {/* آواتارها */}
                <div className="flex gap-4 justify-center mt-4">
                  <img src="/pages/menu_1/avatar01.jpg" alt="user1" className="w-20 h-20 rounded-full border-2 border-white shadow-md" />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="col-span-1 ps-5">
              <img src="/pages/menu_1/shape_food1.png" alt="" className="my-[100px]" />
              <img src="/pages/menu_1/shape_food2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
