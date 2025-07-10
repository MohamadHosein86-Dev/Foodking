import "swiper/css";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperSlideMenu from "../swiperSlideMenu/SwiperSlideMenu";

export default function SwiperMenu() {
  return (
    <div className=" h-[500px] bg-[var(--wc-secondary)]">
      <div className="h-full bg-[var(--wc-secondary)] max-w-[82rem] mx-auto grid grid-cols-12">
        <div className="col-span-1">
          <img src="/pages/menu_1/shape_food3.png" alt="" className="my-[150px]" />
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1
            }
          }}
          className="h-full bg-[var(--wc-secondary)] max-w-[70rem]  py-[2rem] col-span-10"
        >
          <SwiperSlideMenu rating={5} image="/pages/menu_1/avatar01.jpg" Title="امیلیا امیلی" paragraf="مدیر عامل و موسس کسب و کار" desc="ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :" />
          <SwiperSlideMenu rating={5} image="/pages/menu_1/avatar01.jpg" Title="امیلیا امیلی" paragraf="مدیر عامل و موسس کسب و کار" desc="ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :" />
          <SwiperSlideMenu rating={5} image="/pages/menu_1/avatar01.jpg" Title="امیلیا امیلی" paragraf="مدیر عامل و موسس کسب و کار" desc="ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :" />
          <SwiperSlideMenu rating={5} image="/pages/menu_1/avatar01.jpg" Title="امیلیا امیلی" paragraf="مدیر عامل و موسس کسب و کار" desc="ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :" />
          <SwiperSlideMenu rating={5} image="/pages/menu_1/avatar01.jpg" Title="امیلیا امیلی" paragraf="مدیر عامل و موسس کسب و کار" desc="ممنون برای شام دیشب. شگفت‌انگیز بود!! من می‌گویم که این بهترین وعده غذایی است که در چند وقت اخیر خورده‌ام. قطعاً در سال آینده شاهد غذا خوردن بیشتری خواهیم بود :" />
        </Swiper>
        <div className="col-span-1 ps-5">
          <img src="/pages/menu_1/shape_food1.png" alt="" className="my-[100px]" />
          <img src="/pages/menu_1/shape_food2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
