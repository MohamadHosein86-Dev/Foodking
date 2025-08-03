export default function MiniLoader({ light }: { light?: boolean }) {
  return (
    <div className="flex justify-center items-center pt-1">
      <div className={` w-8 h-8 border-4 ${light ? " border-white " : "border-[#FFB936]"}  border-t-transparent rounded-full animate-spin `} />
    </div>
  );
}
