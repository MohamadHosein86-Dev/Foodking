import { FaSearch } from "react-icons/fa";

export default function FormSearch() {
  return (
    <form className=" relative w-3/10 ">
      <input className=" border-2 text-black font-semibold pb-3 pr-2 rounded-lg py-1.5 w-full border-gray-300 " placeholder="جستجو" type="text" />
      <span className=" absolute top-4 left-3 ">
        <FaSearch color="gray" />
      </span>
    </form>
  );
}
