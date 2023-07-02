import Link from "next/link";

const Cta = () => {
  return (
    <div className="mt-6 flex flex-row gap-4">
      <div>
        <Link href="/#contact" passHref>
          <a className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg md:mx-0">
            Contact Me
          </a>
        </Link>
      </div>
      <div>
        <Link href="/#portfolio" passHref>
          <a className="inline-block px-5 py-2 mx-auto text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-700 hover:text-white hover:drop-shadow-lg md:mx-0">
            Portfolio
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
