'use client'
import { Kambam } from "@/components/component/kambam";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex">
        <ToastContainer position='top-left' />
        <Kambam />
      </main>
    </QueryClientProvider>

  );
}
