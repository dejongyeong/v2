import Content from "../shared/about/Content";
import Skills from "../shared/about/Skills";

const About = () => {
  return (
    <div id="about" className="h-max w-full">
      <div className="py-10 ps-4 min-[1024.1px]:ps-64 pe-4 min-[1024.1px]:pe-64 mt-10 md:mt-20 w-full">
        <div className="divider text-4xl md:text-5xl text-title-blue font-extrabold uppercase">About Me</div>
        <div className="mt-9 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <Content />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
