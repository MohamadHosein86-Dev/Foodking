"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

interface PropsType {
  children: React.ReactNode;
}
function QueryProvider({ children }: PropsType) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
export default QueryProvider;
