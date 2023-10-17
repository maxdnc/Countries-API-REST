import { useQuery } from "@tanstack/react-query";
import { getAllCountries, getCountriesByRegion } from "@/api/countries";

export function useFilteredCountries(region: string) {
  const queryKey = region === "All" ? ["countries"] : ["countries", region];

  const { data: countries, isLoading } = useQuery({
    queryKey,
    queryFn: () => {
      if (region === "All") {
        return getAllCountries();
      } else {
        return getCountriesByRegion(region);
      }
    },
  });

  return { countries, isLoading };
}
