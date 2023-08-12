import Image from "next/image";
import { MouseEvent } from "react";
import Socials from "../Socials";
import Cta from "../buttons/Cta";

const Intro = () => {
  return (
    <div id="home" className="h-max">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Left column content */}
        <div className="ps-0 min-[1025px]:ps-64 py-10 w-full h-full">
          <div className="flex flex-col justify-center gap-8 mx-auto ps-9 font-sans h-full">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h4 className="text-sm font-medium text-title-blue">Hello World 👋, I am DJ</h4>
                <h1 className="text-7xl font-bold tracking-wide text-black my-2 uppercase">Y. De Jong</h1>
                <p className="text-xl font-medium">Postgraduate Researcher, Software Engineer</p>
              </div>
              <div className="mt-6 text-base w-4/5">
                <p className="leading-relaxed text-left">
                  I am a visionary researcher and software engineer, driven by the synergy of cutting-edge research and
                  innovative software solutions, to unlock transformative outcomes and harness the limitless potential
                  of AI.
                </p>
              </div>
            </div>
            <Cta />
          </div>
          <div className="ps-10">
            <Socials />
          </div>
        </div>
        {/* Right column content */}
        <div
          className="md:flex justify-center items-end pe-4 min-[1025px]:pe-16 max-[1025px]:mt-7"
          onContextMenu={(event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
          }}
        >
          <Image
            src="/hero.png"
            alt="Hero Profile Image"
            width={700}
            height={700}
            className="mx-auto max-w-full mask mask-hexagon"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
