import { Cart, Product } from "@/app/Types/DataType";

export const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/products`, {
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();

  return data as Product[];
};

export async function getProduct(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/products/${slug}`, {
    method: "GET",
    cache: "no-store"
  });
  const product = res.json();
  return product;
}

export async function addToCart(id: string, token: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/cart`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      productId: id
    })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    console.error("Error response:", errorData);
    throw new Error(`Failed to add to cart: ${res.statusText}`);
  }

  const product = await res.json();
  return product;
}
export const getCart = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/cart`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();

  return data as Cart;
};

export const deleteToCart = async (id: string, token: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/cart/${id}`, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  } catch {
    console.error("Error response:");
    throw new Error(`Failed to delete from cart`);
  }
};
