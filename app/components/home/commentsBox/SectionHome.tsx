interface propstype {
  logo: string;
  Title: string;
  desc: string;
}
export default function CommentsBox({ logo, Title, desc }: propstype) {
  return (
    <div className=" text-center sm:text-right  ">
      <img className=" mx-auto sm:m-0 " src={logo} alt="" />
      <h2 className=" font-bold text-2xl py-3.5 ">{Title} </h2>
      <p className=" text-sm font-semibold ">{desc} </p>
    </div>
  );
}
