// icon
import { ChevronLeft, ChevronRight } from "lucide-react";
// component
import { Button } from "./ui/button";
// type
import type { PaginationMenuProps } from "../types";

export default function PaginationMenu({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationMenuProps) {
  return (
    <div className="flex items-center justify-center gap-6 px-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">previous page</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="font-semibold text-primary">
        {currentPage} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">next page</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
