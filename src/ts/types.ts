// common
export type stringObject =  {
  [key:string]: string
}

export type tooltip = {
  title: string,
  content: string
}

export type lang = "en" | "ru";
export type languages = {
  [key in lang]: string;
}
export type translations = {
  [key in lang]: {
    [key: string]: string;
  };
};

// hero's types
export type heroID =
  | "1101" //Praetor
  | "1201" // Scout
  | "1301" // Ambassador
  | "1401" // Right Hand
  | "1501" //Archmaester
  | "1601" // Treasurer
  | "1701" // Recruiter
  | "1801"; //Commander
export type heroColor = "blue" | "gold" | "silver" | "green" | "red";
export type heroOrder = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

// follower's types
export type MerchantFollowerID = "2601" | "2602" | "2603" | "2604" | "2605" | "2606";
export type NoblesFollowerID = "2401" | "2402" | "2403";
export type NeutralFollowerID = "2001" | "2002" | "2003" | "2004" | "2005" | "2006" | "2007" | "2008" | "2009" | "2010" | "2011" | "2012" | "2013" | "2014" | "2015" | "2016";
export type MaesterFollowerID = "2501" | "2502" | "2503" | "2504";
export type GuardFollowerID = "2801" | "2802" | "2803" | "2804"
export type FollowerID = MerchantFollowerID | NoblesFollowerID | NeutralFollowerID | MaesterFollowerID | GuardFollowerID;
export type followerColor = "blue" | "gold" | "green" | "red" | "purple";
export type followerValue = "1" | "2" | "3" | "4" | "5" | "6";
