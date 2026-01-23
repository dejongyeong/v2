import Link from "next/link";

const Cta = () => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <div>
        <Link
          href="/#contact"
          className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full border border-blue-600 hover:bg-blue-700 hover:drop-shadow-lg md:mx-0 whitespace-nowrap"
        >
          Contact Me
        </Link>
      </div>
      <div>
        <Link
          href="/#portfolio"
          className="inline-block px-5 py-2 mx-auto text-blue-600 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white hover:drop-shadow-lg md:mx-0"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Cta;
