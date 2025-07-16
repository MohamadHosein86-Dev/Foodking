import AnimationHeader from "./AnimationHeader";
import HeaderHomePage from "./HeaderHomePage";
import HeaderSecond from "./HeaderSecond";

export default function Header() {
  return (
    <header>
      <HeaderHomePage />
      <HeaderSecond />
      <AnimationHeader />
    </header>
  );
}
