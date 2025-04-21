"use client";
interface PropsType {
  setOpen: () => void;
}

export default function ModalHeader({ setOpen }: PropsType) {
  const imageStyles = "w-20 h-20 rounded-md bg-center bg-cover";
  const images = ["url('/burger.jpg')", "url('/kebab.jpg')", "url('/grill.jpg')", "url('/meal.jpg')", "url('/bbq.jpg')", "url('/fire.jpg')"];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <button onClick={setOpen} className="text-red-500 text-2xl font-bold mb-4">
        ×
      </button>
      <h2 className="text-xl font-bold mb-2">فودکینگ</h2>
      <p className="text-sm text-gray-600 mb-4">این شامل تعاملات بین یک کسب و کار و مشتریان آن است. این در مورد رفع نیازهای مشتریان و حل مشکلات آن‌هاست. خدمات مؤثر به مشتری بسیار مهم است.</p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {images.map((bg, index) => (
          <div key={index} className={`${imageStyles}} style={{ backgroundImage: bg }`}></div>
        ))}
      </div>

      <div className="text-sm">
        <p className="mb-1">خیابان اصلی، ملبورن، استرالیا</p>
        <p className="mb-1">info@foodking.com</p>
        <p className="mb-1">یکشنبه - جمعه، ۹ صبح تا ۵ بعد از ظهر</p>
        <p className="mb-4">+۹۰۹۹۴۵۳۲۱۱۰۰</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded">اکنون سفارش دهید</button>
      </div>
    </div>
  );
}
