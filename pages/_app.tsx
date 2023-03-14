import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/misc.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
