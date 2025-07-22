"use clinet";

interface PropsType {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}
export default function LinkNavbar({ onMouseEnter, onMouseLeave, children }: PropsType) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative z-[10000000]">
      {children}
    </div>
  );
}
