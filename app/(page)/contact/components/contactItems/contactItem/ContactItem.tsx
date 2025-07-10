export default function ContactItem({ Title, image, email, info }: { Title: string; image: string; email: string; info: string }) {
  return (
    <div className=" hover:bg-[#00813D] group transition ease-in delay-200 hover:text-white text-black  cursor-pointer rounded-[.5rem]  bg-[#ffff] flex-col flex justify-center items-center w-full px-[2.5rem] py-[3.8rem] ">
      <img alt="Image Loading..." src={image} />
      <h2 className=" mt-[1.2rem] mb-[.7rem]  font-bold text-2xl "> {Title}</h2>
      <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-[1rem] font-semibold mb-[.2rem] "> {email} </p>
      <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-[1rem] font-semibold "> {info} </p>
    </div>
  );
}
