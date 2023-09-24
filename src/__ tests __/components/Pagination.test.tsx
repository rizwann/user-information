import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../../components/users/UsersTable/pagination";

// Mock the onPageChange and onItemsPerPageChange functions
const mockOnPageChange = jest.fn();
const mockOnItemsPerPageChange = jest.fn();

const defaultProps = {
  currentPage: 2,
  totalPages: 5,
  itemsPerPage: 20,
  onPageChange: mockOnPageChange,
  onItemsPerPageChange: mockOnItemsPerPageChange,
};

it("it renders with the correct page information", () => {
  render(<Pagination {...defaultProps} />);

  // Assert that the page number is displayed correctly
  expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
});

it("it handles the Previous button click", () => {
  const { getByTestId } = render(<Pagination {...defaultProps} />);

  // Click the Previous button
  fireEvent.click(getByTestId("previous-button"));

  // Assert that the onPageChange function is called with the correct argument
  expect(mockOnPageChange).toHaveBeenCalledWith(1);
});

it("it handles the Next button click", () => {
  const { getByTestId } = render(<Pagination {...defaultProps} />);

  // Click the Next button
  fireEvent.click(getByTestId("next-button"));

  // Assert that the onPageChange function is called with the correct argument
  expect(mockOnPageChange).toHaveBeenCalledWith(3);
});

it("it handles the items per page change", () => {
  render(<Pagination {...defaultProps} />);

  // Select a different value from the items per page dropdown
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "50" } });

  // Assert that the onItemsPerPageChange function is called with the correct argument
  expect(mockOnItemsPerPageChange).toHaveBeenCalledWith(50);
});
