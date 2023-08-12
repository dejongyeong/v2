const softs: string[] = [
  "Prioritization",
  "Communication",
  "Time Management",
  "Self-Motivation",
  "Detail-oriented",
  "Problem-solving",
  "Creativity",
  "Logical",
  "Analytical",
];

const EI = () => {
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
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        <h5 className="mb-2 block text-xl text-blue-700 font-semibold leading-snug antialiased my-4">
          Soft Skills <span className="text-xs text-gray-400 font-normal">personality traits</span>
        </h5>
        <div className="leading-relaxed antialiased text-gray-500 gap-4 mt-4">
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 max-w-full w-auto text-sm">
            {softs.map((soft: string) => {
              return (
                <p key={soft} className="hover:text-blue-600">
                  {soft}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EI;
