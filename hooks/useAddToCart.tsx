import { ExtendedSession } from "@/app/Types/Type";
import { addToCart } from "@/lib/api-product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAddToCart(productId: string) {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const queryClient = useQueryClient();
  const goToCart = useRouter();

  const { mutate: AddToCartProdcuts, error } = useMutation({
    mutationFn: () => addToCart(productId, session?.refreshToken),
    onSuccess: () => {
      goToCart.push("/cart");
      queryClient.invalidateQueries(["cartProducts", session?.refreshToken]);
    }
  });

  return { AddToCartProdcuts, error };
}
