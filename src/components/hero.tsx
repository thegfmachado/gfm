"use client"

import * as React from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { SocialMedia } from "./social-media";
import { useTypewriter } from "@gfmachado/use-typewriter";

export function Hero() {
  const translate = useTranslations('general');

  const typewriterParagraphRef = React.useRef<HTMLParagraphElement>(null);
  const typewriter = useTypewriter({ targetRef: typewriterParagraphRef, speed: 75, loop: true, cursor: false });

  React.useEffect(() => {
    typewriter
      .write("Gabriel Machado")
      .stop(500)
      .delete(15)
      .write("Machadex")
      .stop(500)
      .delete(8)
      .write("<gfmachado />")
      .stop(500)
      .delete(13)
      .write("<gfm />")
      .stop(500)
      .delete(7)
      .start();
  }, [typewriter]);

  return (
    <section className="flex flex-col-reverse md:flex-row gap-4 w-full sm:w-2/3 items-center justify-between">
      <div className="w-full flex flex-col gap-1 items-center md:items-start">
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.firstLine')}
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.secondLine')}
        </p>
        <p ref={typewriterParagraphRef} className="block min-h-10 min-w-10 text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 from-0% via-purple-500 via-30% to-purple-500 to-100% bg-clip-text text-transparent" />
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
            fill
            sizes="100%"
          />
        </div>
      </div>
    </section>
  );
}
