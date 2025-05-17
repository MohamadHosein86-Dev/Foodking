export default async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("خطا در دریافت محصولات");
    }

    const data = await res.json();

    // اگر خروجی JSON شکلی شبیه { data: [...] } داشت:
    // return Array.isArray(data) ? data : data.data;


    return data;
  }
   catch (error) {
    console.error("❌ Fetch error:", error);
    return []; // این خط ضروریه ✅
  }
}
