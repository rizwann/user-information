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
    <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:mr-4">
          Rows per page:
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="px-2 py-1 border rounded-lg ml-2"
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-2 md:mt-0 gap-1 md:gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="mt-2 md:mt-0 text-center">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
