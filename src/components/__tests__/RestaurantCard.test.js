import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

describe("RestaurantCard Page Test Cases", () => {
  it("Should render RestaurantCard Component with props Data", () => {
    render(<RestaurantCard restaurantData={MOCK_DATA} />);
    //Asseration
    const name = screen.getByText("Seoul Burgers & Shakes");
    expect(name).toBeInTheDocument();
  });
});
