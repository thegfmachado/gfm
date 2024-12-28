"use client"

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { projectsInfo } from "@/constants/projects";
import { convertTextToHTML } from "@/utils/translation";

export default function Projects() {
  const translate = useTranslations("projects");

  const projects = React.useMemo(() => [
    {
      title: translate("lofiDino.title"),
      bgImage: projectsInfo.lofiDino.logo,
      description: translate.rich("lofiDino.description", convertTextToHTML),
      repo: projectsInfo.lofiDino.repo,
      site: projectsInfo.lofiDino.site,
    },
    {
      title: translate("whatDoesTheFoxHad.title"),
      bgImage: projectsInfo.whatDoesTheFoxHad.logo,
      description: translate.rich("whatDoesTheFoxHad.description", convertTextToHTML),
      repo: projectsInfo.whatDoesTheFoxHad.repo,
      site: projectsInfo.whatDoesTheFoxHad.site,
    },
    {
      title: translate("gfm.title"),
      description: translate("gfm.description"),
      bgImage: projectsInfo.gfm.logo,
      site: "",
      repo: projectsInfo.gfm.repo,
    },
  ], [translate]);

  return (
    <section className="w-full mt-16">
      <div className="flex flex-col gap-16">
        <h1 className="font-bold text-2xl sm:text-3xl text-center">
          {translate("title")}
        </h1>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col grow">
              <CardHeader className="relative flex items-center grow">
                <Image
                  priority
                  src={project.bgImage}
                  width={1200}
                  height={1200}
                  alt={project.title}
                />
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <CardTitle>{project.title}</CardTitle>
                <div>{project.description}</div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {project.site.length > 0 && (
                  <Link href={project.site} target="_blank">
                    <Button className="hover:!bg-indigo-500 active:!bg-indigo-500 rounded-xl" variant="outline">{translate("website")}</Button>
                  </Link>
                )}
                {project.repo.length > 0 && (
                  <Link href={project.repo} target="_blank">
                    <Button className="hover:!bg-indigo-500 active:!bg-indigo-500 rounded-xl" variant="outline">{translate("repo")}</Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
