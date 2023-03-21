export interface ICountry {
  name: Name;
  status: Status;
  currencies?: Currencies;
  idd: Idd;
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  area: number;
  flag: string;
  maps: Maps;
  population: number;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  postalCode?: PostalCode;
  capital?: string[];
  //   car: Car;
  //   borders?: string[];
  //   demonyms?: Demonyms;
  //   capitalInfo: CapitalInfo;
  // unMember:     boolean;
  // altSpellings: string[];
  // translations: { [key: string]: Translation };
  // latlng:       number[];
  // landlocked:   boolean;
  // cioc?:        string;
  // gini?:        { [key: string]: number };
  // fifa?:        string;
  // tld?:         string[];
  // cca2:         string;
  // ccn3?:        string;
  // cca3:         string;
  // independent?: boolean;
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America'
}

interface Currencies {
  NZD?: Aed;
  MAD?: Aed;
  GBP?: Aed;
  GGP?: Aed;
  XOF?: Aed;
  DKK?: Aed;
  EUR?: Aed;
  PYG?: Aed;
  KGS?: Aed;
  SCR?: Aed;
  MOP?: Aed;
  NAD?: Aed;
  ZAR?: Aed;
  MUR?: Aed;
  KES?: Aed;
  TOP?: Aed;
  AUD?: Aed;
  XPF?: Aed;
  LAK?: Aed;
  LBP?: Aed;
  MVR?: Aed;
  USD?: Aed;
  AWG?: Aed;
  EGP?: Aed;
  TVD?: Aed;
  BMD?: Aed;
  XCD?: Aed;
  UYU?: Aed;
  GNF?: Aed;
  BND?: Aed;
  SGD?: Aed;
  PHP?: Aed;
  THB?: Aed;
  MWK?: Aed;
  KWD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  SZL?: Aed;
  SRD?: Aed;
  SOS?: Aed;
  JOD?: Aed;
  BYN?: Aed;
  XAF?: Aed;
  NPR?: Aed;
  BBD?: Aed;
  CHF?: Aed;
  CVE?: Aed;
  TMT?: Aed;
  SLL?: Aed;
  VND?: Aed;
  CDF?: Aed;
  MXN?: Aed;
  TZS?: Aed;
  HTG?: Aed;
  RUB?: Aed;
  KYD?: Aed;
  IRR?: Aed;
  MNT?: Aed;
  ILS?: Aed;
  JEP?: Aed;
  MDL?: Aed;
  TRY?: Aed;
  NGN?: Aed;
  HNL?: Aed;
  UGX?: Aed;
  BIF?: Aed;
  AZN?: Aed;
  DJF?: Aed;
  JMD?: Aed;
  QAR?: Aed;
  CZK?: Aed;
  IQD?: Aed;
  LKR?: Aed;
  GHS?: Aed;
  IDR?: Aed;
  PGK?: Aed;
  IMP?: Aed;
  AOA?: Aed;
  NOK?: Aed;
  TJS?: Aed;
  FOK?: Aed;
  LSL?: Aed;
  BAM?: BAM;
  RWF?: Aed;
  BOB?: Aed;
  DZD?: Aed;
  KZT?: Aed;
  KRW?: Aed;
  BHD?: Aed;
  CLP?: Aed;
  PKR?: Aed;
  SEK?: Aed;
  AFN?: Aed;
  ANG?: Aed;
  RSD?: Aed;
  CNY?: Aed;
  PAB?: Aed;
  ERN?: Aed;
  LRD?: Aed;
  ARS?: Aed;
  ZWL?: Aed;
  CKD?: Aed;
  TTD?: Aed;
  COP?: Aed;
  BZD?: Aed;
  BTN?: Aed;
  INR?: Aed;
  TND?: Aed;
  MRU?: Aed;
  VES?: Aed;
  UZS?: Aed;
  MKD?: Aed;
  ISK?: Aed;
  BDT?: Aed;
  CRC?: Aed;
  MGA?: Aed;
  GIP?: Aed;
  KMF?: Aed;
  AED?: Aed;
  FKP?: Aed;
  HKD?: Aed;
  MYR?: Aed;
  VUV?: Aed;
  YER?: Aed;
  KID?: Aed;
  GMD?: Aed;
  GTQ?: Aed;
  SAR?: Aed;
  SSP?: Aed;
  AMD?: Aed;
  GEL?: Aed;
  ZMW?: Aed;
  PLN?: Aed;
  FJD?: Aed;
  GYD?: Aed;
  BWP?: Aed;
  ETB?: Aed;
  BSD?: Aed;
  UAH?: Aed;
  MMK?: Aed;
  ALL?: Aed;
  WST?: Aed;
  SHP?: Aed;
  HUF?: Aed;
  OMR?: Aed;
  STN?: Aed;
  JPY?: Aed;
  NIO?: Aed;
  KPW?: Aed;
  CAD?: Aed;
  SDG?: BAM;
  SBD?: Aed;
  BGN?: Aed;
  BRL?: Aed;
  SYP?: Aed;
  KHR?: Aed;
  MZN?: Aed;
  RON?: Aed;
  LYD?: Aed;
  PEN?: Aed;
  DOP?: Aed;
  TWD?: Aed;
}

interface Aed {
  name: string;
  symbol: string;
}

interface BAM {
  name: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Idd {
  root?: string;
  suffixes?: string[];
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

interface Translation {
  official: string;
  common: string;
}

interface PostalCode {
  format: string;
  regex?: string;
}

enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

enum StartOfWeek {
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned'
}

// interface CapitalInfo {
//   latlng?: number[];
// }

// interface Car {
//   signs?: string[];
//   side: Side;
// }

// enum Side {
//   Left = 'left',
//   Right = 'right'
// }
// interface Demonyms {
//   eng: Eng;
//   fra?: Eng;
// }

// interface Eng {
//   f: string;
//   m: string;
// }
