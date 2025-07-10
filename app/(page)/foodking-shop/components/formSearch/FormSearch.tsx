import { FaSearch } from "react-icons/fa";

export default function FormSearch() {
  return (
    <form className=" relative w-[31%] ">
      <input className=" border-[2px] text-black font-semibold pb-[12px] pr-[.5rem] rounded-[.5rem] py-[.4rem] w-[100%] border-gray-300 " placeholder="جستجو" type="text" />
      <span className=" absolute top-[1rem] left-[.7rem] ">
        <FaSearch color="gray" />
      </span>
    </form>
  );
}
