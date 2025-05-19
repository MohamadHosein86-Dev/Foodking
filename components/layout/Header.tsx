"use client";

import { usePathname } from "next/navigation";
import HeaderHomePage from "./HeaderHomePage";
import HeaderSecond from "./HeaderSecond";

export default function Header() {
  const curentUrl = usePathname();

  return <header>{curentUrl === "/" ? <HeaderHomePage curentUrl={curentUrl} /> : <HeaderSecond />}</header>;
}
