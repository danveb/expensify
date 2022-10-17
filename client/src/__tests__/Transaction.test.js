import { render } from "@testing-library/react";
import TransactionList from "../components/TransactionList"; 
import Transaction from "../components/Transaction"; 

describe("Transaction component", () => {
    // smoke test
    test("renders Transaction component", () => {
        render(<TransactionList>
            <Transaction />
        </TransactionList>); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<TransactionList>
                <Transaction />
            </TransactionList>); 
        expect(asFragment()).toMatchSnapshot(); 
    });
});

// needs work; jest failing