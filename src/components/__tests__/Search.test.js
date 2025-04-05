import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurant List for burger text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeSearch = screen.getAllByTestId("restaurantCard");
  expect(cardBeforeSearch.length).toBe(20);
  //Asseration
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //screen should load 3 cart
  const cards = screen.getAllByTestId("restaurantCard");

  expect(cards.length).toBe(3);
});
it("Should filter Search Top Restaurant ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardBeforeFilter = screen.getAllByTestId("restaurantCard");
  expect(cardBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardAfterFliter=screen.getAllByTestId("restaurantCard");
  expect(cardAfterFliter.length).toBe(8)
});
