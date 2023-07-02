import About from "./About";
import Intro from "./hero/Intro";
import Navigation from "./hero/Navigation";

const Hero = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Intro />
      <About />
    </div>
  );
};

export default Hero;
