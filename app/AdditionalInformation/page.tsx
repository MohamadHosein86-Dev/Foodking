"use client";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiMotorcycleDuotone } from "react-icons/pi";
import { MdOutlineMan } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
export default function AdditionalInformation() {
  const [foodNumber, setFoodNumber] = useState<number>();
  const foods = [
    { name: "پاستا سبزیجات", price: 80, discount: 0.2, number: 1 },
    { name: "پاستا ", price: 90, discount: 0.2, number: 1 },
    { name: " سبزیجات", price: 100, discount: 0.2, number: 1 },
    { name: "پاستا سبزیجات", price: 20, discount: 0.2, number: 1 },
    { name: "پاستا ", price: 40, discount: 0, number: 1 },
  ];
  const discounts = foods.reduce((prev: number, discount: any) => {
    return prev + (discount.price - discount.price * discount.discount);
  }, 0);
  const fees = foods.reduce((prev: number, discount: any) => {
    return prev + discount.price;
  }, 0);

  const renderFood = foods.map((food, i) => {
    return (
      <div className="  " key={i}>
        <div
          className={`
          gap-x-32
          md:gap-x-32
          lg:gap-x-44
          flex w-full items-center h-12 justify-center px-4 mb-2 
           ${i % 2 !== 0 && " bg-slate-200"}`}
        >
          <section className="flex justify-center text-green-600 items-center gap-x-2">
            <div className="">
              <RiDeleteBin6Line />
            </div>
            <div>{food.number}</div>
            <p>+</p>
          </section>
          <section className="text-right">
            <p className="text-right  min-w-[100px] text-base">{food.name}</p>
            <div className="text-right  flex justify-end opacity-60 text-sm">
              <div className="mr-1">تومان</div>
              {food.price}
            </div>
          </section>
        </div>
      </div>
    );
  });
  return (
    <div
      className="
      w-[450px]
      h-[2000px]
    md:w-full
    md:h-[900px]
    lg:w-full
    xl:w-full

    lg:h-[900px]
     flex justify-center flex-wrap
     items-start
      md:items-end 
      lg:items-end 
       mt-12"
    >
      <form
        className="
  
          
           h-[1200px]
          md:h-[600px]
          lg:h-[600px]
         flex justify-center flex-wrap items-end
       
      xl:w-auto

       "
      >
        <section
          className="
       h-[1200px]
          md:h-[600px]
          lg:h-[600px]
         

          md:gap-x-2

          lg:gap-x-2

          xl:gap-x-2
        flex-wrap
          w-full
            flex justify-center  items-start 
       "
        >
          <section
            className="
            
         lg:w-[480px]
          md:w-[340px]
            border-2
        
            border-slate-200 
           rounded-xl
          
             h-[450px]"
          >
            <div className="flex justify-center flex-wrap ">
              <div
                className="
                gap-x-32
                md:gap-x-32
                lg:gap-x-60
                 justify-center mb-6 border-b-2
                w-auto flex items-center opacity-70
             border-slate-200"
              >
                <RiDeleteBin6Line className="text-xl" />
                <h1
                  className="  text-right text-lg 
                 py-4"
                >{`سبد خرید (${foods.length})`}</h1>
              </div>
              <div
                className=" h-[200px] w-auto  
              overflow-y-scroll border-b-2 border-slate-200"
              >
                {renderFood}
              </div>
              <div
                className="
                gap-x-12
                md:gap-x-32
                lg:gap-x-44
                 flex h-12 border-b-2 border-slate-200 
              justify-center items-center"
              >
                <div className="text-base flex space-x-1 opacity-60 ">
                  <p>{discounts}</p>
                  <p>تومان</p>
                </div>
                <h2 className="">تخفیف محصولات</h2>
              </div>
            </div>
            <div
              className=" 
             gap-x-12
                md:gap-x-32
                lg:gap-x-44
             flex h-12
             justify-center items-center"
            >
              <div className="text-base text-green-700 flex space-x-1 opacity-80 ">
                <p>{fees}</p>
                <p>تومان</p>
              </div>
              <h2 className="">مبلغ قابل پرداخت</h2>
            </div>
            <button
              className="
              ml-24
              w-1/2
              sm:ml-16 

              md:ml-12 
              lg:ml-24
             md:w-5/8
             sm:w-2/3
             lg:w-5/8
              flex h-12
             rounded-md 
             justify-center items-center bg-green-700  text-white"
            >
              <p>ثبت سفارش</p>
              <IoCheckmarkCircleOutline className="text-2xl ml-1" />
            </button>
          </section>
          <section
            className="
           
            h-[700px]
            lg:w-[480px]
            md:w-[380px]


            
            xl:w-[780px]
            md:h-[570px]
            lg:h-[550px]
             flex flex-wrap
         
          justify-center items-start 
        "
          >
            <section
              className="
             w-[300px]
              flex-col-reverse
              h-32
           md:h-28

           lg:h-28
             md:w-[300px]
             lg:w-auto
             xl:w-auto


            
            lg:flex-row
            lg:gap-x-4
            lg:gap-x-4
            xl:gap-x-6
flex-wrap
            
              flex justify-center items-center
              border-2 border-slate-200 rounded-xl "
            >
              <div className="flex  justify-center gap-x-2 items-center">
                <MdOutlineMan className="text-3xl ml-1 opacity-50" />
                <div className=" text-right">
                  <p className="text-xs opacity-60 mb-2">تحویل حضوری</p>
                  <p
                    style={{ fontSize: 9 }}
                    className="opacity-60
                    hidden 
                  lg:block
                  md:hidden
                  "
                  >
                    توسط پیک رستوران ارسال شود
                  </p>
                </div>
                <label htmlFor="courier">
                  <input
                    id="courier"
                    name="courier"
                    value={"ارسال توسط پیک"}
                    type="radio"
                  />
                </label>
              </div>
              <div className="flex justify-center  gap-x-2 items-center">
                <CiDeliveryTruck className="text-3xl ml-1" />
                <div className=" text-right">
                  <p className="text-xs opacity-60 mb-2">ارسال توسط پیک</p>
                  <p
                    style={{ fontSize: 9 }}
                    className="opacity-60
                    hidden 
                  lg:block
                  md:hidden
                  "
                  >
                    توسط پیک رستوران ارسال شود
                  </p>
                </div>
                <label htmlFor="courier">
                  <input
                    id="courier"
                    name="courier"
                    value={"ارسال توسط پیک"}
                    type="radio"
                  />
                </label>
              </div>
              <div
                className="flex justify-center 
              border-b-2 border-slate-300
              mb-2
              md:mb-0
              lg:mb-0
              md:border-0

lg:border-0

              items-center"
              >
                <p className="text-base">روش تحویل سفارش</p>
                <CiDeliveryTruck className="text-3xl ml-1" />
              </div>
            </section>
            <section
              className="
        md:w-[300px] 
        lg:w-auto
        xl:w-auto

       
             border-2 border-slate-200 rounded-xl 
             
             "
            >
              <div
                className="

h-[400px]  w-auto

md:h-full
 lg:h-full

                 md:gap-x-8  

                 lg:gap-x-8  

                 flex-wrap
                 xl:gap-x-16  
              flex justify-center items-center  
               "
              >
                <section
                  className=" 
                  h-[100px]
                  md:h-[100px]
                  lg:h-[100px]
                  xl:h-[200px]
m-1
                md:w-[120px]  
                lg:w-[220px]  
                xl:w-[220px]  
                  border-2 border-slate-200"
                ></section>
                <div
                  className="flex 
                 flex-wrap max-w-[280px]  mt-4  justify-end items-center"
                >
                  <div className="flex flex-wrap w-auto mb-8  justify-end items-center">
                    <h1 className="">آدرس شعبه اکباتان</h1>
                    <CiLocationOn className="mr-2 text-3xl ml-1" />
                  </div>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-2 opacity-60">
                    شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱
                  </h3>
                  <h3 className="w-full text-right mr-2 text-xs mb-8 opacity-60">
                    ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل
                  </h3>
                  <button
                    className="border-2 border-slate-300 
                    md:mr-24 
                    lg:mr-24 
                  rounded-md opacity-70 text-sm 
                  w-full
                  md:w-1/2 
                  lg:w-1/2 
                  h-8"
                  >
                    {"مشاهده در نقشه"}
                  </button>
                </div>
              </div>
            </section>
            <section
              className="
              h-24
              w-72
              lg:w-[460px]
              xl:w-[560px]
              md:h-12

              lg:h-12
              xl:h-32
           
             border-2 border-slate-200  rounded-xl 
             "
            >
              <div
                className="flex flex-wrap w-full 
                lg:mt-1
                xl:mt-6
                  opacity-50 
               justify-end items-center"
              >
                <h1
                  className="
                md:text-base
                lg:text-base
                xl:text-lg
                "
                >
                  (اختیاری) توضیحات سفارش{" "}
                </h1>

                <FaRegEdit
                  className="mr-2

                md:text-xl
                lg:text-xl
                xl:text-2xl
                 ml-1 mr-6"
                />
              </div>
            </section>
          </section>
        </section>
      </form>
      <div
        className="
        w-[350px]
        h-[800px]
        md:w-[930px]
        lg:w-[960px]
        xl:w-auto

        md:h-[260px] 
        lg:h-[260px] 
        md:bg-position-[center_bottom_-420px] 
        lg:bg-position-[center_bottom_-420px] 
flex-wrap

       bg-cover flex justify-center items-center bg-no-repeat 
       bg-[url(/home/image-3.jpg)]
       "
      >
        <section
          className="
        h-[400px]
        w-[280px]
        md:h-[190px]
        lg:h-[200px]
        md:w-[320px]
        
        lg:w-[450px]
        xl:w-[600px]
        flex 
          justify-end items-center  flex-wrap"
        >
          <div
            className="flex  flex-wrap 
           w-[350px]
        

        md:w-[200px]
        lg:w-[200px]
        xl:w-[300px]

           justify-center"
          >
            <textarea
              className="
              w-full
              md:w-[100px]

              lg:w-[160px]
              xl:w-[260px]
              p-4 placeholder-slate-300 text-xs 
                text-right h-[120px]
          mt-8 bg-transparent border-slate-400 border-1 rounded-md"
              placeholder="پیام شما"
            ></textarea>
            <button
              className="bg-transparent mt-4 border-slate-400 border-1 h-8 rounded-md
              px-2 text-slate-300 text-xs 
               md:w-32
              lg:w-32
              xl:w-32 text-center "
            >
              ارسال پیام
            </button>
          </div>
          <div
            className="
            w-[350px]
        md:w-[120px]
        lg:w-[170px]
        xl:w-[270px]

        justify-center

        md:justify-end
        lg:justify-end

           h-[160px] flex    flex-wrap"
          >
            <h1
              className="
            text-center

            md:text-right
            lg:text-right
            text-white  
             w-full text-lg"
            >
              {" "}
              پیام به ترخینه
            </h1>
            <input
              className="
              md:w-32
              lg:w-52
              xl:w-52

              bg-transparent border-slate-400 border-1 h-8 rounded-md
             px-2 placeholder-slate-300 text-xs 
               text-right "
              placeholder=" نام نام خانوادگی"
            ></input>
            <input
              className="bg-transparent border-slate-400 border-1 h-8
             rounded-md px-2 placeholder-slate-300 text-xs  md:w-32
              lg:w-52
              xl:w-52 text-right"
              placeholder="شماره تماس"
            ></input>
            <input
              className="bg-transparent border-slate-400 border-1 h-8
             rounded-md px-2 placeholder-slate-300 text-xs  md:w-32
              lg:w-52
              xl:w-52 text-right"
              placeholder=" آدرس ایمیل(اختیاری)"
            ></input>
          </div>
        </section>
        <section
          className="
        w-[350px]
        md:w-[140px]
        
        lg:w-[200px]
        xl:w-[300px]
        justify-end
        

        flex h-[160px] 
          gap-4 flex-wrap"
        >
          <h1
            className="text-white
            text-center  
          md:text-right
          text-base

          md:text-base

          lg:text-right
           w-full text-lg"
          >
            {" "}
            شعبه های ترخینه
          </h1>
          <Link
            className="text-white text-xs opacity-80 w-full    text-center  
          md:text-right
          lg:text-right "
            href="#"
          >
            {"   شعبه اکباتان"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full   text-center  
          md:text-right
          lg:text-right"
            href="#"
          >
            {"  شعبه اقدسیه"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full   text-center  
          md:text-right
          lg:text-right"
            href="#"
          >
            {"   شعبه چالوس"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full   text-center  
          md:text-right
          lg:text-right"
            href="#"
          >
            {"   شعبه ونک"}
          </Link>
        </section>
        <section
          className="flex
     
        md:w-[200px]
        lg:w-[200px]
        xl:w-[350px]
         px-6 justify-end gap-4 flex-wrap"
        >
          <h1
            className="text-white    text-center  
          md:text-right
          lg:text-right w-full text-lg"
          >
            دسترسی آسان
          </h1>
          <Link
            className="text-white text-xs opacity-80 w-full    text-center  
          md:text-right
          lg:text-right "
            href="#"
          >
            {" پرسش های متداول"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full   text-center  
          md:text-right
          lg:text-right"
            href="#"
          >
            {" قوانین ترخینه"}
          </Link>
          <Link
            className="text-white text-xs opacity-80 w-full   text-center  
          md:text-right
          lg:text-right"
            href="#"
          >
            {"  حریم خصوصی"}
          </Link>
          <div
            className="flex
          justify-center

          md:justify-end
          lg:justify-end
           gap-x-4 text-xl text-white w-full"
          >
            <FaTelegramPlane />
            <FaInstagram />
            <CiTwitter />
          </div>
        </section>
      </div>
    </div>
  );
}
