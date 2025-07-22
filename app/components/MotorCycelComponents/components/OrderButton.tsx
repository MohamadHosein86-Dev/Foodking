import { TbTruckDelivery } from "react-icons/tb";

export default function OrderButton() {
    return (
      <button className="relative hidden h-16 w-48 rounded-xl bg-slate-100 font-semibold group sm:block md:w-64">
        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-1 group-hover:text-white">
          <h1 className="text-xs font-semibold md:text-base">اکنون سفارش دهید</h1>
          <TbTruckDelivery className="text-2xl text-green-700 transition-all duration-500 group-hover:text-white" />
        </div>
        <span className="absolute inset-0 h-full w-full origin-center scale-0 rounded-xl transition-all duration-500 ease-out group-hover:scale-100 bg-amber-400" />
      </button>
    );
  }