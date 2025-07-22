import { ExtendedSession } from "@/app/Types/DataType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { deleteToCart } from "../servises/products/product";

export function useDeleteToCart(productId: string) {
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const queryClient = useQueryClient();
  const goToCart = useRouter();

  const { mutate: DeleteToCartProdcuts, error } = useMutation({
    mutationFn: () => {
      if (!session?.refreshToken) throw new Error("No refresh token");
      return deleteToCart(productId, session.refreshToken);
    },
    onSuccess: () => {
      goToCart.push("/");
      alert("محصول با موفقیت از سبد خرید حذف شد.");
      if (session?.refreshToken) {
        queryClient.invalidateQueries({
          queryKey: ["cartProducts", session.refreshToken]
        });
      }
    }
  });

  return { DeleteToCartProdcuts, error };
}
