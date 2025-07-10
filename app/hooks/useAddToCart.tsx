import { ExtendedSession } from "@/app/Types/DataType";
import { addToCart } from "@/app/servises/products/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAddToCart(productId: string) {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const queryClient = useQueryClient();
  const goToCart = useRouter();

  const { mutate: AddToCartProdcuts, error } = useMutation({
    mutationFn: () => {
      if (!session?.refreshToken) throw new Error("No refresh token");
      return addToCart(productId, session.refreshToken);
    },
    onSuccess: () => {
      goToCart.push("/cart");
      if (session?.refreshToken) {
        queryClient.invalidateQueries({
          queryKey: ["cartProducts", session.refreshToken]
        });
      }
    }
  });

  return { AddToCartProdcuts, error };
}
