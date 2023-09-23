import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/header";

describe("Header component", () => {
  it("renders the component", () => {
    render(<Header />);

    // Use testid (data-testid) to access elements
    const headerElement = screen.getByTestId("header");
    const titleElement = screen.getByText("React Table");

    // Assert that the component and specific elements are rendered
    expect(headerElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the Ryte link with the correct href", () => {
    render(<Header />);

    // Use testid (data-testid) to access the link element
    const ryteLink = screen.getByTestId("ryte-link");

    // Assert that the Ryte link is rendered with the correct href
    expect(ryteLink).toBeInTheDocument();
    expect(ryteLink).toHaveAttribute("href", "https://en.ryte.com/");
  });

  it("renders the theme toggle", () => {
    render(<Header />);

    // Use testid (data-testid) to access the theme toggle element
    const themeToggle = screen.getByTestId("theme-toggle");

    // Assert that the theme toggle is rendered
    expect(themeToggle).toBeInTheDocument();
  });
});
