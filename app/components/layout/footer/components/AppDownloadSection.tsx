import Link from "next/link";

export default function AppDownloadSection() {
  return (
    <div className="pt-4">
      <h2 className="mb-8 font-medium text-lg">برنامه را نصب کنید</h2>
      <ul className="flex flex-col text-lg font-normal text-[#5c5c5b]">
        <li className="font-medium text-[#515151]">از اپ استور یا گوگل پلی</li>
        <li>
          <div className="my-8 ml-auto items-center flex gap-1">
            <Link href="">
              <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/google-play.png" alt="" />
            </Link>
            <Link href="">
              <img src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/app-store.png" alt="" />
            </Link>
          </div>
        </li>
        <li className="font-medium text-[#515151]">مرکز پشتیبانی 24/7</li>
        <li className="font-bold text-2xl text-[#00813d]">+718-904-4450</li>
      </ul>
    </div>
  );
}
