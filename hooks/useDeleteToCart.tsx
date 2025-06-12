import { ExtendedSession } from "@/app/Types/Type";
import { deleteFromCart } from "@/lib/api-product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useDeleteToCart(productId: string) {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const queryClient = useQueryClient();
  const goToCart = useRouter();

  const { mutate: DeleteToCartProdcuts, error } = useMutation({
    mutationFn: () => deleteFromCart(productId, session?.refreshToken),
    onSuccess: () => {
      goToCart.push("/");
      alert("kos");
      queryClient.invalidateQueries(["cartProducts", session?.refreshToken]);
    }
  });

  return { DeleteToCartProdcuts, error };
}
