interface propstype {
  logo: string;
  Title: string;
  desc: string;
}
export default function CommentsBox({ logo, Title, desc }: propstype) {
  return (
    <div className=" text-center sm:text-right  ">
      <img className=" mx-auto sm:m-0 " src={logo} alt="" />
      <h2 className=" font-bold text-[1.6rem] py-[.9rem] ">{Title} </h2>
      <p className=" text-[14px] font-semibold ">{desc} </p>
    </div>
  );
}
