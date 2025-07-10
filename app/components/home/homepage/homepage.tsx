import ProductSection from "@/app/products/components/ProductSection";
import PitzaSec from "../pitzaSec/PitzaSec";
import AboutChefSec from "../aboutChefSec/AboutChefSec";
import OrderSec from "../orderSec/OrderSec";
import PizaaOederSec from "../pizaaOederSec/PizaaOederSec";
import CommentsSec from "../commentsSec/CommentsSec";
import SliderSec from "../sliderSec/SliderHome";
import SwiperSec from "../swiperSec/swiperhome";
import BlogSec from "../blogSec/BlogSec";
import MessageSec from "../messageSec/MessageSec";

export default function Homepage() {
  return (
    <section dir="rtl">
      <PitzaSec showSticky={false} open={true} />
      <AboutChefSec />
      <OrderSec />
      {/* <ProductSection /> */}
      <SliderSec />
      <PizaaOederSec />
      <SwiperSec />
      <CommentsSec />
      <BlogSec />
      <MessageSec />
    </section>
  );
}
