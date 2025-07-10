import Boxblog from "./Boxblog";

export default function BlogSec() {
  return (
    <section dir="rtl" className=" max-w-[80rem] my-[5rem] flex  sm:px-12 md:p-4 mx-auto ">
      <div className=" text-center ">
        <p className=" text-[1rem] font-semibold text-[#00813D] ">اخبار و وبلاگ</p>
        <h2 className=" font-bold text-[1.8rem] md:text-[2.6rem] pb-[2rem]  text-[#212121] ">اخبار و وبلاگ را کاوش کنید</h2>
        <div className=" flex flex-wrap justify-center gap-[1rem] ">
          <Boxblog logo="bg-bloghome3" Title="پاستا" des="آشپزی چارنیکلز در حال کاوش در شگفتی های غذا در رستوران فودکینگ" />
          <Boxblog logo="bg-bloghome2" Title="هات داگ" des="سمفونی مرزه: برگر اکستراواگانزا لذیذ" />
          <Boxblog logo="bg-bloghome1" Title="ساندویچ" des="جذابیت پنیر: لذت پیتزا ایتالیایی مقاومت ناپذیر" />
        </div>
      </div>
    </section>
  );
}
