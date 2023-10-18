import { useEffect, useState } from "react";
import { CountryResponseType } from "../types";

export const usePagination = (
  data: CountryResponseType[] | undefined = [],
  page = 10,
) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    data;
    setCurrentPage(1);
  }, [data]);

  const itemsPerPage = page;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataCurrentPage = data?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return {
    currentPage,
    dataCurrentPage,
    totalPages,
    handlePageChange,
  };
};
