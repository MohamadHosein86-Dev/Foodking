import AnimationHeader from "./components/AnimationHeader";
import HeaderHomePage from "./components/HeaderHomePage";
import HeaderSecond from "./components/HeaderSecond";

export default function Header() {
  return (
    <header>
      <HeaderHomePage />
      <HeaderSecond />
      <AnimationHeader />
    </header>
  );
}
