import { fireEvent, render, screen } from "@testing-library/react";
import RestMenu from "../RestMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { act } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should click on the restaurant card", async () => {
  await act(async () =>
    render(
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Header />
          <RestMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Garlic Bread (6)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("food-items").length).toBe(6);

  const addBtns = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("1")).toBeInTheDocument;
});
