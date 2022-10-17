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
});

// needs work; jest failing