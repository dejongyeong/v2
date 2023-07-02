import Intro from "./hero/Intro";
import Navigation from "./hero/Navigation";

const Hero = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Intro />
      <Intro />
      <Intro />
    </div>
  );
};

export default Hero;
