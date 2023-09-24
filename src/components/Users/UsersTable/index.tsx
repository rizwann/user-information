import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../../ui/button";
import Pagination from "./pagination";

export type TableColumn = {
  header: string;
  accessor: keyof User;
};

type TableProps = {
  columns: TableColumn[];
  data: User[];
};

type User = {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  age: number;
};

const UsersTable: React.FC<TableProps> = ({ columns, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof User | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // State for rows per page

  useEffect(() => {
    const sorted = [...data].sort((a, b) => {
      if (!sortBy) return 0;

      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === bValue) return 0;

      return sortDirection === "asc"
        ? aValue < bValue
          ? -1
          : 1
        : bValue < aValue
        ? -1
        : 1;
    });

    setSortedData(sorted);
  }, [data, sortBy, sortDirection]);

  useEffect(() => {
    // Filter data when searchQuery changes
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    // Sort the filtered data
    const sorted = [...filtered].sort((a, b) => {
      if (!sortBy) return 0;

      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === bValue) return 0;

      return sortDirection === "asc"
        ? aValue < bValue
          ? -1
          : 1
        : bValue < aValue
        ? -1
        : 1;
    });

    setSortedData(sorted);
    setCurrentPage(1); // Reset to the first page when searching
  }, [data, searchQuery, sortBy, sortDirection]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (column: keyof User) => {
    if (column === sortBy) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleResetFilter = () => {
    setSortBy(null);
    setSortDirection("asc");
    setSearchQuery("");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle items per page change
  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing rows per page
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col items-center mb-4 space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="px-2 py-1 border rounded-lg"
          data-testid="search-input"
        />
        <Button
          variant="destructive"
          onClick={handleResetFilter}
          size="sm"
          data-testid="reset-button"
        >
          Reset Filters
        </Button>
      </div>
      <table className="min-w-full border divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => handleSort(column.accessor)}
                className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase cursor-pointer hover:text-gray-700"
                data-testid={`column-${column.accessor}`}
              >
                <div className="flex items-center">
                  {column.header}
                  {sortBy === column.accessor && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? (
                        <ArrowUp size={16} />
                      ) : (
                        <ArrowDown size={16} />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentData.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 1 ? "bg-gray-100" : ""}
              data-testid={`row-${index}`} // Test ID added
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!searchQuery && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

export default UsersTable;
