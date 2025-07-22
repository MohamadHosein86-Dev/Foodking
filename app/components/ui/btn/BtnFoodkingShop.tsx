import { FaArrowLeftLong } from "react-icons/fa6";

export default function BtnFoodkingShop({ Title }: { Title: string }) {
  return (
    <button className=" cursor-pointer  px-3.5 py-2 rounded-full flex items-center gap-2.5 text-[#417F56] bg-[#E5F2E9] ">
      {Title}
      <span>
        <FaArrowLeftLong />
      </span>
    </button>
  );
}
