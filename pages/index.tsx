import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/sections/Hero";

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
