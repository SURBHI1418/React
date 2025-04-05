import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Page Test Cases", () => {
  beforeAll(()=>{
    console.log("Before All")
  });
  beforeEach(()=>{
    console.log("Before Each")
  });
  afterAll(()=>{
    console.log("After All")
  });
  afterEach(()=>{
    console.log("After Each")
  });
  it("Should render Header Component with a login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Asseration
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
  it("Should render Header Component with the Cart Item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Asseration
    const cartItem = screen.getByText("Cart - (0 items)");
    expect(cartItem).toBeInTheDocument();
  });
  it("Should render Header Component with the Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Asseration
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });
  it("Should change Login Buton to Logout on click ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Asseration
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
