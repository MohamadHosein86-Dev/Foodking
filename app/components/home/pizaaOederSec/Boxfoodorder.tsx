import { FaArrowLeft } from "react-icons/fa";

interface propsType {
  logo: string;
  Title: string;
}
export default function Boxfoodorder({ logo, Title }: propsType) {
  return (
    <div className=" flex  items-center mt-24  ">
      <img className=" max-w-44 sm:max-w-32 " src={logo} alt="" />
      <div className=" text-center flex flex-col items-center max-w-68 -mr-8 ">
        <h2 className=" font-bold text-lg sm:text-2xl w-[72%]  ">{Title}</h2>
        <span className="relative mt-4 cursor-pointer text-base font-bold flex items-center gap-2 text-black hover:text-red-600 transition-colors duration-300 group">
          اکنون سفارش دهید <FaArrowLeft />
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
    </div>
  );
}
