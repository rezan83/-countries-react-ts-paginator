export interface ICountry {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    cioc?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    fifa?:        string;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
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

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
