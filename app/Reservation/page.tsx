import { FaChevronLeft } from "react-icons/fa";
import DateInput from "@/components/date_Input_Reservation/Date_Input";
export default function Reservation() {
  return (
    <div className="w-full">
      <div className="bg-[url(https://t-theme.com/foodking/wp-content/uploads/2024/07/breadcrumb-1.jpg)] w-full flex justify-center items-center h-95">
        <div className="space-y-5">
          <h1 className="font-semibold text-6xl text-white">سایر اعضا</h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <h1 className="font-semibold text-xl text-green-700">
              صفحه اصلی
            </h1>
            <FaChevronLeft className="mt-2 text-base text-green-700" />
            <h1 className="font-semibold text-xl text-white">رزرواسیون</h1>
          </div>
        </div>
      </div>
      <div dir="rtl" className="min-h-screen flex items-center justify-center p-4">
        <div className="text-white bg-green-800 rounded-2xl p-6 md:p-10 w-full max-w-4xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">رزرو ایجاد کنید</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="نام"
                data-has-listeners="false"
                className="rounded-lg p-4 text-white focus:outline-none placeholder:text-white !border border-gray-100 focus:ring-gray-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="نام خانوادگی"
                data-has-listeners="false"
                className="rounded-lg p-4 text-white focus:outline-none placeholder:text-white !border border-gray-100 focus:ring-gray-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <select id="countries" className="border cursor-pointer border-gray-100 text-white rounded-lg focus:outline-none placeholder:text-white block w-full p-4">
                <option className="text-green-700">لطفا یک گزینه را انتخاب کنید</option>
                <option className="text-green-700" value="یک نفر">یک نفر</option>
                <option className="text-green-700" value="دو نفر">دو نفر</option>
                <option className="text-green-700" value="سه نفر">سه نفر</option>
                <option className="text-green-700" value="چهار نفر">چهار نفر</option>
                <option className="text-green-700" value="بیشتر از چهار نفر">بیشتر از چهار نفر</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 !justify-center">
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <input type="text" id="input-group-1" className="p-4 border border-gray-300 text-white rounded-lg focus:outline-none placeholder:text-white block w-full" placeholder="شماره تلفن" />
              </div>
            </div>
            <div className="flex border border-gray-100 rounded-lg flex-col gap-2 justify-center">
              <DateInput />
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="1.5" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="text" id="input-group-1" className="p-4 focus:outline-none placeholder:text-white !border !border-gray-100 text-white rounded-lg block w-full" placeholder="آدرس ایمیل" />
              </div>
            </div>
          </form>
          <div className="mt-8 text-center w-full">
            <button
              type="submit"
              className="bg-yellow-400 w-full text-black font-bold p-4 rounded-xl hover:bg-white cursor-pointer transition duration-300"
            >
              رزرو کن
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
