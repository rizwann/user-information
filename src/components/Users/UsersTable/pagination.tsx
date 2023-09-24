import React from "react";
import Button from "../../ui/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (value: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const itemsPerPageOptions = [10, 20, 50]; // Options for rows per page
  return (
    <div className="flex flex-col items-center justify-between mt-4 md:flex-row">
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:mr-4">
          Rows per page:
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="px-2 py-1 ml-2 border rounded-lg"
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-1 mt-2 md:mt-0 md:gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            data-testid="previous-button"
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
            data-testid="next-button"
          >
            Next
          </Button>
        </div>
      </div>
      <div className="mt-2 text-center md:mt-0">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
