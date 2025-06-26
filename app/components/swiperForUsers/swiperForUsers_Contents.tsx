import { FaStar } from "react-icons/fa";
export default function SwipperComponents({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-wrap justify-center items-center cursor-pointer">
      <h1 className="w-full text-center text-xl font-semibold ">{title}</h1>
      <h2 className="w-full text-center text-xl text-red-600 font-semibold ">
        {subTitle}
      </h2>
      <h2 className="w-full text-center mt-6 text-xl">{description}</h2>
      <section className=" flex space-x-1 mt-4">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </section>
    </div>
  );
}
