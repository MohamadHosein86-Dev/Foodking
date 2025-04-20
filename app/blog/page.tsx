import TitelPages from "@/components/titelCompo/TitelPges";
import BlogComponents from "@/components/blog_components/blog_components";
import { FaChevronLeft } from "react-icons/fa";
export default function Blog() {
  const dataBlog = [
    {
      id: 1,
      title: "سلام دنیا!",
      desc: "به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نوشتن را شروع نمایید!",
      image: "https://t-theme.com/foodking/wp-content/uploads/2024/03/05.jpg"
    },
    {
      id: 2,
      title: "آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران فودکینگ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان...",
      image: "https://t-theme.com/foodking/wp-content/uploads/2024/02/post-inner.jpg"
    },
    {
      id: 3,
      title: "سمفونی مرزه: برگر اکستراواگانزا لذیذ",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان...",
      image: "https://t-theme.com/foodking/wp-content/uploads/2024/03/06-1.jpg"
    },
    {
      id: 4,
      title: "جذابیت پنیر: لذت پیتزا ایتالیایی مقاومت ناپذیر",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      image: "https://t-theme.com/foodking/wp-content/uploads/2024/02/04-4.jpg"
    }
  ];
  return (
    <div dir="rtl" className=" bg-[#F4F1EA] ">
      <TitelPages>
        <div className="flex justify-center flex-col gap-[2rem] items-center h-full">
          <h2 className="text-white text-7xl font-bold">صفحه وبلاگ</h2>
          <div className="flex items-center justify-center flex-row-reverse gap-2 text-xl">
            <span className="  text-white font-semibold"> درباره ما </span>
            <FaChevronLeft className="mt-1 text-green-500" />
            <span className="text-green-500 font-semibold"> صفحه اصلی </span>
          </div>
        </div>
      </TitelPages>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mx-auto max-w-[82rem] px-[1rem] sm:px-[3rem] xl:px-[1.6rem] lg-px-0 h-full   mt-[100px] ">
        <div className="lg:col-span-8  space-y-4">
          {dataBlog.map((item) => (
            <BlogComponents key={item.id} {...item} />
          ))}
        </div>
        <div className="lg:col-span-4 px-3">
          <div className="flex mb-[100px] justify-end border py-[35px] px-3 border-gray-200">
            <input type="text" className="border border-gray-300 p-4 px-5 w-full focus:outline-none focus:border-gray-300 " style={{ borderStartStartRadius: "var(--wc-form-border-radius)" }} />
            <button className="px-5 py-3" style={{ backgroundColor: "var(--wc-orange)" }}>
              جستجو
            </button>
          </div>
          <div className="border py-[35px] px-3 border-gray-200 mb-[50px]">
            <h3 className="text-2xl font-bold my-5">نوشته‌های تازه</h3>
            <ul>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">سلام دنیا!</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">شگفتی های غذا در رستوران فودکینگ</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">نیش پررنگ: طعم های عجیب و غریب، ماجراجویی جهانی</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">هوس های سریع: از بین بردن لذت های فست فود</a>
              </li>
            </ul>
          </div>
          <div className="border py-[35px] px-3 border-gray-200 my-[50px]">
            <h3 className="text-2xl font-bold my-5">نوشته‌های تازه</h3>
            <ul>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">آخرین دیدگاه‌ها</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">
                  foodking <span className="text-[var(--wc-orange)]">در</span> هوس های سریع: از بین بردن لذت های فست فود
                </a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">
                  یک نویسنده دیدگاه وردپرس <span className="text-[var(--wc-orange)]">در</span> سلام دنیا!
                </a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">
                  foodking <span className="text-[var(--wc-orange)]">در</span> هوپر برگر کینگ
                </a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">
                  foodking <span className="text-[var(--wc-orange)]">در</span> روتی با مرغ
                </a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">
                  foodking <span className="text-[var(--wc-orange)]">در</span> مرغ کبابی
                </a>
              </li>
            </ul>
          </div>
          <div className="border py-[35px] px-3 border-gray-200 my-[50px]">
            <h3 className="text-2xl font-bold my-5">بایگانی‌ها</h3>
            <span className="text-[17px]">جولای 2024</span>
          </div>
          <div className="border py-[35px] px-3 border-gray-200 my-[50px]">
            <h3 className="text-2xl font-bold my-5">دسته‌ها</h3>
            <ul>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">برنج کبابی</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">پاستا</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">پیتزا داغ</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">دسته‌بندی نشده</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">ساندویچ</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">سلامت و بهداشت</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">فرانسوی سرخ شده</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">فست فود</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">مرغ سوخاری</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">نان</a>
              </li>
              <li className="my-4 text-[17px] hover:[color:var(--primaryColor)] transition-all">
                <a href="">هات داگ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
