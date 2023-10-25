import { useQuery } from "@tanstack/react-query";
import { getCountryByName } from "@/api/countries";

export function useCountryDetails(name: string | undefined) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["filteredCountries", name],
    queryFn: () => {
      return getCountryByName(name);
    },
    retry: false,
  });

  return { data, isLoading, isError };
}
