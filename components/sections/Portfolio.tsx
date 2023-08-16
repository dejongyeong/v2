import Link from "next/link";
import Image from "next/image";
import { Portfolios, portfolios } from "../../lib/portfolio";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolios }) => {
  return (
    <div className="card w-fit card-compact card-bordered border-gray-200 shadow-md rounded-2xl overflow-hidden h-auto">
      <figure className="border-b relative">
        <Image src={portfolio.image} width={1891} height={975} />
        <div className="absolute inset-0 bg-blue-600/10 backdrop-brightness-75" />
      </figure>
      <div className="card-body bg-white text-black">
        <h2 className="card-title text-title-blue">{portfolio.title}</h2>
        <p className="text-gray-500 text-xs">
          {portfolio.date} &bull; {portfolio.type}
        </p>
        <p className="text-sm leading-relaxed h-full">{portfolio.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 text-gray-500">
          {portfolio.tech.map(tech => (
            <div key={tech} className="badge badge-outline text-xs whitespace-nowrap">
              {tech}
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="card-actions justify-end">
          {portfolio.preview && (
            <Link href={portfolio.preview} passHref target="_blank" rel="noopener noreferrer">
              <a className="inline-block px-5 py-1 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg md:mx-0 text-sm">
                Preview
              </a>
            </Link>
          )}
          {portfolio.github && (
            <Link href={portfolio.github} passHref target="_blank" rel="noopener noreferrer">
              <a className="inline-block px-5 py-1 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg md:mx-0 text-sm">
                Github
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white">
      <div className="py-10 ps-4 min-[1024.1px]:ps-64 pe-4 min-[1024.1px]:pe-64 mt-12 w-full">
        <div className="z-10 flex flex-col items-center">
          <div className="divider text-4xl md:text-5xl text-title-blue font-extrabold uppercase">Portfolio</div>
          <h3 className="pt-3 pb-6 text-sm">more projects coming soon and publications available in resume</h3>
          <div className="my-4">
            <Link href="https://github.com/dejongyeong" passHref target="_blank" rel="noopener noreferrer">
              <a className="inline-block px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:drop-shadow-lg md:mx-0">
                View Full Archive
              </a>
            </Link>
          </div>
          <div className="my-7 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-7 p-6">
            {portfolios.map((portfolio: Portfolios) => (
              <PortfolioCard key={portfolio.title} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
