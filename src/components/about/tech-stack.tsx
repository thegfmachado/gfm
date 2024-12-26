import * as React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { skillsLogo } from "@/constants/about";
import { Card, CardContent, CardHeader } from "../ui/card";

type SkillGroupProps = {
  skills: SkillProps[];
  title: string;
}

type SkillProps = {
  name: string;
  image: string;
}

export default function TechStack() {
  const translate = useTranslations("about");
  const skills: SkillGroupProps[] = React.useMemo(() => [
    {
      title: translate("skills.core"),
      skills: [
        {
          name: "HTML",
          image: skillsLogo.html,
        },
        {
          name: "CSS",
          image: skillsLogo.css
        },
        {
          name: "JavaScript",
          image: skillsLogo.javascript,
        },
        {
          name: "TypeScript",
          image: skillsLogo.typescript,
        },
        {
          name: "Node.js",
          image: skillsLogo.node,
        },
      ],
    },
    {
      title: translate("skills.frameworks"),
      skills: [
        {
          name: "React.js",
          image: skillsLogo.react,
        },
        {
          name: "Next.js",
          image: skillsLogo.next,
        },
        {
          name: "Express.js",
          image: skillsLogo.express,
        },
        {
          name: "Tailwind CSS",
          image: skillsLogo.tailwind,
        },
      ],
    },
    {
      title: translate("skills.databases"),
      skills: [
        {
          name: "MySQL",
          image: skillsLogo.mysql,
        },
        {
          name: "PostgreSQL",
          image: skillsLogo.postgresql,
        },
        {
          name: "MongoDB",
          image: skillsLogo.mongodb,
        },
      ],
    },
    {
      title: translate("skills.tools"),
      skills: [
        {
          name: "SASS",
          image: skillsLogo.sass,
        },
        {
          name: "Tailwind CSS",
          image: skillsLogo.tailwind,
        },
        {
          name: "Git",
          image: skillsLogo.git,
        },
        {
          name: "GitHub",
          image: skillsLogo.github,
        },
        {
          name: "Docker",
          image: skillsLogo.docker,
        },
        {
          name: "Jest",
          image: skillsLogo.jest,
        },
        {
          name: "Playwright",
          image: skillsLogo.playwrite,
        },
        {
          name: "Visual Studio Code",
          image: skillsLogo.vscode,
        },
      ],
    },
  ], [translate]);

  return (
    <div className="flex flex-col gap-4">
      {skills.map((skillGroup) => (
        <div key={skillGroup.title} className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl border-b-2 border-b-foreground w-fit">
            {skillGroup.title}
          </h3>

          <div className="flex items-start gap-4 flex-wrap">
            {skillGroup.skills.map((skill) => (
              <Card
                key={skill.name}
                className="p-2 flex flex-row max-sm:flex-col items-center gap-2 rounded-tl-xl rounded-br-xl"
              >
                <CardHeader className="p-0">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </CardHeader>
                <CardContent className="p-0">{skill.name}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <div className="flex"></div>
    </div>
  );
}
