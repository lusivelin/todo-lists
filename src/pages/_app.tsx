import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import theme from "@/config/theme";
import Layout from "@/components/Layout";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <main className={poppins.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ConfigProvider>
  );
}
