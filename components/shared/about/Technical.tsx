import React from "react";

const technologies: string[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "NextJS",
  "Python 3",
  "SQL & NoSQL",
  "Ant Design",
  "Material UI",
  "Git & GitHub",
];

const Technical = () => {
  return (
    <div className="flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <h5 className="mb-2 block text-xl text-blue-700 font-semibold leading-snug antialiased my-4">
          Technologies & Frameworks{" "}
          <span className="text-xs text-gray-400 font-normal">often used and continuous learning</span>
        </h5>
        <div className=" leading-relaxed antialiased text-gray-500 gap-4 mt-4">
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 max-w-full w-auto">
            {technologies.map((technology: string) => {
              return (
                <p key={technology} className="hover:text-blue-600">
                  {technology}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
