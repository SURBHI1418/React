import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA_NAME from "../mocks/mocksRestaurantMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  // const accordionHeader = screen.getByText("Recommended (20)");

  // fireEvent.click(accordionHeader);

  // expect(screen.getAllByTestId("foodItems").length).toBe(20);

  // const addBtns = screen.getAllByRole("button", { name: "Add +" });
 
  // fireEvent.click(addBtns[0]);

  // expect(screen.getByText("Cart - (2 items")).toBeInTheDocument();
  // expect(screen.getAllByTestId("foodItems").length).toBe(7);
  // fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  // expect(screen.getAllByTestId("foodItems").length).toBe(2);
  // expect(
  //   screen.getByText("Cart is empty. Add Items to the cart")
  // ).toBeInTheDocument();
});
