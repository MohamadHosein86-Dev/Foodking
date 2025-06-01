"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalLoginUser({ setOpen }: PropsType) {
  const router = useRouter();

  const [step, setStep] = useState<"signup" | "verify">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "ثبت‌نام ناموفق بود");

      // بعد از ثبت‌نام موفق، کد تأیید را دریافت می‌کنیم
      const res2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
      });

      const data2 = await res2.json();
      if (!res2.ok) throw new Error(data2?.message || "خطا در ارسال کد تأیید");

      alert(`کد ارسال‌شده: ${data2.code}`); // حذف کن توی پروجکت واقعی
      setStep("verify");
    } catch {
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
        name,
        email,
        redirect: false
      });

      if (result?.error) {
        setError("کد وارد شده اشتباه است.");
      } else {
        setOpen(false);
        router.push("/dashboard");
      }
    } catch {
      setError("مشکلی در ورود پیش آمد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-[90rem] z-[10000000] h-full text-black px-9 py-9 mx-auto">
      <div className="flex justify-between items-center mb-6">
        {step === "verify" && (
          <svg onClick={() => setStep("signup")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.8} stroke="currentColor" className="cursor-pointer text-[#5C5C5B] size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        )}
        <h1 className="text-xl text-[#d15858] font-semibold text-center w-full"> ورود به فودکینگ </h1>
        <button onClick={() => setOpen(false)} className="text-[#5C5C5B] p-1 rounded-full text-2xl">
          ×
        </button>
      </div>

      {step === "signup" && (
        <form onSubmit={handleSignupSubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <Image className="w-[8.5rem] mx-auto" src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="logo" />
          <p className="text-[#555555] mt-2 text-center text-sm mb-4">ثبت‌نام برای دریافت کد تأیید</p>
          <input type="text" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="نام کامل" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="شماره موبایل" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="password" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="bg-[#D12525] text-white py-3 rounded-xl mt-2">
            {loading ? "در حال ارسال..." : "ثبت‌نام و دریافت کد"}
          </button>
        </form>
      )}

      {step === "verify" && (
        <form onSubmit={handleVerifySubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">تأیید شماره موبایل</h1>
          <input type="text" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="کد تأیید" value={code} onChange={(e) => setCode(e.target.value)} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="bg-green-600 text-white py-3 rounded-xl">
            {loading ? "در حال ورود..." : "تأیید و ورود"}
          </button>
        </form>
      )}
    </div>
  );
}
