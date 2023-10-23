import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

it("Should load contact us component", ()=>{
    render(<Contact />); // render is used to render our component.

    const heading = screen.getByRole("heading");    
    // screen is imported from @testing-library/react
    
    //Assertion
    expect(heading).toBeInTheDocument();
    // toBeInTheDocument comes from "@testing-library/jest-dom"
})

