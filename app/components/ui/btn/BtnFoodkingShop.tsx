import { FaArrowLeftLong } from "react-icons/fa6";

export default function BtnFoodkingShop({ Title }: { Title: string }) {
  return (
    <button className=" cursor-pointer  px-[14px] py-[7px] rounded-[20px] flex items-center gap-[10px] text-[#417F56] bg-[#E5F2E9] ">
      {Title}
      <span>
        <FaArrowLeftLong />
      </span>
    </button>
  );
}
