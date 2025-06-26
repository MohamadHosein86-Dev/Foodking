// components/ScrollToTopOnLoad.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // انیمیشن اسکرول
      });
    };

    // صبر کن تا DOM لود شه بعد اسکرول کن
    setTimeout(scrollToTop, 100);
  }, []);

  return null; // چیزی نمایش نمی‌ده چون فقط اثر جانبی داره
}
