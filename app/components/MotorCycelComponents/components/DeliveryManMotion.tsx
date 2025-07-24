"use client";
import { motion } from "framer-motion";

export default function DeliveryManMotion({ motorCycleRef, forMotorCycle }: { motorCycleRef: any; forMotorCycle: any }) {
  return <motion.div ref={motorCycleRef} transition={{ duration: 14 }} style={{ translateX: forMotorCycle }} className="absolute inset-0 hidden h-88 w-100 -translate-y-5 transition-all duration-700 md:hidden md:scale-80 lg:block lg:-translate-x-36 lg:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] xl:block xl:-translate-x-36 xl:scale-100 xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)] 2xl:block 2xl:-translate-x-36 2xl:scale-100 2xl:bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/08/delivery-man-2.png)]" />;
}
