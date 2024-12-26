"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle } from "@/components/ui/drawer";
import { localeInfoMap } from "@/constants/locale";
import { LocaleSwitcherOption } from "./locale-switcher-option";

export function LocaleSwitcher() {
  const locale = useLocale();
  const currentPath = usePathname();

  const redirectTo = React.useCallback(
    (nextLocale: string) => currentPath.replace(`/${locale}`, `/${nextLocale}`),
    [locale, currentPath]
  );

  const currentLocaleInfo = React.useMemo(() => localeInfoMap[locale as keyof typeof localeInfoMap], [locale]);

  const options = React.useMemo(() => Object.entries(localeInfoMap).map(([key, { name, flag }]) => (
    <LocaleSwitcherOption
      key={key}
      localeKey={key}
      currentLocale={locale}
      name={name}
      flag={flag}
      redirectTo={redirectTo}
    />
  )), [locale, redirectTo]);

  return (
    <React.Fragment>
      {/* Desktop View */}
      <div className="hidden sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Image
                className="rounded-full h-5 w-5"
                src={`/images/flags/${currentLocaleInfo?.flag}.svg`}
                width={20}
                height={20}
                alt={locale.toUpperCase()}
              />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {options}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Image
                className="rounded-full h-5 w-5"
                src={`/images/flags/${currentLocaleInfo?.flag}.svg`}
                width={20}
                height={20}
                alt={locale.toUpperCase()}
              />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerTitle className="hidden">Select Language</DrawerTitle>
          <DrawerContent>
            <div className="grid gap-4 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Select Language</h3>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="grid gap-2">
                {options}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </React.Fragment>
  );
}
