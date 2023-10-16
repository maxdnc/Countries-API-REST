import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAllCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const allCountries = response.data;

      return allCountries;
    },
  });
};
