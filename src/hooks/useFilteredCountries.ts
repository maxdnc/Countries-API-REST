import { useQuery } from "@tanstack/react-query";
import {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
} from "@/api/countries";

export function useFilteredCountries(filter: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["filteredCountries", filter],
    queryFn: () => {
      if (filter === "All" || "" || undefined || null) {
        return getAllCountries();
      } else if (
        [
          "Asia",
          "Oceania",
          "Europe",
          "Americas",
          "Antarctic",
          "Africa",
        ].includes(filter)
      ) {
        return getCountriesByRegion(filter);
      } else {
        return getCountriesByName(filter);
      }
    },
  });

  return { data, isLoading };
}
