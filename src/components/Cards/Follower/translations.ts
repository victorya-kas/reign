import type { FollowerID, lang } from "@ts/types";

type followerName = `${FollowerID}_name`;
type followerTr = {
  [key in lang]: {
    [key in followerName]?: string;
  };
};

export const followerTr: followerTr = {
  en: {
    "2603_name": "Shopkeeper",
    "2802_name": "Watchman",
    "2501_name": "Errand Boy",
    "2015_name": "Defender",
    "2403_name": "Senator",
    "2003_name": "Coroner",
    "2012_name": "Journeyman",
    "2001_name": "Novice",
    "2004_name": "Painter",
    "2005_name": "Lurker",
    "2006_name": "Intendant",
    "2007_name": "Librarian",
    "2008_name": "Viceroy",
    "2009_name": "Banker",
    "2010_name": "Archaeologist",
    "2011_name": "Entertainer",
    "2002_name": "Flagbearer",
    "2013_name": "Outcast",
    "2014_name": "Innkeeper",
    "2016_name": "Redeemer",
    "2402_name": "Consul",
    "2401_name": "Possessor",
    "2504_name": "Healer",
    "2503_name": "Alchemist",
    "2502_name": "Chronicler",
    "2606_name": "Warranter",
    "2605_name": "Merchant",
    "2604_name": "Artisan",
    "2602_name": "Peddler",
    "2601_name": "Barker",
    "2804_name": "Castellan",
    "2803_name": "Knight",
    "2801_name": "Squire",
  },
  ru: {
    "2603_name": "Лавочник",
    "2802_name": "Часовой",
    "2501_name": "Посыльный",
    "2015_name": "Защитник",
    "2403_name": "Сенатор",
    "2003_name": "Коронер",
    "2012_name": "Подмастерье",
    "2001_name": "Послушник",
    "2004_name": "Художник",
    "2005_name": "Лазутчик",
    "2006_name": "Интендант",
    "2007_name": "Библиотекарь",
    "2008_name": "Наместник",
    "2009_name": "Банкир",
    "2010_name": "Археолог",
    "2011_name": "Конферансье",
    "2002_name": "Флагоносец",
    "2013_name": "Изгой",
    "2014_name": "Трактирщик",
    "2016_name": "Скупщик",
    "2402_name": "Консул",
    "2401_name": "Владетель",
    "2504_name": "Лекарь",
    "2503_name": "Алхимик",
    "2502_name": "Летописец",
    "2606_name": "Веритель",
    "2605_name": "Купец",
    "2604_name": "Ремесленник",
    "2602_name": "Коробейник",
    "2601_name": "Зазывала",
    "2804_name": "Кастелян",
    "2803_name": "Рыцарь",
    "2801_name": "Оруженосец",
  },
};
