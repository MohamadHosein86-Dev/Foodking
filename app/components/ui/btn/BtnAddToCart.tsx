interface propsType {
  bg: string;
  text: string;
  onclick: () => void;
}
export default function BtnAddToCart({ onclick, bg, text }: propsType) {
  return (
    <button onClick={onclick} className="relative cursor-pointer w-full mt-12 group rounded-full h-10 overflow-hidden">
      <div className={` ${bg} scale-x-0 origin-center duration-500 group-hover:scale-x-100 absolute inset-0 z-0 transition-transform rounded-full `}></div>
      <div className="relative z-10 flex justify-center items-center h-full w-full">
        <p className="text-black group-hover:text-white px-4 py-2.5 text-sm font-semibold transition-colors duration-500">{text}</p>
      </div>
    </button>
  );
}
