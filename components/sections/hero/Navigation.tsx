const Navigation = () => {
  return (
    <nav className="sticky top-0 z-10 py-7 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="flex flex-row ps-14 pe-14 gap-3">
        <div className="flex-auto md:w-2/12 bg-slate-500">Logo</div>
        <div className="flex-auto md:w-8/12 bg-slate-300">
          <div className="flex justify-center items-center gap-20">
            <div>Dashboard</div>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex flex-auto md:w-2/12 justify-center items-center bg-slate-500">
          <p>Download CV</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
