import axios from "axios";
import type { CountryDetailsType, CountryResponseType } from "../types";

export const getAllCountries = async (): Promise<CountryResponseType[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const allCountries = response.data;

  return allCountries as CountryResponseType[];
};

export const getCountriesByRegion = async (
  region: string,
): Promise<CountryResponseType[]> => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`,
  );
  const regionCountries = response.data;

  return regionCountries as CountryResponseType[];
};

export const getCountriesByName = async (
  name: string,
): Promise<CountryResponseType[]> => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  );
  const nameCountry = response.data;

  return nameCountry as CountryResponseType[];
};

export const getCountryByName = async (
  name: string,
): Promise<CountryDetailsType[]> => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  );
  const country = response.data;

  return country as CountryDetailsType[];
};

export const getBordersCountries = async (codes: string[] | undefined) => {
  const res = await axios.get<CountryDetailsType[]>(
    `https://restcountries.com/v3.1/alpha?codes=${codes?.join(",")}`,
  );
  return res.data;
};
