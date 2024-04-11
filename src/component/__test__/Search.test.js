import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/searchData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search the restaurant whenever giving specific input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("cards-item");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const SearchBox = screen.getByTestId("search-box");
  fireEvent.change(SearchBox, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("cards-item");

  expect(cards.length).toBe(3);
});

it("Should filter out the top-rated restauratns", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const filterButton = screen.getByRole("button", {
    name: "Filter Top Restaurants",
  });

  fireEvent.click(filterButton);

  const filteredCards = screen.getAllByTestId("cards-item");

  expect(filteredCards.length).toBe(4);
});
