"use client";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
export default function AddToShoppingCard({
  name,
  title,
  newPrice,
  oldPrice,
  category,
  productImage,
}: {
  name: string;
  title: string;
  newPrice: string;
  oldPrice: string | null;
  category: string[];
  productImage: string;
}) {
  const [counter, setCounter] = useState<number>(0);
  const [description, setDescription] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  return (
    <div className="flex mt-18 flex-wrap justify-center h-full w-2/3 ">
      <section className=" w-1/2 flex flex-wrap h-1/2 justify-end content-center">
        <div className="flex items-center justify-center h-12 ">
          <p className=" font-semibold  text-center text-base mb-1 mr-3 text-black">
            (بررسی مشتری)
          </p>
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
          <FaStar className="text-amber-400" />
        </div>
        <h1
          className="w-full font-semibold h-20 text-right text-3xl text-black
            sm:text-3xl 
            md:text-4xl 
            lg:text-4xl "
        >
          {name}
        </h1>
        <h2
          className="w-full font-semibold h-14 text-right text-base text-slate-500
            sm:text-3xl 
            md:text-4xl 
            lg:text-lg "
        >
          {title}
        </h2>
        <div className="flex w-full justify-end font-semibold text-2xl space-x-6">
          <div className="flex space-x-2">
            <p className="text-green-700">تومان</p>{" "}
            <div className="text-green-700">{newPrice}</div>
          </div>
          <div className=" flex space-x-2 text-slate-500">
            <p>تومان</p>
            <div className="line-through">{`${oldPrice}`}</div>
          </div>
        </div>
        {/* //////////////////! */}
        <button
          className=" relative
         bg-green-700 w-60 h-16 mt-12 mr-2 group rounded-lg"
        >
          <div
            className="bg-red-600 scale-0 duration-500 group-hover:scale-100 z-0 absolute
           rounded-lg w-full inset-0 h-full"
          ></div>
          <div className="absolute z-10 inset-0 w-full h-full">
            <div className="flex w-full h-full  justify-center items-center">
              <p className="font-semibold text-white text-base">
                {" "}
                افزودن به سبد خرید
              </p>
              <GiShoppingCart className="text-white text-3xl" />
            </div>
          </div>
        </button>
        <div className=" h-16 w-32 mt-12 flex justify-center items-center">
          <button
            onClick={() => setCounter((counter) => (counter += 1))}
            className="border-1 h-full group  border-slate-200 px-3 py-5"
          >
            <FaPlus className="text-black duration-700 group-hover:text-green-800  text-lg" />
          </button>
          <div className="text-lg border-1 border-r-0 border-l-0 border-slate-200  px-3 py-4">
            {counter}
          </div>
          <button
            disabled={counter === 0}
            onClick={() => setCounter((counter) => (counter -= 1))}
            className="border-1 border-slate-200 group px-3 py-5"
          >
            <FaMinus className="text-black duration-700 group-hover:text-green-800 text-lg" />
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button className=" font-semibold text-slate-500 text-base flex justify-end items-center space-x-3 mt-12">
            <p>افزودن به لیست علاقه مندی ها</p>
            <CiHeart className="text-red-600 text-3xl" />
          </button>
        </div>
        <p className="w-full font-semibold text-black text-base text-right mt-6">
          {" "}
          N/A: دسترسی
        </p>
        <p
          className="w-full  font-semibold text-black text-base 
         text-right h-6 flex flex-row-reverse justify-start"
        >
          : دسته بندی
          {category.map((cat, i) => {
            return (
              <div className="max-w-40  mr-1 flex" key={cat}>
                <div className="w-full ">{cat}</div>
                {i !== 0 && <div className="w-2 ml-1 text-lg ">,</div>}
              </div>
            );
          })}
        </p>
      </section>
      <section className=" flex justify-center  w-1/2 items-center">
        <img src={productImage} alt="" />;
      </section>

      <div className=" w-full  h-[700px] mt-12">
        <div className="flex w-full space-x-12 justify-end">
          <button
            onClick={() => setDescription(2)}
            className={`w-48 ${
              description === 2 ? "bg-amber-400" : "bg-slate-100"
            } font-semibold duration-500
             text-black text-lg rounded-md h-18
              hover:bg-amber-400 `}
          >
            بررسی ها
          </button>
          <button
            onClick={() => setDescription(1)}
            className={`w-48 ${
              description === 1 ? "bg-amber-400" : "bg-slate-100"
            } font-semibold duration-500
             text-black text-lg rounded-md h-18
              hover:bg-amber-400 `}
          >
            توضیحات
          </button>
        </div>
        {description === 1 ? (
          <div>
            <h1
              className="text-right font-semibold duration-500
             text-black text-xl mt-12"
            >
              تجربه در سراسر جهان است
            </h1>
            <p
              className="font-semibold duration-500
             text-slate-500 text-base text-right mt-6"
            >
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        ) : (
          <div>
            <div>
              {/* {//* render all opinions from db in comment style} */}
            </div>
            <h1
              className="font-semibold duration-500
             text-slate-700 text-base text-right mt-6"
            >
              یک بررسی اضافه کنید{" "}
            </h1>
            <h2
              className="font-semibold duration-500
             text-slate-500 text-base text-right mt-6"
            >
              نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
              شده‌اند
            </h2>
            <h1
              className="font-semibold duration-500
             text-slate-900 text-base text-right mt-6"
            >
              به این مورد امتیاز دهید
            </h1>
            <div className="flex flex-row-reverse items-center justify-start h-12 ">
              <FaStar
                onMouseLeave={() => setScore(0)}
                onMouseOver={() => setScore(1)}
                className={`${
                  score === 1 ||
                  score === 2 ||
                  score === 3 ||
                  score === 4 ||
                  score === 5
                    ? "text-amber-500"
                    : "text-amber-200"
                }  text-2xl`}
              />
              <FaStar
                onMouseLeave={() => setScore(0)}
                onMouseEnter={() => setScore(2)}
                className={`${
                  score === 2 || score === 3 || score === 4 || score === 5
                    ? "text-amber-500"
                    : "text-amber-200"
                }  text-2xl`}
              />
              <FaStar
                onMouseEnter={() => setScore(3)}
                onMouseLeave={() => setScore(0)}
                className={`${
                  score === 3 || score === 4 || score === 5
                    ? "text-amber-500"
                    : "text-amber-200"
                }  text-2xl`}
              />
              <FaStar
                onMouseEnter={() => setScore(4)}
                onMouseLeave={() => setScore(0)}
                className={`${
                  score === 4 || score === 5
                    ? "text-amber-500"
                    : "text-amber-200"
                }  text-2xl`}
              />
              <FaStar
                onMouseEnter={() => setScore(5)}
                onMouseLeave={() => setScore(0)}
                className={`${
                  score === 5 ? "text-amber-500" : "text-amber-200"
                }  text-2xl`}
              />
            </div>
            <form className="w-full flex flex-wrap gap-x-16">
              <textarea
                className="text-right mb-8 py-2 w-full border-1 border-slate-200 mt-12 px-6 h-28"
                placeholder="نظر خود را بنویسید"
              />
              <input
                className="w-[600px] h-12 m text-right px-6 border-slate-200 border-1 bg-amber-200 rounded-md"
                placeholder="ایمیل"
              />
              <input
                className="w-[600px] h-12 text-right px-6 border-slate-200 border-1 bg-amber-200 rounded-md"
                placeholder="اسم"
              />
              <div className="w-full flex justify-end gap-x-2 mt-4">
                <p>
                  ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                  دیدگاهی می‌نویسم
                </p>
                <input
                  className="  text-right  border-slate-200 border-1
                 bg-amber-200 rounded-md"
                  type="checkbox"
                />
              </div>
              <div className=" w-full flex justify-end mt-8">
                <button
                  className={`font-semibold w-24 h-12 rounded-lg hover:bg-slate-950 bg-green-700 duration-500
              text-slate-100 text-base`}
                  type="submit"
                >
                  ثبت
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
