import Link from "next/link";

const Download = () => {
  return (
    <div>
      <Link href="/static/dejong-cv.pdf" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg md:mx-0 text-center"
        >
          Download CV
        </a>
      </Link>
    </div>
  );
};

export default Download;
