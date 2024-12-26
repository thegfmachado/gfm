import Link from "next/link";
import { ThemeModeToggle } from "./theme/theme-mode-switcher";
import { LocaleSwitcher } from "./locale/locale-switcher";

export function Header() {
  return (
    <header className="w-full">
      <div className="w-full flex justify-between items-center">
        <Link
          className="text-2xl sm:text-3xl font-handjet font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent"
          href="/"
        >
          {`<gfmachado />`}
        </Link>

        <div className="flex gap-2">
          <ThemeModeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
