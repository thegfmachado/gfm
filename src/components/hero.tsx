import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typewriter } from "@/components/typewritter";
import { useTranslations } from "next-intl";

export function Hero() {
  const typewritterWords = ["Gabriel Machado", "Machadex", "<gfmachado />", "<gfm />"];
  const translate = useTranslations('general');

  return (
    <section className="flex flex-col-reverse md:flex-row gap-4 w-full sm:w-2/3 items-center justify-between">
      <div className="w-full flex flex-col gap-1">
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.firstLine')}
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.secondLine')}
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 from-0% via-purple-500 via-30% bg-clip-text text-transparent">
          <Typewriter words={typewritterWords} />
        </p>
        <p className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-semibold">
          {translate('hero.title.thirdLine')}
        </p>
      </div>
      <div className="p-1 rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-600">
        <Avatar className="h-48 w-48 md:h-64 md:w-64">
          <AvatarImage fetchPriority="high" src="/images/profile.png" alt="@gfmachado" />
          <AvatarFallback>Gabriel Machado</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}
