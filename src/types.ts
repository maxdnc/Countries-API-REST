export type CountryResponseType = {
  name: NameType;
  capital: string[];
  flags: FlagsType;
  population: number;
  region: RegionType;
};

export type NameType = {
  common: string;
  nativeName?: NativeNameType;
  official: string;
};
export type NativeNameType = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type FlagsType = {
  png: string;
  svg: string;
  alt: string;
};
export type RegionType =
  | "All"
  | "Asia"
  | "Oceania"
  | "Europe"
  | "Americas"
  | "Antarctic"
  | "Africa";

export type PaginationMenuProps = {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
};

export type CountriesListProps = {
  data?: Array<CountryResponseType>;
  isLoading: boolean;
  isError: boolean;
};

export type CountryDetailsType = {
  flags: FlagsType;
  name: NameType;
  population: number;
  region: RegionType;
  subregion?: string;
  borders?: string[];
  capital?: string[];
  tld: string[];
  currencies?: CurrenciesType;
  languages?: LanguagesType;
  flag: string;
};

export type CurrenciesType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};
export type ContinentType =
  | "Asia"
  | "Oceania"
  | "Europe"
  | "North America"
  | "Antarctica"
  | "South America"
  | "Africa";

export type LanguagesType = {
  [key: string]: string;
};

export type DetailedInformationType = {
  country: CountryDetailsType | undefined;
  borderCountries: CountryDetailsType[];
};

export type ListBorderCountriesType = {
  borderCountries: CountryDetailsType[];
};
export type ErrorCountryDetailsType = {
  name: string;
};

export type CountryCardType = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
};

export type FavoriteButtonType = {
  countryName: string | undefined;
  className?: string;
};
