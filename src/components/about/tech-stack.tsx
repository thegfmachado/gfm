import * as React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { SKILL_GROUPS } from "@/constants/about";
import { Card, CardContent, CardHeader } from "../ui/card";

export function TechStack() {
  const translate = useTranslations("about");
  const skills = React.useMemo(() => SKILL_GROUPS(translate), [translate]);

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
