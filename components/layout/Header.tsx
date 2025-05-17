"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import HeaderHomePage from "./HeaderHomePage";
import HeaderSecond from "../HeaderSecond";
import getProducts from "@/app/products/getProducts";

export default function Header() {
  const curentUrl = usePathname();

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      if (products) {
        console.log(
          "Products:",
          products.map((res) => res.name)
        );
      } else {
        console.log("No products received or data is not an array");
      }
    }

    fetchData();
  }, []); // فقط یکبار اجرا میشه بعد از mount

  return <header>{curentUrl === "/" ? <HeaderHomePage curentUrl={curentUrl} /> : <HeaderSecond />}</header>;
}
