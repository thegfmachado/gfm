"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { skillsLogo } from "@/constants/about";
import { myUserInfo } from "@/constants/general";
import { companiesLogo } from "@/constants/experiences";

type SocialMediaProps = {
  gray?: boolean;
};

const SOCIAL_LINKS = [
  {
    href: myUserInfo.linkedInURL,
    src: companiesLogo.linkedIn,
    alt: "Linkedin logo",
    requiresInvert: true,
  },
  {
    href: myUserInfo.githubURL,
    src: skillsLogo.github,
    alt: "Github logo",
    requiresInvert: false,
  },
  {
    href: myUserInfo.instagramURL,
    src: companiesLogo.instagram,
    alt: "Instagram logo",
    requiresInvert: true,
  },
  {
    href: myUserInfo.email,
    icon: <Mail />,
  },
];

export function SocialMedia({ gray = false }: SocialMediaProps) {
  const containerClasses = gray
    ? "flex gap-4 w-fit p-2 rounded"
    : "flex items-center gap-4 w-fit p-2 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600";

  const linkClasses = gray
    ? "p-2 bg-neutral-700 rounded-full flex items-center justify-center"
    : "";

  const imageSize = gray ? 20 : 24;

  return (
    <div className={containerClasses}>
      {SOCIAL_LINKS.map(({ href, src, alt, icon, requiresInvert }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className={linkClasses || undefined}
        >
          {src ? (
            <Image
              className={requiresInvert ? "invert" : ""}
              src={src}
              width={imageSize}
              height={imageSize}
              alt={alt}
            />
          ) : (
            icon &&
            React.cloneElement(icon, {
              size: imageSize,
              className: "text-neutral-50",
            })
          )}
        </Link>
      ))}
    </div>
  );
}
