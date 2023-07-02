import Image from "next/image";

const Intro = () => {
  return (
    <div id="home" className="h-max">
      <div className="flex flex-col md:flex-row gap-2 ps-14">
        <div className="flex-auto mt-10 md:w-2/3 border-2">
          <div className="w-full h-full flex flex-col justify-center gap-7 mx-auto ps-9">
            <div>
              <h1>DE JONG YEONG</h1>
            </div>
            <div>Contact Me</div>
          </div>
        </div>
        <div className="flex-auto md:w-1/3">
          <div className="flex justify-end mt-5">
            <Image src="/hero.png" alt="hero profile" width={700} height={700} className="mx-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
