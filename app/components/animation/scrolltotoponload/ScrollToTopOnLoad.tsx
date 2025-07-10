// components/ScrollToTopOnLoad.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    setTimeout(scrollToTop, 100);
  }, []);

  return null;
}
