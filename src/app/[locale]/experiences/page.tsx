"use client"

import * as React from 'react';

import { useTranslations } from 'next-intl';

import type { ExperienceProps } from '@/components/experience';
import { Experience } from '@/components/experience';
import { Separator } from '@/components/ui/separator';

import { companiesLogo } from '@/constants/experiences';
import { convertTextToHTML } from '@/utils/translation';

export default function Experiences() {
  const translate = useTranslations("experiences");

  const experiences = React.useMemo(() => [
    {
      company: translate("philips.company"),
      logo: companiesLogo.philips,
      startDate: translate("philips.startDate"),
      endDate: translate("philips.endDate"),
      roles: [
        {
          title: translate("philips.roles.senior.title"),
          description: translate.rich(
            "philips.roles.senior.description",
            convertTextToHTML
          ),
        },
      ],
    },
    {
      company: translate("meta.company"),
      logo: companiesLogo.meta,
      startDate: translate("meta.startDate"),
      endDate: translate("meta.endDate"),
      roles: [
        {
          title: translate("meta.roles.middle.title"),
          description: translate.rich(
            "meta.roles.middle.description",
            convertTextToHTML
          ),
        },
      ],
    },
    {
      company: translate("classSolutions.company"),
      logo: companiesLogo.classSolutions,
      startDate: translate("classSolutions.startDate"),
      endDate: translate("classSolutions.endDate"),
      roles: [
        {
          title: translate("classSolutions.roles.middle.title"),
          startDate: translate("classSolutions.roles.middle.startDate"),
          endDate: translate("classSolutions.roles.middle.endDate"),
          description: translate.rich(
            "classSolutions.roles.middle.description",
            convertTextToHTML
          ),
        },
        {
          title: translate("classSolutions.roles.junior.title"),
          startDate: translate("classSolutions.roles.junior.startDate"),
          endDate: translate("classSolutions.roles.junior.endDate"),
          description: translate.rich(
            "classSolutions.roles.junior.description",
            convertTextToHTML
          ),
        },
        {
          title: translate("classSolutions.roles.intern.title"),
          startDate: translate("classSolutions.roles.intern.startDate"),
          endDate: translate("classSolutions.roles.intern.endDate"),
          description: translate.rich(
            "classSolutions.roles.intern.description",
            convertTextToHTML
          ),
        },
      ],
    },
  ] as ExperienceProps[], [translate]);

  return (
    <section className="w-full mt-16">
      <div className="flex flex-col gap-16">
        <h1 className="font-bold text-2xl sm:text-3xl text-center">
          {translate("title")}
        </h1>
        <div className="flex flex-col gap-4">
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
