import { render } from "@testing-library/react";
import TransactionList from "../components/TransactionList"; 

describe("TransactionList component", () => {
    // smoke test
    test("renders TransactionList component", () => {
        render(<TransactionList />); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<TransactionList />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display history text", () => {
        const { getByText } = render(<TransactionList />);
        const text = getByText("History"); 
        expect(text).toBeInTheDocument(); 
    })
});