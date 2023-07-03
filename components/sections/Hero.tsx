import About from "./About";
import Intro from "../shared/hero/Intro";
import Navigation from "../shared/hero/Navigation";
import Footer from "../shared/Footer";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Hero = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
