"use client";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalLoginUser({ setOpen }: PropsType) {
  const router = useRouter();

  const [step, setStep] = useState<"phone" | "verify">("phone");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [phone1, setPhone1] = useState("");
  const [password, setpas] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePhoneSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
      });

      const text = await res.text();

      if (!text) {
        setError("پاسخ خالی از سرور دریافت شد");
        return;
      }
      const data = JSON.parse(text);
      console.log("kirrr = ", data);

      if (res.ok) {
        alert(`yourcode = ${data.code}`);
        setStep("verify");
      } else {
        setError(" لطفا فیلد هارو درست پر کنید ");
      }
    } catch {
      setError("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        phone,
        code,
        redirect: false
      });

      if (result?.error) {
        setError("کد وارد شده اشتباه است.");
      } else {
        setOpen(false);
        router.push("/dashboard");
      }
    } catch {
      setError("مشکلی در ورود پیش آمده");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-[90rem] z-[10000000]   h-full text-black  px-9 py-9 mx-auto">
      <div className="flex  max-w-[90rem] justify-between items-center mb-6">
        <svg onClick={() => setStep("phone")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className=" cursor-pointer text-[#5C5C5B] size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <h1 className="text-xl text-[#d15858] font-semibold text-center "> ورود به فودکینگ </h1>
        <button onClick={() => setOpen(false)} className=" z-[1000]  cursor-pointer text-[#5C5C5B] p-1 rounded-[6rem] text-2xl ">
          ×
        </button>
      </div>

      {step === "phone" && (
        <form onSubmit={handlePhoneSubmit} className="  max-w-sm mx-auto  flex flex-col gap-4">
          <img className=" w-[8.5rem]  mx-auto   " src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="logo" />
          <p className=" text-[#555555] mt-[.5rem] text-center text-[.9rem] mb-[1rem] ">با وارد کردن شماره موبایل، کد تایید برای شما ارسال خواهد شد</p>
          <input type="text" className=" border-gray-300 outline-none border rounded-[1rem] px-3 py-3" placeholder="شماره موبایل" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className={` mt-[1rem] ${name && email && phone} bg-[#D12525]  text-white py-3 rounded-[.8rem] `}>
            {loading ? "در حال ارسال..." : "ارسال کد تایید"}
          </button>
          <p className=" text-[#5C5C5B] mt-[.5rem] text-center text-[.8rem] ">
            ورود و عضویت در فودکینگ به منزله قبول<span className=" text-[#D12525] "> قوانین و مقررات</span> است
          </p>
        </form>
      )}

      {step === "verify" && (
        <form onSubmit={handleVerifySubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center"> ثبت شماره در سایت </h1>
          <input type="text" className=" border-gray-300 outline-none border rounded-[1rem] px-3 py-3" placeholder=" تلفن " value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="text" className=" border-gray-300 outline-none border rounded-[1rem] px-3 py-3" placeholder=" کد " value={code} onChange={(e) => setCode(e.target.value)} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className="bg-green-500 text-white py-2 rounded">
            {loading ? "در حال ورود..." : "تایید و ورود"}
          </button>
        </form>
      )}
    </div>
  );
}
