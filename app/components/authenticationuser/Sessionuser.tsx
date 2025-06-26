"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function Sessionuser({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession();
  console.log(data + "ussseeerrrrrrrrr" + status);

  if (!data?.accessToken) return <div>{children}</div>;
  if (data?.accessToken) {
    <h2>پروفایل</h2>;
  }
}
