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
  },
  ru: {
    "2603_name": "Лавочник",
    "2802_name": "Часовой",
    "2501_name": "Посыльный",
    "2015_name": "Защитник",
    "2403_name": "Сенатор",
  },
};
