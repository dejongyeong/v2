const Footer = () => {
  return (
    <footer className="h-10 flex flex-col items-center align-middle justify-center text-xs text-center leading-relaxed text-blue-600 w-full pt-6 pb-8">
      {new Date().getFullYear()} © Designed and Built by De Jong Yeong &bull; Attribute: Authors of UI Design from
      Google and Dribble
    </footer>
  );
};

export default Footer;
