import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Button from "../../components/ui/button";

describe("Button Component", () => {
  it("renders a default button correctly", () => {
    const { getByText } = render(
      <Button variant="default">Default Button</Button>
    );
    const button = getByText("Default Button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders a destructive button correctly", () => {
    const { getByText } = render(
      <Button variant="destructive">Destructive Button</Button>
    );
    const button = getByText("Destructive Button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-destructive");
  });

  it("handles click events correctly", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button variant="default" onClick={onClick}>
        Click Me
      </Button>
    );

    const button = getByText("Click Me");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className correctly", () => {
    const { getByText } = render(
      <Button variant="secondary" className="custom-class">
        Custom Class
      </Button>
    );
    const button = getByText("Custom Class");

    expect(button).toHaveClass("custom-class");
  });

  it("renders a small button correctly", () => {
    const { getByText } = render(
      <Button variant="default" size="sm">
        Small Button
      </Button>
    );
    const button = getByText("Small Button");

    expect(button).toHaveClass("h-9");
  });
});
