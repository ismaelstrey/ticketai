'use client'
import { Kambam } from "@/components/component/kambam";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex">
        <Kambam />
      </main>
    </QueryClientProvider>

  );
}
