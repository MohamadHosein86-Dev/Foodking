"use client";
import { ExtendedSession } from "@/app/Types/Type";
import { getCart } from "@/lib/api-product";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export function useGetCart() {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const { data, isLoading, error } = useQuery({ queryKey: ["cartProducts", session?.refreshToken], staleTime: 0, queryFn: () => getCart(session?.refreshToken), enabled: !!session?.refreshToken });

  const totalPrice = data?.totalPrice;
  const cartproducts = data?.data;
  const totalCount = data?.data.reduce((acc, item) => acc + item.count, 0);

  return { totalPrice, cartproducts, error, isLoading, totalCount };
}
