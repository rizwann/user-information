import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import UsersTable from "../../components/users/UsersTable";
import { mockColumns, mockUsersWithAge } from "../../test/__ mocks __/mockData";

describe("table component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <UsersTable columns={mockColumns} data={mockUsersWithAge} />
    );

    // Test if the table headers are rendered
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Birth Date")).toBeInTheDocument();
    expect(getByText("Age")).toBeInTheDocument();

    // Test if the initial data is rendered (You can add more specific tests)
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("john@example.com")).toBeInTheDocument();
  });

  it("should sort data correctly", () => {
    const { getByTestId } = render(
      <UsersTable columns={mockColumns} data={mockUsersWithAge} />
    );

    // Click on the "Name" column header to sort in ascending order
    const nameHeader = getByTestId("column-name");
    fireEvent.click(nameHeader);
    // Verify if data is sorted correctly (You can add more specific tests)
    expect(getByTestId("row-0")).toHaveTextContent("Dixie Rowet");

    // Click on the "Name" column header to sort in descending order
    fireEvent.click(nameHeader);
    expect(getByTestId("row-0")).toHaveTextContent("Ole Patridge");

    // Click on the "Age" column header to sort in ascending order
    const ageHeader = getByTestId("column-age");
    fireEvent.click(ageHeader);
    expect(getByTestId("row-0")).toHaveTextContent("John Doe");

    // Click on the "Age" column header to sort in descending order
    fireEvent.click(ageHeader);
    expect(getByTestId("row-0")).toHaveTextContent("Dixie Rowet");
  });

  it("should filter data correctly", () => {
    const { getByPlaceholderText, getByText, getAllByTestId, getByTestId } =
      render(<UsersTable columns={mockColumns} data={mockUsersWithAge} />);

    // Enter search query "John Doe" into the search input
    fireEvent.change(getByPlaceholderText("Search..."), {
      target: { value: "John Doe" },
    });

    const rows = getAllByTestId(/^row-\d+$/);
    const row = getByTestId("row-0");

    // Verify if filtered data is displayed (You can add more specific tests)
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("john@example.com")).toBeInTheDocument();
    expect(getByText("1990-01-01")).toBeInTheDocument();
    expect(row).toHaveTextContent("John Doe");
    expect(rows).toHaveLength(1);
  });

  it("should reset filters correctly", () => {
    const { getByPlaceholderText, getByTestId, getAllByTestId } = render(
      <UsersTable columns={mockColumns} data={mockUsersWithAge} />
    );

    // Enter search query "John" into the search input
    fireEvent.change(getByPlaceholderText("Search..."), {
      target: { value: "john@example.com" },
    });

    // Click the "Reset Filters" button
    const resetButton = getByTestId("reset-button");
    fireEvent.click(resetButton);
    const rows = getAllByTestId(/^row-\d+$/);
    // Verify if the search input is empty and filtered data is cleared
    expect(getByPlaceholderText("Search...")).toHaveValue("");
    // all data is rendered, so the number of rows should be equal to the number of data
    expect(rows).toHaveLength(4);
  });
});
