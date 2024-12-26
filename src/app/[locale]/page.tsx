"use client"

import * as React from 'react';

import { useTranslations } from 'next-intl';
import { MapPin, Cake } from 'lucide-react';

import type { ExperienceProps } from '@/components/experience';
import Experience from '@/components/experience';

import { convertTextToHTML } from '@/utils/translation';
import { Separator } from '@/components/ui/separator';
import TechStack from '@/components/about/tech-stack';

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
    <section className="w-full mt-16">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl text-center">
            {translate("me.title")}
            <span className="ml-4">👨‍💻</span>
          </h1>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <MapPin />
              <span>SP, BR</span>
            </div>
            <div className="flex items-center gap-2">
              <Cake />
              <span>{translate("me.birthday")}</span>
            </div>
          </div>

          <p>
            {translate("me.description")}
          </p>
          <p>
            {translate("me.funFact")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl text-center">
            {translate("skills.title")}
            <span className="ml-4">🤖</span>
          </h1>
          <TechStack />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl text-center">
            {translate("education.title")}
            <span className="ml-4">🎓</span>
          </h1>

          {experiences.map((experience, index) => (
            <div key={experience.company} className="flex flex-col gap-4">
              <Experience {...experience} />
              {index !== experiences.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
