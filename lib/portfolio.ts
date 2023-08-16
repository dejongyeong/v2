const portfolioType = {
  RECREATION: "Recreation",
  WORK: "Client Project",
};

export const portfolios = [
  {
    title: "Killarney DIY",
    desc: "Transformed the existing static website into an e-commerce platform for a client based in Killarney. This involves creating a prototype that integrates the e-commerce features into the current website structure.",
    date: "2023",
    tech: ["NextJS", "TypeScript", "Shadcn/ui", "PlanetScale", "Drizzle ORM", "Clerk"],
    preview: "https://killarneydiy.vercel.app/",
    image: "/images/killarneydiy.png",
    type: portfolioType.WORK,
  },
  {
    title: "NLP Sentiment Analysis Web App",
    desc: "Analyse and predict the sentiment of a user-defined input using Python Django APIs and React.JS. It is an extension or improvement features of my Bachelor Degree Final Year Project: Sentiment Analysis Approach for Reputation Evaluation.",
    date: "2022",
    tech: ["ReactJS", "Python Django", "Scikit-Learn", "Tensorflow"],
    github: "https://github.com/dejongyeong/nlp-web-app/blob/main/README.md",
    image: "/images/nlp-sa.png",
    type: portfolioType.RECREATION,
  },
  {
    title: "Covid-19 Tracker Application",
    desc: "Visualizes the global and country specific total confirmed, recovered, and deceased cases retrieved from Open Disease Data API.",
    date: "2021",
    tech: ["ReactJS", "ChartJS", "React Simple Maps", "CircleCI", "Netlify", "Material UI", "Styled Components"],
    github: "https://github.com/dejongyeong/covid-19-tracker",
    preview: "https://cov2-tracker.netlify.app/",
    image: "/images/covid-19-tracker.png",
    type: portfolioType.RECREATION,
  },
  {
    title: "Online Portfolio V1",
    desc: "The first iteration of my personal online portfolio. I was interested in learning ReactJS, so I decided to design and build my first version of online portfolio over the weekend would be the best way to learn the fundamentals of ReactJS.",
    date: "2020",
    tech: ["ReactJS", "HTML", "CSS", "Material UI"],
    github: "https://github.com/dejongyeong/web-portfolio",
    preview: "https://dejongyeong.github.io/web-portfolio/",
    image: "/images/portfolio-v1.png",
    type: portfolioType.RECREATION,
  },
];

export type Portfolios = {
  title: string;
  desc: string;
  date: string;
  tech: string[];
  github?: string;
  preview?: string;
  image: string;
  type: string;
};
