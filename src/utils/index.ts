import { localizePath as astroLocalizePath } from "node_modules/astro-i18next/src";
import i18next from "i18next";

export const localizePath = (path:string) => {
 return astroLocalizePath(path, i18next.language)
}