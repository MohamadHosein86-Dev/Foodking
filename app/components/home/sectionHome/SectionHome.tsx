import Image from "next/image";

interface propstype {
  logo: string;
  titel: string;
  desc: string;
}
export default function SectionHome({ logo, titel, desc }: propstype) {
  return (
    <div className=" text-center sm:text-right  ">
      <img h className=" mx-auto sm:m-0 " src={logo} alt="" />
      <h2 className=" font-bold text-[1.6rem] py-[.9rem] ">{titel} </h2>
      <p className=" text-[14px] font-semibold ">{desc} </p>
    </div>
  );
}
