import {defaultLang } from './index.ts';
import type { lang as TLang } from '@ts/types.ts';

type translations = {
  [key in TLang]: any
}


export function useTranslations(translations: translations, lang: TLang = defaultLang) {
  return function t(key: string) {
    return translations?.[lang]?.[key] || translations?.[defaultLang]?.[key];
  }
}

export function getLangFromUrl(): TLang | null {
  const [, lang] = window?.location?.pathname.split('/');
  return lang ? lang as TLang : null;
}