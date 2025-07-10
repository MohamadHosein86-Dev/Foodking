import { FaArrowLeft } from "react-icons/fa";

interface propsType {
  logo: string;
  Title: string;
}
export default function Boxfoodorder({ logo, Title }: propsType) {
  return (
    <div className=" flex  items-center mt-[6rem]  ">
      <img className=" max-w-[11rem] sm:max-w-[8rem] " src={logo} alt="" />
      <div className=" text-center flex flex-col items-center max-w-[17rem] mr-[-2rem] ">
        <h2 className=" font-bold text-[1.2rem] sm:text-[1.8rem] w-[72%]  ">{Title}</h2>
        <span className="relative mt-[1rem] cursor-pointer text-[15px] font-bold flex items-center gap-[.5rem] text-black hover:text-red-600 transition-colors duration-300 group">
          اکنون سفارش دهید <FaArrowLeft />
          <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
    </div>
  );
}
