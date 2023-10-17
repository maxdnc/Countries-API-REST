// component
import CountryCard from "./CountryCard";
import SkeletonCard from "./SkeletonCard";
import PaginationMenu from "./PaginationMenu";
// type
import type { CountryResponseType, CountriesListProps } from "@/types";
// hook
import { usePagination } from "@/hooks/usePagination";

export default function CountriesList({ data, isLoading }: CountriesListProps) {
  const ItemsLimiteByPage = 12;
  const {
    currentPage,
    dataCurrentPage: countriesCurrentPage,
    totalPages,
    handlePageChange,
  } = usePagination(data, ItemsLimiteByPage);

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

      {data !== undefined && data.length > ItemsLimiteByPage && (
        <PaginationMenu
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
