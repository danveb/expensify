import { render } from "@testing-library/react";
import Balance from "../components/Balance"; 

describe("Balance component", () => {
    // smoke test
    test("renders Balance component", () => {
        render(<Balance />); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Balance />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("displays correct date", () => {
        const date = new Date().toISOString().split("T")[0]; 
        const { getByText } = render(<Balance />); 
        const text = getByText(`Your Balance as of ${date}`, { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });

    // getByText
    test("displays correct total", () => {
        const { getByText } = render(<Balance />); 
        const totalBalance = getByText(`$`, { exact: false }); 
        expect(totalBalance).toBeInTheDocument(); 
    });
});