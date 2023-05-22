import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { QueryClient, QueryClientProvider } from "react-query";

const poppins = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
