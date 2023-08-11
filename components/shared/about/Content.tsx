import Socials from "../Socials";

const Content = () => {
  return (
    <div className="w-full px-7 md:px-10 py-8 text-gray-600 leading-loose text-base flex flex-col justify-center gap-4">
      <p>
        Hey there, fellow tech adventurer! 🚀 Welcome to my virtual playground, where innovation and fun collide! As a
        tech enthusiast raised in <span className="font-medium">West Malaysia</span>, I now find myself exploring the
        lush landscapes of <span className="font-semibold text-blue-700">Ireland</span>, while pursuing my passion for
        cutting-edge software and AI. With a Master by Research in Engineering, I&apos;ve embarked on an exhilarating
        journey of discovery, diving deep into the realm of technological innovation.
      </p>
      <p>
        My adventure began at{" "}
        <a
          href="http://imar.ie/"
          className="font-semibold text-blue-700 hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          IMaR
        </a>
        , MTU, where I had the incredible opportunity to conduct research alongside{" "}
        <a
          href="https://www.liebherr.com/en/int/about-liebherr/liebherr-worldwide/ireland/killarney/killarney.html"
          className="font-semibold text-blue-700 hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          Liebherr Container Cranes Ltd.
        </a>
        , supported by the esteemed organization{" "}
        <a
          href="https://lero.ie/"
          target="_blank"
          className="font-semibold text-blue-700 hover:text-blue-500"
          rel="noreferrer"
        >
          Lero
        </a>
        . Together, we unveiled the secrets of the digital realm, forging new paths and pushing the boundaries of
        what&apos;s possible 🤖. <span className="font-semibold">Today</span>, you&apos;ll find me at IMaR, wearing my
        research hat and exploring the art of smart machines with the brilliant minds at IMaR and{" "}
        <a
          href="https://www.abbeymachinery.com/"
          target="_blank"
          className="font-semibold text-blue-700 hover:text-blue-500"
          rel="noreferrer"
        >
          Abbey Machinery
        </a>
        . But that&apos;s not all! 🎪 I also work on multiple exciting projects, each one adding a new chapter to my
        quest for knowledge and innovation.
      </p>
      <p className="visible md:visible">
        When I&apos;m not coding or keeping up with the latest tech trends, you&apos;ll likely catch me engaged in a
        thrilling game of chess or enjoying online games with friends. It&apos;s the perfect way to boost teamwork,
        unwind, de-stress, and sharpen the mind.
      </p>
      <p className="mb-5">
        So, grab your virtual gear and join me on this exhilarating ride. Let&apos;s geek out, have a blast, and make
        our mark in the ever-evolving world of tech! 🎉 Together, we&apos;ll create memories, break barriers, and
        unleash the full potential of innovation. See you on the other side! 🤝
      </p>
      <Socials />
    </div>
  );
};

export default Content;
