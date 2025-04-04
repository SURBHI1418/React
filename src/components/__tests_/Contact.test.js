import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
  it( "Should load contact us component", () => {
    render(<Contact />);
  
    const heading = screen.getByRole("heading");
  
    //Asseration
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside contact component", () => {
    render(<Contact />);
  
    const button = screen.getByText("Submit");
  
    //Asseration
    expect(button).toBeInTheDocument();
  });
  test("Should load input as placeholder text name inside contact component", () => {
    render(<Contact />);
  
    const inputName = screen.getByPlaceholderText("name");
  
    //Asseration
    expect(inputName).toBeInTheDocument();
  });
  test("Should load 2 inputboxes inside contact component", () => {
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
  
    //Asseration
    expect(inputBoxes.length).toBe(2);
  });
})



