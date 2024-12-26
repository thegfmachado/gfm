import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { notFound } from 'next/navigation';
import { Inter, Handjet } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { Separator } from "@/components/ui/separator";
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { TabManager } from "@/components/tab-manager";

import { supportedLocales } from '@/i18n/routing';
import type { StaticPageProps } from "@/types/page";

type LocaleLayoutProps = StaticPageProps & {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const handjet = Handjet({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-handjet",
});

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  const { params } = props;
  const { locale } = await params;
  const translate = await getTranslations({ locale });

  return {
    title: translate("metadata.title"),
    description: translate("metadata.description"),
    creator: "Gabriel Machado",
    openGraph: {
      title: translate("metadata.title"),
      description: translate("metadata.description"),
      images: 'https://iili.io/2ex49zF.png',
      type: "website",
    },

    authors: [
      {
        name: "Gabriel Machado",
        url: "https://www.linkedin.com/in/gabriel-ferreira-machado-0221ba15b",
      },
    ],
  };
}

const year = new Date().getFullYear();

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children, params } = props;
  const { locale } = await params;

  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${handjet.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="grid items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-10 font-inter">
              <Header />
              <main className="w-full flex flex-col gap-8 row-start-2 items-center">
                <Hero />
                <Separator className="mt-10" orientation="horizontal" />
                <TabManager>{children}</TabManager>
              </main >
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
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
