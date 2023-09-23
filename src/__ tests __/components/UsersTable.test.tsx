import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UsersDataTable } from "../../components/users/usersDataTable";

// Mock data
const mockData = [
  {
    id: 1,
    name: "Myrah Wilton",
    email: "mwilton0@abc.net.au",
    birthDate: "1987-04-04",
    age: 34,
  },
  {
    id: 2,
    name: "Ole Patridge",
    email: "opatridge1@mediafire.com",
    birthDate: "1990-09-01",
    age: 30,
  },
  {
    id: 3,
    name: "Dixie Rowet",
    email: "drowet2@latimes.com",
    birthDate: "1975-08-18",
    age: 46,
  },
];
const mockColumns = [
  {
    header: "Name",
    accessorKey: "name",
    id: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
    id: "email",
  },
  {
    header: "Birth Date",
    accessorKey: "birthDate",
    id: "birthDate",
  },
  {
    header: "Age",
    accessorKey: "age",
    id: "age",
  },
  {
    header: "actions",
    accessorKey: "actions",
    id: "actions",
  },
];
describe("UsersDataTable component", () => {
  it("renders the component with data", () => {
    render(<UsersDataTable columns={mockColumns} data={mockData} />);

    // Assert that the component is rendered
    const dataTable = screen.getByTestId("user-data-table");
    expect(dataTable).toBeInTheDocument();
    const nameColumn = screen.getByText("Name");
    const emailColumn = screen.getByText("Email");
    const birthDateColumn = screen.getByText("Birth Date");
    const ageColumn = screen.getByText("Age");
    expect(nameColumn).toBeInTheDocument();
    expect(nameColumn).toHaveAttribute("data-testid", "name-column");
    expect(emailColumn).toBeInTheDocument();
    expect(emailColumn).toHaveAttribute("data-testid", "email-column");
    expect(birthDateColumn).toBeInTheDocument();
    expect(birthDateColumn).toHaveAttribute("data-testid", "birthDate-column");
    expect(ageColumn).toBeInTheDocument();
    expect(ageColumn).toHaveAttribute("data-testid", "age-column");
  });

  it("displays 'No Results' when data is empty", () => {
    render(<UsersDataTable columns={[]} data={[]} />);

    // Assert that 'No Results' is displayed
    const noResultsText = screen.getByText("No Results");
    expect(noResultsText).toBeInTheDocument();
  });
});
