import React, { useEffect, useRef } from "react";

interface OtpInputProps {
  code: string;
  length?: number;
}

const OtpInput = ({ code = "", length = 5 }: OtpInputProps) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (code.length === length) {
      const digits = code.split("");
      digits.forEach((digit, index) => {
        const input = inputsRef.current[index];
        if (input) {
          input.value = digit;
        }
      });
    }
  }, [code, length]);

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={(el) => {
            if (el) inputsRef.current[index] = el;
          }}
          className="w-12 h-12 text-center text-xl border rounded border-[#D12525] border-2 focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;
