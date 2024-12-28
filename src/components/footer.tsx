import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const year = new Date().getFullYear();

export function Footer() {
  return (
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
  );
}
