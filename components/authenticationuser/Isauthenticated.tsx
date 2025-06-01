// use celient"; // ✅ این باید use client باشد نه use celient
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react"; // ✅ اضافه کردن import React
import { FaUser } from "react-icons/fa";

interface PropsType {
  children: React.ReactNode;
}

export default function Isauthenticated({ children }: PropsType) {
  const { data: session, status } = useSession();
  const goProfile = useRouter();

  useEffect(() => {
    if (session?.accessToken) {
      console.log("Access Token یافت شد. ذخیره در localStorage...");
      localStorage.setItem("accessToken", session.accessToken);
    } else {
      console.log("Access Token یافت نشد یا session نامعتبر است. پاک کردن از localStorage...");
      localStorage.removeItem("accessToken");
    }
  }, [session]);

  if (status === "unauthenticated") {
    return <>{children}</>;
  } else if (status === "authenticated") {
    return <FaUser onClick={() => goProfile.push("/dashboard")} size={22} color="#FFB936" className=" cursor-pointer " />;
  }
}
