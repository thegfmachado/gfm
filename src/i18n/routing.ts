import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const supportedLocales = ['en', 'pt'];

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: 'en'
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);
