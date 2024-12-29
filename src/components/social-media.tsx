"use client"

import Image from "next/image";
import Link from "next/link";

import { Mail } from "lucide-react";

import { skillsLogo } from "@/constants/about";

type SocialMediaProps = {
  gray?: boolean;
}

export function SocialMedia(props: SocialMediaProps) {
  const { gray = false } = props;

  if (gray) {
    return (
      <div className="flex gap-4 w-fit p-2 rounded">
        <Link
          className="p-2 bg-neutral-700 rounded-full flex items-center justify-center"
          href="https://www.linkedin.com/in/gabriel-ferreira-machado-0221ba15b/"
          target="_blank"
        >
          <Image className="rounded-full invert" src="/images/companies/linkedin.svg" width={20} height={20} alt="Linkedin logo" />
        </Link>
        <Link
          className="p-2 bg-neutral-700 rounded-full flex items-center justify-center"
          href="https://github.com/thegfmachado"
          target="_blank"
        >
          <Image className="rounded-full" src={skillsLogo.github} width={20} height={20} alt="Github logo" />
        </Link>
        <Link
          className="p-2 bg-neutral-700 rounded-full flex items-center justify-center"
          href="https://www.instagram.com/gfmachado_/"
          target="_blank"
        >
          <Image className="rounded-full invert" src="/images/companies/instagram.svg" width={20} height={20} alt="Instagram logo" />
        </Link>
        <Link
          className="p-2 bg-neutral-700 rounded-full flex items-center justify-center"
          href="mailto:gabriel.ferreira.machado@hotmail.com"
          target="_blank"
        >
          <Mail size={20} className="text-neutral-50" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 w-fit p-2 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
      <Link
        href="https://www.linkedin.com/in/gabriel-ferreira-machado-0221ba15b/"
        target="_blank"
      >
        <Image className="invert" src="/images/companies/linkedin.svg" width={24} height={24} alt="Linkedin logo" />
      </Link>
      <Link
        href="https://github.com/thegfmachado"
        target="_blank"
      >
        <Image src={skillsLogo.github} width={24} height={24} alt="Github logo" />
      </Link>
      <Link
        href="https://www.instagram.com/gfmachado_/"
        target="_blank"
      >
        <Image className="invert" src="/images/companies/instagram.svg" width={24} height={24} alt="Instagram logo" />
      </Link>
      <Link
        href="mailto:gabriel.ferreira.machado@hotmail.com"
        target="_blank"
      >
        <Mail className="text-neutral-50" />
      </Link>
    </div>
  );
}
