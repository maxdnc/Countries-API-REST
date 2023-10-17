// component
import CountryCard from "./CountryCard";
import SkeletonCard from "./SkeletonCard";
import PaginationMenu from "./PaginationMenu";
// type
import { CountryResponseType } from "@/types";
// api
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "@/api/countries";
import { usePagination } from "@/hooks/usePagination";

export default function CountriesList() {
  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getAllCountries(),
  });
  const ItemsLimiteByPage = 12;

  const {
    currentPage,
    dataCurrentPage: countriesCurrentPage,
    totalPages,
    handlePageChange,
  } = usePagination(countries, ItemsLimiteByPage);

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 px-4 py-4 ">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 px-4 py-4">
        {countriesCurrentPage?.map((country: CountryResponseType) => (
          <li key={country.name.official}>
            <CountryCard
              name={country.name.official}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          </li>
        ))}
      </ul>

      {countries !== undefined && countries.length > ItemsLimiteByPage && (
        <PaginationMenu
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
