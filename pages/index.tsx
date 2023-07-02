import Hero from "@/components/sections/Hero";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
