"use client";
import { signInUser, signUp } from "@/app/servises/authenticatin/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropsType {
  setOpen: (s: boolean) => void;
}

export default function ModalLoginUser({ setOpen }: PropsType) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", code: "" });
  const { name, email, phone, password, code } = form;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"signup" | "verify">("signup");

  async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      await signUp({ name, email, phone, password });
      const resp = await signInUser({ phone });
      alert(`کد ارسال‌شده: ${resp?.code}`);

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
    <div className="p-8 max-w-7xl z-[10000000]  h-full text-black px-9 py-8 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl text-[#d15858] font-black text-center w-full">{step === "verify" ? " ثبت نام در فودکینگ" : "  ورود به فودکینگ "}</h1>
        <button onClick={() => setOpen(false)} className="text-[#5C5C5B] p-1 rounded-full text-2xl">
          ×
        </button>
      </div>

      {step === "signup" && (
        <form onSubmit={handleSignupSubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <img className="w-34 mx-auto" src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="logo" />
          <p className="text-[#555555] mt-2 text-center text-sm mb-4">ثبت‌نام برای دریافت کد تأیید</p>
          <input type="text" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="نام کامل" value={name} onChange={(e) => setForm((pr) => ({ ...pr, name: e.target.value }))} required />
          <input type="email" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="ایمیل" value={email} onChange={(e) => setForm((pr) => ({ ...pr, email: e.target.value }))} required />
          <input type="tel" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="شماره موبایل" value={phone} onChange={(e) => setForm((pr) => ({ ...pr, phone: e.target.value }))} required />
          <input type="password" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="رمز عبور" value={password} onChange={(e) => setForm((pr) => ({ ...pr, password: e.target.value }))} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="bg-[#D12525] text-white py-3 rounded-xl mt-2">
            {loading ? "در حال ارسال..." : "ثبت‌نام و دریافت کد"}
          </button>
        </form>
      )}

      {step === "verify" && (
        <form onSubmit={handleVerifySubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">تأیید شماره موبایل</h1>
          <input type="text" className="border-gray-300 border rounded-xl px-3 py-3" placeholder="کد تأیید" value={code} onChange={(e) => setForm((pr) => ({ ...pr, code: e.target.value }))} required />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="bg-green-600 text-white py-3 rounded-xl">
            {loading ? "در حال ورود..." : "تأیید و ورود"}
          </button>
        </form>
      )}
    </div>
  );
}
