export type SkillProps = {
  name: string;
  image: string;
};

export type SkillGroupProps = {
  title: string;
  skills: SkillProps[];
};

export const skillsLogo = {
  // Core
  html: "/images/skills/html.svg",
  css: "/images/skills/css.svg",
  javascript: "/images/skills/javascript.svg",
  typescript: "/images/skills/typescript.svg",
  node: "/images/skills/node.svg",

  // Frameworks & Libraries
  react: "/images/skills/react.svg",
  next: "/images/skills/next.svg",
  express: "/images/skills/express.svg",
  tailwind: "/images/skills/tailwind.svg",

  // Databases
  mysql: "/images/skills/mysql.svg",
  postgresql: "/images/skills/postgresql.svg",
  mongodb: "/images/skills/mongodb.svg",

  // Tools
  sass: "/images/skills/sass.svg",
  styledComponents: "/images/skills/styled-components.png",
  git: "/images/skills/git.svg",
  github: "/images/skills/github.svg",
  docker: "/images/skills/docker.svg",
  jest: "/images/skills/jest.svg",
  playwrite: "/images/skills/playwrite.svg",
  vscode: "/images/skills/vscode.svg",
};

export const SKILL_GROUPS = (translate: (key: string) => string): SkillGroupProps[] => [
  {
    title: translate("skills.core"),
    skills: [
      { name: "HTML", image: skillsLogo.html },
      { name: "CSS", image: skillsLogo.css },
      { name: "JavaScript", image: skillsLogo.javascript },
      { name: "TypeScript", image: skillsLogo.typescript },
      { name: "Node.js", image: skillsLogo.node },
    ],
  },
  {
    title: translate("skills.frameworks"),
    skills: [
      { name: "React.js", image: skillsLogo.react },
      { name: "Next.js", image: skillsLogo.next },
      { name: "Express.js", image: skillsLogo.express },
      { name: "Tailwind CSS", image: skillsLogo.tailwind },
    ],
  },
  {
    title: translate("skills.databases"),
    skills: [
      { name: "MySQL", image: skillsLogo.mysql },
      { name: "PostgreSQL", image: skillsLogo.postgresql },
      { name: "MongoDB", image: skillsLogo.mongodb },
    ],
  },
  {
    title: translate("skills.tools"),
    skills: [
      { name: "SASS", image: skillsLogo.sass },
      { name: "Styled Components", image: skillsLogo.styledComponents },
      { name: "Git", image: skillsLogo.git },
      { name: "GitHub", image: skillsLogo.github },
      { name: "Docker", image: skillsLogo.docker },
      { name: "Jest", image: skillsLogo.jest },
      { name: "Playwright", image: skillsLogo.playwrite },
      { name: "Visual Studio Code", image: skillsLogo.vscode },
    ],
  },
];
