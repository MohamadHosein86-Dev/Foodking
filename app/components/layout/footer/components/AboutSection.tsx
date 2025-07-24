import { FaFacebookF, FaPinterestP, FaTwitter, FaVimeoV } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const socialIcons = [
  { icon: <FaVimeoV size={18} />, key: "vimeo" },
  { icon: <FaPinterestP size={18} />, key: "pinterest" },
  { icon: <FaTwitter size={18} />, key: "twitter" },
  { icon: <FaFacebookF size={18} />, key: "facebook" },
];
export default function AboutSection() {
  return (
    <div className="xl:-mb-12 w-72">
      <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_14-transformed.png" alt="" />
      <p className="my-6 font-medium text-[#707070]">ما معتقدیم که قدرت انجام آن را دارد چیزهای شگفت انگیز</p>
      <p className="my-4 font-medium text-[#707070]">علاقه مند به همکاری با ما هستید؟</p>
      <p className="font-bold text-xl text-[#00813d]">info@example.com</p>
      <div className="mt-12">
        <SocialIcons icons={socialIcons} />
      </div>
    </div>
  );
}