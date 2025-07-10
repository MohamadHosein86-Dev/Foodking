export default function PaymentMethod({ selectedOption, setSelectedOption }: { selectedOption: string; setSelectedOption: (x: string) => void }) {
  return (
    <div className=" rounded-[10px] border-[2px]   border-[#CBCBCB] flex items-center justify-between gap-5  py-[2.5rem] px-[1.5rem] ">
      <div className=" flex items-center gap-[8px] text-[#353535] ">
        <img src="/payment/wallet-money.png" alt="" />
        <p>روش پرداخت</p>
      </div>
      <div className=" flex items-center gap-[8px] ">
        <input onChange={() => setSelectedOption("online")} checked={selectedOption === "online"} value={"online"} name="online" defaultChecked type="radio" className="appearance-none w-3.5 cursor-pointer h-3.5 rounded-full border-[2px] border-gray-400 checked:bg-green-500 checked:border-green-500 transition duration-200" />
        <div className=" ">
          <h3 className="text-[#717171]">پرداخت اینترنتی</h3>
          <p className=" text-[12px] text-[#717171] ">توسط پیک رستوران ارسال شود.</p>
        </div>
        <img className=" mt-[10px] " src="/payment/card-pos.png" alt="" />
      </div>
      <div className=" flex items-center gap-[8px] ">
        <input onChange={() => setSelectedOption("cash")} checked={selectedOption === "cash"} name="payment" value={"cash"} defaultChecked type="radio" className="appearance-none w-3.5 cursor-pointer h-3.5 rounded-full border-[2px] border-gray-400 checked:bg-green-500 checked:border-green-500 transition duration-200" />

        <div className=" ">
          <h3 className="text-[#717171]">پرداخت در محل</h3>
          <p className=" text-[12px] text-[#717171] ">توسط پیک رستوران ارسال شود.</p>
        </div>
        <img className=" mt-[10px] " src="/payment/wallet-2.png" alt="" />
      </div>
    </div>
  );
}
