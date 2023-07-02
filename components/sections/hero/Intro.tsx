const Intro = () => {
  return (
    <div className="h-[80vh] border-2 border-pink-900">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-auto md:w-2/3 border-2 border-gray-300">Hello</div>
        <div className="flex-auto md:w-1/3 border-2 border-pink-300">Image</div>
      </div>
    </div>
  );
};

export default Intro;
