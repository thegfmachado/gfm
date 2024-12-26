"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "../ui/button";

type LocaleOptionProps = {
  localeKey: string;
  currentLocale: string;
  name: string;
  flag: string;
  redirectTo: (nextLocale: string) => string;
};

export function LocaleSwitcherOption({ localeKey, currentLocale, name, flag, redirectTo }: LocaleOptionProps) {
  return (
    <Link href={redirectTo(localeKey)}>
      <Button variant="ghost" className="justify-start gap-2 w-full">
        <Image
          className="rounded-full h-5 w-5"
          src={`/images/flags/${flag}.svg`}
          width={20}
          height={20}
          alt={name}
        />
        <span>{name}</span>
        {localeKey === currentLocale && <Check className="h-5 w-5 ml-auto" />}
      </Button>
    </Link>
  );
}
