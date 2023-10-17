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
