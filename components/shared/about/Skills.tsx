import EI from "./EI";
import Language from "./Language";
import Technical from "./Technical";

const Skills = () => {
  return (
    <div className="px-7 md:px-10 py-10 md:py-8 flex flex-col justify-start gap-5">
      <Technical />
      <EI />
      <Language />
    </div>
  );
};

export default Skills;
