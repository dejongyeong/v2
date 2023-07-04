import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import Footer from "../components/shared/Footer";

// design idea from: https://portfolio-tailwind.preview.uideck.com/demos/personal/

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | De Jong Y</title>
      </Head>

      <main className="bg-white">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
