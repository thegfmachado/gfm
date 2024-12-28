import * as React from "react";

import Image from "next/image";

export interface ExperienceProps {
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  roles: {
    title: string;
    startDate: string;
    endDate: string;
    description: React.ReactNode;
  }[];
}

export function Experience({
  company,
  logo,
  startDate,
  endDate,
  roles,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center">
        <div className="rounded-full min-w-14">
          <Image
            src={logo}
            priority
            width={56}
            height={56}
            alt={company}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{company}</h2>
          <h4 className="sm:text-lg font-semibold">
            {startDate} - {endDate}
          </h4>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {roles.map((role, index) => (
          <div key={role.title} className="flex gap-4">
            <div className="mt-2 flex flex-col items-center gap-1 min-w-14">
              {roles.length > 1 && (
                <div className="w-4 h-4 rounded-full bg-indigo-500" />
              )}

              {index !== roles.length - 1 && (
                <hr className="w-0.5 grow bg-indigo-500 border-0" />
              )}
            </div>

            <div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{role.title}</h3>
                {roles.length > 1 && (
                  <h4 className="sm:text-lg font-semibold">
                    {role.startDate} - {role.endDate}
                  </h4>
                )}
              </div>
              <div className="text-sm sm:text-base">{role.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
