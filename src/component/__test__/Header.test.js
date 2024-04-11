import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load the header component", () => {
  render(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cart = screen.getByText("Cart");

  expect(cart).toBeInTheDocument();
});

it("Should load the header component and check loginbutton", () => {
  render(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login:" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout:" });

  expect(logoutButton).toBeInTheDocument();
});
