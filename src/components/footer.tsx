import Link from "next/link";
import { useTranslations } from "next-intl";

import { SocialMedia } from "./social-media";
import { Separator } from "./ui/separator";

const year = new Date().getFullYear();

export function Footer() {
  const translate = useTranslations('footer');

  return (
    <footer className="w-full flex gap-2 flex-wrap items-center justify-center">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <div className="font-handjet text-2xl font-extrabold text-[#A7A7A7]">
            {`<gfm />`}
          </div>
        </Link>
        <SocialMedia gray />
      </div>
      <Separator />
      <div className="w-full flex flex-col-reverse sm:flex-row gap-2 justify-between items-center">
        <div className="text-center text-[#A7A7A7] text-sm">
          &copy; {year}
        </div>
        <div className="mt-2 text-center text-[#A7A7A7] text-sm sm:text-base">
          {translate('made')} <span className="font-extrabold bg-gradient-to-r from-indigo-500 from-0% via-purple-500 via-30% to-pink-500 to-100% bg-clip-text text-transparent">Gabriel Machado</span> {translate('with')} <span>❤️</span> {translate('and')} <span>☕</span>
        </div>
      </div>
    </footer>
  );
}
