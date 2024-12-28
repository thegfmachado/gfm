"use client";

import * as React from "react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { routesPath } from "@/constants/path";

interface TabManagerProps {
  children: React.ReactNode;
}

interface TabOptionProps {
  label: string;
  path: string;
}

export function TabManager({ children }: TabManagerProps) {
  const locale = useLocale();
  const currentPath = usePathname();
  const translate = useTranslations("general.tabs");
  const router = useRouter();

  const handleTabChange = React.useCallback((value: string) => {
    router.push(value);
  }, [router]);

  const menuOptions = React.useMemo(
    () =>
      [
        {
          label: translate("about"),
          path: routesPath.home(locale),
        },
        {
          label: translate("experiences"),
          path: routesPath.experiences(locale),
        },
        {
          label: translate("projects"),
          path: routesPath.projects(locale),
        },
        {
          label: translate("feedbacks"),
          path: routesPath.feedbacks(locale),
        },
      ] as TabOptionProps[],
    [locale, translate]
  );

  return (
    <div className="w-full md:w-2/3">
      <nav className="w-full">
        <ul className="w-full flex">
          {menuOptions.map((option) => {
            const selected = currentPath === option.path;
            const handleClick = () => handleTabChange(option.path);

            return (
              <li key={option.path} className="flex grow p-4 max-sm:px-1 py-0">
                <Button
                  variant="ghost"
                  className={`grow rounded-t-xl ${selected ? "hover:bg-transparent" : "hover:bg-background"}`}
                  onClick={handleClick}
                >
                  <span
                    className={`border-y-4 h-10 flex items-center border-y-transparent ${selected && "border-b-indigo-500"}`}
                  >
                    {option.label}
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="py-4">{children}</div>
    </div>
  );
}
