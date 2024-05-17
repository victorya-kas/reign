import { followerTr } from "@components/Follower/translations";
import { interactiveInterfaceTr } from "@components/InteractiveInterface/translations";
import type { languages as TLanguages, translations as TTranslations } from "@ts/types";

export const languages: TLanguages = {
  en: "English",
  ru: "Русский",
};

export const defaultLang = "en";

export const translations: TTranslations = {
  en: {
    ...interactiveInterfaceTr?.["en"],
    ...followerTr?.["en"],
  },
  ru: {
    ...interactiveInterfaceTr?.["ru"],
    ...followerTr?.["ru"],
  },
} as const;
