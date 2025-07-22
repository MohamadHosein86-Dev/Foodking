import React from "react";

interface PropsType {
  children: React.ReactNode;
  flex: string;
}
export default function Container({ children, flex }: PropsType) {
  const flexBox = flex ? flex : "";
  return <div className={`${flexBox} pt-32 max-w-7xl px-4 sm:px-12 mx-auto gap-4 xl:px-6 py-3`}>{children}</div>;
}
