import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases ", () => {
  test("Should load contact us page and verify the heading", () => {
    render(<Contact />);

    const loadedHeading = screen.getByRole("heading");

    expect(loadedHeading).toBeInTheDocument();
  });

  test("Should see the button in contact us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should see the name placeholder on contact us page", () => {
    render(<Contact />);

    const namePlaceholder = screen.getByPlaceholderText("name");
    expect(namePlaceholder).toBeInTheDocument();
  });

  it("Should load the all input boxes on contact us page", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
