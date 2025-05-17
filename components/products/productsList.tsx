"use client"; // مطمئن شوید که این یک Client Component است

import React, { useEffect, useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data); // محصولات را در state ذخیره کنید
      } catch (e: any) {
        setError(e.message); // خطا را در state ذخیره کنید
      } finally {
        setLoading(false); // وضعیت لودینگ را پایان دهید
      }
    }

    fetchProducts(); // تابع دریافت محصولات را اجرا کنید
  }, []); // آرایه وابستگی خالی به معنی اجرای این useEffect فقط یک بار بعد از mount شدن کامپوننت است

  if (loading) return <p>در حال دریافت محصولات...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div>
      <h1>لیست محصولات</h1>
      {/* در اینجا می‌توانید محصولات را نمایش دهید */}
      {/* مثال: */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
