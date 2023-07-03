import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="h-10 flex flex-col items-center align-middle justify-center py-12 gap-3">
      <div className="flex justify-center w-full">
        <Socials />
      </div>
      <div className="text-xs text-blue-600 w-full flex justify-center my-1">
        {new Date().getFullYear()} © Designed and Built by De Jong Yeong
      </div>
    </footer>
  );
};

export default Footer;
