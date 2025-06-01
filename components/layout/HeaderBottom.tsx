import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HeaderBottom({ showSticky, open }: { showSticky: boolean }) {
  const curentUrl = usePathname();
  if (curentUrl == "/")
    return (
      <div className="  flex-col-reverse lg:flex-row  relative pt-[4rem] text-end mx-auto max-w-[82rem]  py-[3rem] items-center flex justify-between lg:px-[4rem] px-[1.5rem] xl:px-[1.5rem]  ">
        <div className=" z-1 ">
          <motion.img
            src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-4.png" // یا هر آدرس تصویر دیگه
            alt="Pizza"
            className=" mt-[2rem] mx-auto lg:ml-auto xl:mt-[9rem] w-[80%] lg:w-[120%]  xl:w-[90%] " // اندازه دلخواه
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20, // مدت زمان برای هر دور چرخش
              ease: "linear"
            }}
          />
          <img className=" absolute top-[8rem]  left-[-2.8rem]  xl:block  hidden   " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-5.png" alt="" />
          <img className={` absolute top-[7.2rem] right-[-2rem]  xl:block  hidden  ${showSticky ? "z-0" : "z-[100] "} `} src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2.png" alt="" />
          <img className=" absolute top-[4rem] right-[40rem]  xl:block  hidden  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-3.png" alt="" />
          <img className=" absolute top-[46.5rem]  left-[79.1rem] xl:block  hidden   " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2-1.png" alt="" />
          <img className=" absolute top-[52rem] left-[46em]   xl:block  hidden  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-4.png" alt="" />
          <img className=" absolute top-[47rem]  left-[-4.4rem]  xl:block  hidden  " src="https://t-theme.com/foodking/wp-content/uploads/2024/02/frame-6.png" alt="" />
        </div>
        <div className={` xl:w-[40%]  w-[100%] ${showSticky || open ? "z-1" : "z-[1000000]"}   mt-[4.2rem] `}>
          <h1 className=" text-[#ffff] text-center lg:text-right  font-semibold leading-[4rem] sm:leading-[5rem] lg:leading-[8.5rem] xl:leading-[9.8rem] mt-[-6rem] xl:mt-[-10rem] text-[3rem] sm:text-[4rem] lg:text-[7rem] xl:text-[8rem] xl:ml-auto ">پیتزای فوق العاده خوشمزه </h1>
          <h4 className=" text-[#ffff] text-center text-[1.4rem] font-semibold mt-[1.5rem] sm:mt-[3rem] mb-[2rem] mx-auto xl:ml-auto  ">فقط با 25 هزارتومان سفارش خود را ستاره دار کنید</h4>
          <button
            className="relative mx-auto md:ml-auto overflow-hidden outline-none rounded-md cursor-pointer  bg-[#FFB936] text-black font-bold 
            w-[16.5rem] py-[1rem] pb-[1.3rem] px-[1rem] flex  items-center justify-center gap-[.5rem] group h-16"
          >
            {/* لایه انیمیشنی با ترنزیشن scale از وسط */}
            <span className="absolute inset-0 bg-[#ffff] scale-0 origin-center transition-transform duration-500 ease-out group-hover:scale-100 z-0 rounded-md" />

            {/* محتوای دکمه بالای لایه رنگ */}
            <span className="relative z-10 flex items-center gap-2 text-base ">
              <FaArrowLeft className=" mb-[-.5rem] " size={20} />
              اکنون سفارش دهید
            </span>
          </button>
        </div>
      </div>
    );
}
