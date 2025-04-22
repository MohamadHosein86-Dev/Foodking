import type { NextPage } from "next";
import Image from "next/image";

const FoodProcessing: NextPage = () => {
  return (
    <div className="min-h-screen mt-4 flex flex-col items-center py-12">
      <div className="text-center mb-12">
        <p className="text-lg text-green-600">فرآوری مواد غذایی</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">چگونه به شما خدمات می دهیم؟</h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 max-w-5xl mx-auto p-6">
        <div className="flex-1 container transition duration-300 ease-in-out delay-150 hover:border hover:border-dotted hover:bg-white justify-center rounded-lg h-[480px] flex flex-col items-center text-center p-4">
          <div className="relative w-80 h-80 mb-4">
            <Image src={""} alt="Delivery" layout="fill" objectFit="contain" className="rounded-lg" />
            <h2 className="number hidden absolute top-6 right-28 bg-green-700 px-2 py-1 rounded-full text-lg font-semibold text-white">01</h2>
          </div>
          <h3 className="text-2xl mb-3">پخت و پز با دقت</h3>
          <p className="text-gray-600">تجربه غذاخوری عالی است که در آن تجربه سریع و کارآمد است</p>
        </div>
        <div className="flex-1 container border border-dotted bg-white justify-center rounded-lg h-[480px] flex flex-col items-center text-center p-4">
          <div className="relative w-80 h-80 mb-4">
            <Image src={""} alt="Delivery" layout="fill" objectFit="contain" className="rounded-lg" />
            <h2 className="number absolute top-6 right-28 bg-green-700 px-2 py-1 rounded-full text-lg font-semibold text-white">02</h2>
          </div>
          <h3 className="text-2xl mb-3">تحویل سریع</h3>
          <p className="text-gray-600">تجربه غذاخوری عالی است که در آن تجربه سریع و کارآمد است</p>
        </div>
        <div className="flex-1 container transition duration-300 ease-in-out delay-150 hover:border hover:border-dotted hover:bg-white justify-center rounded-lg h-[480px] flex flex-col items-center text-center p-4">
          <div className="relative w-80 h-80 mb-4">
            <Image src={""} alt="Delivery" layout="fill" objectFit="contain" className="rounded-lg" />
            <h2 className="number hidden absolute top-6 right-28 bg-green-700 px-2 py-1 rounded-full text-lg font-semibold text-white">03</h2>
          </div>
          <h3 className="text-2xl mb-3">انتخاب غذا</h3>
          <p className="text-gray-600">تجربه غذاخوری عالی است که در آن تجربه سریع و کارآمد است</p>
        </div>
      </div>
    </div>
  );
};

export default FoodProcessing;
