// component
import CountryCard from "./CountryCard";
import PaginationMenu from "./PaginationMenu";
import ErrorCountry from "../ErrorCountry";
import SkeletonList from "./SkeletonList";
// type
import type { CountryResponseType, CountriesListProps } from "@/types";
// hook
import { usePagination } from "@/hooks/usePagination";

export default function CountriesList({
  data,
  isLoading,
  isError,
}: CountriesListProps) {
  const ItemsLimiteByPage = 10;
  const {
    currentPage,
    dataCurrentPage: countriesCurrentPage,
    totalPages,
    handlePageChange,
  } = usePagination(data, ItemsLimiteByPage);

  if (isError) {
    return <ErrorCountry />;
  }

  if (isLoading) {
    return <SkeletonList />;
  }

  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 px-4 py-4">
        {countriesCurrentPage?.map(
          ({
            name,
            population,
            region,
            capital,
            flags,
          }: CountryResponseType) => (
            <li key={name.official}>
              <CountryCard
                name={name.official}
                population={population}
                region={region}
                capital={capital}
                flag={flags.svg}
              />
            </li>
          ),
        )}
      </ul>

      {totalPages > 1 && (
        <PaginationMenu
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
