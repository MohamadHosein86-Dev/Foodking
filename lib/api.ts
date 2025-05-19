export async function getProducts() {
    const res = await fetch("example/api",{
        cache:"no-store"
    });
    const products = res.json()
    return products;
}
export async function getProduct(id: string) {
  const res = await fetch(`https://api.example.com/products/${id}`, {
    cache:"no-store"
  })
    const product = res.json()
    return product;
}