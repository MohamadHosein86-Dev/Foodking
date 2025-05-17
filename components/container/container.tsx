import React from "react";

interface PropsType {
  children: React.ReactNode;
  flex: string;
}
export default function Container({ children, flex }: PropsType) {
  const flexBox = flex ? flex : "";
  return <div className={` ${flexBox} pt-[8rem]   max-w-[82rem] px-[1rem] sm:px-[3rem]  mx-auto  gap-[1rem] xl:px-[1.6rem]  py-[.7rem] `}>{children}</div>;
}
