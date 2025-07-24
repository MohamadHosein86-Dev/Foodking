import Link from "next/link";

export default function AddressSection() {
    return (
      <div className="w-60">
        <h2 className="mb-8 font-bold text-lg">آدرس :</h2>
        <ul className="flex flex-col">
          <li>
            <Link href="/" className="text-lg text-[#5c5c5b] font-medium">
              ، نیویورک، نیویورک <span className="text-[#d12525]">10018</span> ایالات متحده
            </Link>
          </li>
          <li>
            <h2 className="mb-4 font-bold text-lg mt-8">ساعت :</h2>
          </li>
          <li>
            <p className="text-[#5c5c5b] text-lg font-medium">از ساعت 9:30 الی 18:30 از دوشنبه تا جمعه</p>
          </li>
        </ul>
      </div>
    );
  }