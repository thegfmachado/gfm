import Link from "next/dist/client/link";

import { Separator } from "@/components/ui/separator";
import { ThemeModeToggle } from "@/components/theme/theme-mode-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typewriter } from "@/components/typewritter";

const year = new Date().getFullYear();
const typewritterWords = ["Gabriel Machado", "Machadex", "<gfmachado />", "<gfm />"];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-inter">
      <header className="w-full">
        <div className="w-full flex justify-between items-center">
          <Link
            className="text-3xl font-handjet font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent"
            href="/"
          >
            {`<gfmachado />`}
          </Link>
          <ThemeModeToggle />
        </div>
      </header>
      <main className="w-full flex flex-col gap-8 row-start-2 items-center">
        <section className="flex flex-col-reverse md:flex-row gap-4 w-2/3 items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-3xl md:text-4xl font-semibold">
              Hi 👋,
            </p>
            <p className="text-3xl md:text-4xl font-semibold">
              My name is
            </p>
            <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 from-0% via-purple-500 via-30% bg-clip-text text-transparent">
              <Typewriter words={typewritterWords} />
            </p>
            <p className="text-3xl md:text-4xl font-semibold">
              Programming is art. Then I&apos;m an artist
            </p>
          </div>
          <div className="p-1 rounded-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-600">
            <Avatar className="h-48 w-48 md:h-64 md:w-64">
              <AvatarImage src="/profile.png" alt="@gfmachado" />
              <AvatarFallback>Gabriel Machado</AvatarFallback>
            </Avatar>
          </div>

        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-4 mb-2">
          <div>
            Made with <span>❤️</span> and <span>☕</span>
          </div>
          <div className="flex h-6 items-center space-x-4">
            <Link
              className="flex justify-center items-center gap-2 text-lg font-handjet hover:font-bold hover:text-violet-600 active:text-violet-700"
              href="https://github.com/thegfmachado"
              target="_blank"
            >{`<gfm />`}
            </Link>
            <Separator orientation="vertical" />
            <span>© {year}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
