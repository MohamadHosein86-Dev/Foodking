"use client";

import { useEffect, useRef, useState } from "react";
const faMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const faDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
type Props = {
  value?: string;
  onChange?: (date: string) => void;
};
export default function DateInput({ value = "", onChange }: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(value);
  const [year, setYear] = useState<number>(1404);
  const [month, setMonth] = useState<number>(2); // 1 تا 12
  const [day, setDay] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  // تعداد روزها در ماه شمسی
  const getDaysInMonth = (month: number, year: number) => {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    const isLeap = (year % 33) % 4 === 1;
    return isLeap ? 30 : 29;
  };
  // وقتی کلیک بیرون تقویم انجام شد، بسته بشه
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  const handleSelectDate = (d: number) => {
    const padded = (num: number) => String(num).padStart(2, "0");
    const formatted = `${year}/${padded(month)}/${padded(d)}`;
    setSelectedDate(formatted);
    onChange?.(formatted);
    setDay(d);
    setShowCalendar(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    onChange?.(e.target.value);
  };
  const daysInMonth = getDaysInMonth(month, year);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const goToNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const goToPrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  return (
    <div className="relative" ref={ref}>
      <input type="text" value={selectedDate} onChange={handleInputChange} onFocus={() => setShowCalendar(true)} className="size-full placeholder:text-white p-2 focus:outline-none" placeholder="تاریخ رزرو را وارد کنید" />

      {showCalendar && (
        <div className="absolute bg-green-700 border rounded shadow p-4 mt-2 w-full z-10">
          {/* انتخاب دستی روز / ماه / سال */}
          <div className="flex gap-2 mb-4 justify-between">
            <input
              type="number"
              value={day ?? ""}
              onChange={(e) => {
                const val = +e.target.value;
                if (val >= 1 && val <= daysInMonth) {
                  handleSelectDate(val);
                }
              }}
              className="border-2 border-gray-700 rounded px-2 py-1 w-1/3"
              placeholder="روز"
            />
            <input type="number" value={month} onChange={(e) => setMonth(+e.target.value)} min={1} max={12} className="border-2 border-gray-700 rounded px-2 py-1 w-1/3" placeholder="ماه" />
            <input type="number" value={year} onChange={(e) => setYear(+e.target.value)} className="border-2 border-gray-700 rounded px-2 py-1 w-1/3" placeholder="سال" />
          </div>
          {/* هدربار ماه */}
          <div className="flex justify-between items-center mb-2">
            <button type="button" onClick={goToPrevMonth} className="text-sm cursor-pointer px-2 py-1 border-2 border-gray-700 rounded">
              قبلی
            </button>
            <span className="font-bold text-sm border-b-2 border-gray-700">
              {faMonths[month - 1]} {year}
            </span>
            <button type="button" onClick={goToNextMonth} className="text-sm cursor-pointer px-2 py-1 border-2 border-gray-700 rounded">
              بعدی
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {faDays.map((day, idx) => (
              <div key={idx} className="font-semibold text-gray-700">
                {day}
              </div>
            ))}
            {daysArray.map((d) => (
              <div key={d} onClick={() => handleSelectDate(d)} className={`cursor-pointer py-1 rounded-lg hover:bg-blue-100 hover:text-green-700 ${d === day ? "border-2 border-gray-700 text-white" : ""}`}>
                {d}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
