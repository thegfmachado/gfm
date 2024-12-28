import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const supportedLocales = ['en', 'pt'];

export const routing = defineRouting({
  locales: supportedLocales,
  localeDetection: true,
  defaultLocale: 'en'
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);
