import Image from "next/image";

const Intro = () => {
  return (
    <div id="home" className="h-max">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Left column content */}
        <div className="ps-0 min-[769px]:ps-64 py-10 w-full h-full">
          <div className="flex flex-col justify-center gap-7 mx-auto ps-9 font-sans h-full">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-title-blue">Hello World 👋, I am</h4>
                <h1 className="text-7xl font-bold tracking-wide text-black mt-1 mb-2 uppercase">Y. De Jong</h1>
                <p className="text-xl font-medium leading-loose">Research, Software Engineer</p>
              </div>
              <div className="my-6 border-2 w-4/5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-row gap-5">
              <div>Contact Me</div>
              <div>Portfolio</div>
            </div>
          </div>
        </div>
        {/* Right column content */}
        <div className="p-0 hidden md:flex justify-end items-end">
          <Image src="/hero.png" alt="Hero Profile Image" width={700} height={700} className="mx-auto max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
