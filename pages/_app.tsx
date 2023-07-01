import "@/styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // handle flash of unstyled content
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`${!mounted ? "invisible" : "visible"}`}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
