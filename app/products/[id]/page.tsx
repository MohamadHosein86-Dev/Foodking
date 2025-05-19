export default function ProductPage() {
  const product = { id: "1266", name: "همبرگر کلاسیک", description: "همبرگر گوشت ۱۰۰ گرمی با کاهو، گوجه و سس مخصوص", inventory: 200, price: "75000", category: ["فست فود", "همبرگر"], attributes: ["با پنیر", "بدون پیاز"], restaurant_id: 2, isActivate: true, img: "https://t-theme.com/foodking/wp-content/uploads/2024/03/main-food-2.png" };

  return <img src={product.img} alt="" />;
}
