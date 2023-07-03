import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/sections/Hero";

// design idea from: https://portfolio-tailwind.preview.uideck.com/demos/personal/

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | De Jong Y</title>
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
