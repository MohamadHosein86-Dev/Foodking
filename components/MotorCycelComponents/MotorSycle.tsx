"use client";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { TbTruckDelivery } from "react-icons/tb";

export default function MotorSycle() {
  const motorCycleRef = useRef(null);
  const motorCycle = useScroll({
    target: motorCycleRef,
    offset: ["start end", "end start"]
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);
  const forMotorCycle = useTransform(motorCycle.scrollYProgress, [0, 0.5, 0.7, 1], [230, 55, 15, 0]);
  return (
    <div ref={ref}>
      <motion.svg className="fixed bottom-4 left-4" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth="4" fill="none" />
        <motion.circle cx="30" cy="30" r="26" stroke="#cd0808" strokeWidth="4" fill="none" strokeDasharray="164" strokeDashoffset="164" style={{ strokeDashoffset }} />
      </motion.svg>
      <div
        className="
justify-center
md:justify-center
lg:justify-center

xl:justify-center
2xl:justify-center

w-full flex 
  bg-[#e7ed70] mt-24 
bg-cover bg-center h-96
bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image.jpg)]"
      >
        <section
          className="
 
  w-24

relative  h-full"
        >
          <motion.div
            // initial={{ y: 1 }}

            animate={{ y: [-33, 3, -33] }}
            transition={{
              duration: 3,
              ease: "easeInOut",

              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-24  
    absolute right-0 top-40 h-20 transition-all 
   bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/chilli.png)]"
          ></motion.div>
        </section>
        <section
          className="
 
  justify-start
  w-3/5

md:justify-center 
md:w-3/5 
lg:justify-center
lg:w-1/5 
xl:justify-center
xl:w-1/4 
2xl:justify-center 
2xl:w-1/4
flex 
items-center "
        >
          <button
            className="
    w-48
     md:w-64 
     lg:w-64 
     xl:w-64 
     2xl:w-64 
     hidden sm:block
    h-16 group relative
   font-semibold rounded-xl bg-slate-100"
          >
            <div
              className="w-full h-full z-10 group-hover:text-white absolute inset-0 flex 
      items-center 
      justify-center space-x-1
      font-semibold"
            >
              <h1
                className="
        font-semibold
        text-xs
       md:text-base
     lg:text-base
     xl:text-base
     2xl:text-base
      "
              >
                اکنون سفارش دهید
              </h1>
              <TbTruckDelivery
                className="text-green-700
       transition-all duration-500 group-hover:text-white text-2xl"
              />
            </div>
            <span
              className="absolute inset-0 w-full h-full  rounded-xl 
       scale-0 group-hover:scale-100
     transition-all duration-500 ease-out origin-center"
            ></span>
          </button>
        </section>

        <section
          className="
sm:w-0
md:w-0
  
lg:w-[552px]
xl:w-[552px]
2xl:w-[622px]
relative"
        >
          <motion.div
            ref={motorCycleRef}
            transition={{ duration: 14 }}
            style={{ translateX: forMotorCycle as any }}
            className="
    absolute 
    inset-0
  hidden
 
bg-none
md:hidden
md:scale-80
     lg:block
     xl:block
     2xl:block
lg:scale-95
xl:scale-100
2xl:scale-100
  md:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
md:-translate-x-36
  lg:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
lg:-translate-x-36
  xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
xl:-translate-x-36
  2xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]
2xl:-translate-x-36
  w-[400px] h-[350px]
  transition-all duration-700 -translate-y-5 
 "
          ></motion.div>
        </section>
        <section
          className="
   
w-[220px]

 sm:w-[350px]

    md:w-[370px]
     
     lg:w-[450px]
     
     xl:w-[520px]
    
     2xl:w-[720px]

 
 h-full relative"
        >
          <div
            className="w-[400px] z-10 
    -left-64
  md:-left-36
  lg:-left-20
    
  xl:-left-12
  
  2xl:-left-1
   top-36 absolute  h-1/2"
          >
            <h1
              className="text-amber-300
    text-xl text-right w-full font-semibold "
            >
              ترد، هر لقمه طعم
            </h1>
            <h1
              className="
      text-3xl
      md:text-4xl 
     lg:text-5xl 
     xl:text-5xl 
     2xl:text-6xl 
     
    text-white text-right
      w-full font-semibold "
            >
              دقیقه سریع 45
            </h1>
            <div className="flex  justify-end">
              <h1
                className="text-white text-right 
         text-2xl
      md:text-4xl 
     lg:text-5xl 
     xl:text-5xl 
     2xl:text-6xl 
      font-semibold "
              >
                قول ما
              </h1>
              <h1
                className="
text-2xl
      md:text-4xl 
     lg:text-5xl 
     xl:text-5xl 
     2xl:text-6xl 
      text-amber-300 text-right   font-semibold "
              >
                تحویل
              </h1>
            </div>
          </div>
          <motion.div
            // initial={{ y: 1 }}
            animate={{ y: [-33, 3, -33] }}
            transition={{
              duration: 3,
              ease: "easeInOut",

              repeat: Infinity,
              repeatType: "loop"
            }}
            className="  
    top-36
    absolute
    z-0
   right-0
 

w-24
  
    h-1/2 transition-all 
 
   bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/image-11.png)]"
          ></motion.div>
        </section>
      </div>
    </div>
  );
}
