import { render, screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import { withPromotedLable } from "../RestoCard";
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";

it("Should load the resto card component and verify the name of the data", () => {
  render(<RestoCard resInfo={MOCK_DATA} />);

  const restName = screen.getByText("Pizza Hut");

  expect(restName).toBeInTheDocument();
});

it("Should load the resto card component and verify the opened label for HOC", () => {
  const RestoCardWithHOC = withPromotedLable(RestoCard);

  render(<RestoCardWithHOC resInfo={MOCK_DATA} />);

  const openedLabel = screen.getByText("Open");

  expect(openedLabel).toBeInTheDocument();
});
