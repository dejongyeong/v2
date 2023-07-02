import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 ps-8 mt-7 lg:mt-2">
      <div className="flex align-middle">
        <Link href="https://www.linkedin.com/in/de-jong-yeong/">
          <a target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <Image src="/social/linkedin.svg" alt="LinkedIn" width={18} height={18} />
          </a>
        </Link>
      </div>
      <div className="flex align-middle">
        <Link href="https://github.com/dejongyeong" target="_blank" passHref className="border-2">
          <a target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <Image src="/social/github.svg" alt="Github" width={18} height={18} />
          </a>
        </Link>
      </div>
      <div className="flex align-middle">
        <Link href="https://orcid.org/0000-0002-4626-8040" passHref>
          <a target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
            <Image src="/social/orcid.svg" alt="ORCID" width={18} height={18} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
