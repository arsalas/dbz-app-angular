import { Champion, Image } from "./champion.interface";

export interface ChampionResponse {
  data:    { [key: string]: ChampionDetails };
  format:  string;
  type:    string;
  version: string;
 }

 interface ChampionDetails extends Champion {
  allytips:    string[];
  enemytips:   string[];
  lore:        string;
  passive:     Passive;
  recommended: any[];
  skins:       Skin[];
  spells:      Spell[];

 }

 interface Passive {
  description: string;
  image:       Image;
  name:        string;
 }

 interface Skin {
  chromas: boolean;
  id:      string;
  name:    string;
  num:     number;
 }

 interface Spell {
  cooldown:     number[];
  cooldownBurn: string;
  cost:         number[];
  costBurn:     string;
  costType:     string;
  datavalues:   Datavalues;
  description:  string;
  effect:       Array<number[] | null>;
  effectBurn:   Array<null | string>;
  id:           string;
  image:        Image;
  leveltip:     Leveltip;
  maxammo:      string;
  maxrank:      number;
  name:         string;
  range:        number[];
  rangeBurn:    string;
  resource:     string;
  tooltip:      string;
  vars:         any[];
 }

 interface Datavalues {
 }

 interface Leveltip {
  effect: string[];
  label:  string[];
 }
