"use client"

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Typewriter } from "./typewritter";
import { SocialMedia } from "./social-media";

export function Hero() {
  const typewritterWords = ["Gabriel Machado", "Machadex", "<gfmachado />", "<gfm />"];
  const translate = useTranslations('general');

  return (
    <section className="flex flex-col-reverse md:flex-row gap-4 w-full sm:w-2/3 items-center justify-between">
      <div className="w-full flex flex-col gap-1 items-center md:items-start">
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.firstLine')}
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.secondLine')}
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 from-0% via-purple-500 via-30% to-purple-500 to-100% bg-clip-text text-transparent">
          <Typewriter words={typewritterWords} />
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.thirdLine')}
        </p>
        <div className="mt-10">
          <SocialMedia />
        </div>
      </div>
      <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-600">
        <div className="relative h-48 w-48 md:h-64 md:w-64">
          <Image
            className="rounded-full p-1"
            src="/images/profile.png"
            alt="Gabriel Machado"
            fetchPriority="high"
            quality={100}
            fill
          />
        </div>
      </div>
    </section>
  );
}
