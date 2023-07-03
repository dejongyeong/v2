const languages: string[] = ["Mandarin", "English", "Cantonese", "Malay"];

const Language = () => {
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
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <h5 className="mb-2 block text-xl text-blue-700 font-semibold leading-snug antialiased my-4">
          Languages <span className="text-xs text-gray-400 font-normal">in order of proficiency</span>
        </h5>
        <div className=" leading-relaxed antialiased text-gray-500 gap-4 mt-4">
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 max-w-full w-auto">
            {languages.map((language: string) => {
              return (
                <p key={language} className="hover:text-blue-600">
                  {language}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
