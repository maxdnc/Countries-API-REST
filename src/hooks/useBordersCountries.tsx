import { useQuery } from "@tanstack/react-query";
import { getBordersCountries } from "@/api/countries";
import { useEffect, useState } from "react";
import { CountryDetailsType } from "@/types";

export function useBordersCountries(name: string[] | undefined) {
  const [borderCountries, setBorderCountries] = useState<CountryDetailsType[]>(
    [],
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["borderCountries", name],
    queryFn: () => {
      if (name) {
        return getBordersCountries(name);
      } else {
        return Promise.resolve([]);
      }
    },
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setBorderCountries(data);
    }
  }, [data]);

  return { data, isLoading, isError, borderCountries };
}
