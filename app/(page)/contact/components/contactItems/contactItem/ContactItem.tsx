export default function ContactItem({ Title, image, email, info }: { Title: string; image: string; email: string; info: string }) {
  return (
    <div className=" hover:bg-[#00813D] group transition ease-in delay-200 hover:text-white text-black  cursor-pointer rounded-lg  bg-[#ffff] flex-col flex justify-center items-center w-full px-10 py-15 ">
      <img alt="Image Loading..." src={image} />
      <h2 className=" mt-5 mb-3  font-bold text-2xl "> {Title}</h2>
      <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-base font-semibold mb-1 "> {email} </p>
      <p className=" text-[#5C5C5B] group-hover:text-white transition ease-in delay-200 text-base font-semibold "> {info} </p>
    </div>
  );
}
