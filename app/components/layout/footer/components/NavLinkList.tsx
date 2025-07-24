import Link from "next/link";

interface NavLinkListProps {
  links: { label: string; href: string }[];
  className?: string;
}

export default function NavLinkList({ links, className }: NavLinkListProps) {
  return (
    <ul className={`flex flex-col gap-0.5 text-[#212121] font-medium ${className || ""}`}>
      {links.map((link, idx) => (
        <Link key={link.href + idx} href={link.href} className="text-lg">
          {link.label}
        </Link>
      ))}
    </ul>
  );
} 