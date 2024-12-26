"use client"

import * as React from 'react';

import { useTranslations } from 'next-intl';
import type { ExperienceProps } from '@/components/experience';
import Experience from '@/components/experience';

import { convertTextToHTML } from '@/utils/translation';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const translate = useTranslations("about");

  const experiences = React.useMemo(() => [
    {
      company: "Universidade Paulista",
      logo: "/images/companies/unip.png",
      startDate: translate("education.unip.startDate"),
      endDate: translate("education.unip.endDate"),
      roles: [
        {
          title: translate("education.unip.course"),
          description: translate.rich(
            "education.unip.description",
            convertTextToHTML
          ),
          startDate: "",
          endDate: "",
        },
      ],
    },
    {
      company: "SENAI",
      logo: "/images/companies/senai.png",
      startDate: translate("education.senai.startDate"),
      endDate: translate("education.senai.endDate"),
      roles: [
        {
          title: translate("education.senai.course"),
          description: translate.rich(
            "education.unip.description",
            convertTextToHTML
          ),
          startDate: "",
          endDate: "",
        },
      ],
    },
  ] as ExperienceProps[], [translate]);

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-3xl text-center">{translate("me.title")}</h1>

        <p className="mt-8">
          {translate("me.description")}
        </p>

        <h1 className="font-bold text-3xl text-center">{translate("education.title")}</h1>

        {experiences.map((experience, index) => (
          <div key={experience.company} className="flex flex-col gap-4">
            <Experience {...experience} />
            {index !== experiences.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </section>
  );
}
