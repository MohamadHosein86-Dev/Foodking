import Link from "next/link";

interface SocialIcon {
  icon: React.ReactNode;
  key: string;
  href?: string;
}

interface SocialIconsProps {
  icons: SocialIcon[];
  className?: string;
}

export default function SocialIcons({ icons, className }: SocialIconsProps) {
  return (
    <div className={`flex gap-6 ${className || ""}`}>
      {icons.map(({ icon, key, href }) => (
        href ? (
          <Link
            key={key}
            href={href}
            className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#00813d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">{icon}</div>
          </Link>
        ) : (
          <div
            key={key}
            className="group bg-[#5c5c5b1a] h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 hover:bg-[#00813d]"
          >
            <div className="text-[#212121] group-hover:text-white transition-colors duration-200">{icon}</div>
          </div>
        )
      ))}
    </div>
  );
} 