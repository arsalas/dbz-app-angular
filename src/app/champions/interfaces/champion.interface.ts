 export interface ChampionsResponse {
  data:    { [key: string]: Champion };
  format:  string;
  type:    string;
  version: string;
 }

 export type Champions = {[key: string]: Champion}

 export interface Champion {
  blurb:   string;
  id:      string;
  image:   Image;
  info:    Info;
  key:     string;
  name:    string;
  partype: string;
  stats:   { [key: string]: number };
  tags:    Tag[];
  title:   string;
  version: string;
 }

 export interface Image {
  full:   string;
  group:  string;
  h:      number;
  sprite: string;
  w:      number;
  x:      number;
  y:      number;
 }

 interface Info {
  attack:     number;
  defense:    number;
  difficulty: number;
  magic:      number;
 }

 export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
 }


