import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { notFound } from 'next/navigation';
import { Inter, Handjet } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import { Separator } from "@/components/ui/separator";
import { TabManager } from "@/components/tab-manager";
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import type { StaticPageProps } from "@/types/page";
import { supportedLocales } from "@/i18n/request";
import { myUserInfo } from "@/constants/general";

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
        url: myUserInfo.linkedInURL,
      },
    ],
  };
}

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
            <div className="grid items-center justify-items-center min-h-screen p-6 pb-4 gap-16 sm:p-10 font-inter">
              <Header />
              <main className="w-full flex flex-col gap-8 row-start-2 items-center">
                <Hero />
                <Separator className="mt-10" orientation="horizontal" />
                <TabManager>{children}</TabManager>
              </main >
              <Footer />
            </div>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
