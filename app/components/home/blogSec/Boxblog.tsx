interface propsType {
  logo: string;
  Title: string;
  des: string;
}
export default function Boxblog({ logo, Title, des }: propsType) {
  return (
    <div className="  w-[90%] md:w-[25rem] ">
      <div className={` mx-auto w-full h-[280px]    ${logo} `}></div>
      <div className="p-8 bg-[#f4f4f4]  group">
        <div className="flex pb-[1rem] border-b justify-between transition-colors duration-300 group-hover:border-b-[#D12525] border-b-[#00813D]">
          <p className="font-semibold text-[#D12525]">{Title}</p>
          <p className="font-semibold text-[#5C5C5B]">۲۵ تیر ۱۴۰۳</p>
        </div>

        <div className="relative mt-[1rem] text-right">
          <h2 className="font-semibold cursor-pointer text-[1.2rem] text-black transition-colors duration-300 group-hover:text-[#D12525] z-10 relative">{des}</h2>
        </div>
      </div>
    </div>
  );
}
