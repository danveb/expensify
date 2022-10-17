import { fireEvent, render, screen } from "@testing-library/react";
import AddTransaction from "../components/AddTransaction"; 

describe("AddTransaction component", () => {
    // smoke test
    test("renders AddTransaction component", () => {
        render(<AddTransaction />); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<AddTransaction />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByRole 
    test("should display submit button", () => {
        render(<AddTransaction />); 
        const btn = screen.getByRole("button", { name: "Submit" }); 
        expect(btn).toBeInTheDocument(); 
    }); 

    // getByText
    test("should display title of component", () => {
        render(<AddTransaction />);
        const text = screen.getByText("Add new transaction"); 
        expect(text).toBeInTheDocument(); 
    });

    // getByText
    test("should not dipslay incorrect title of component", () => {
        render(<AddTransaction />); 
        const text = screen.getByText("Add new transaction"); 
        expect(text).not.toBe("Add New Transaction"); 
    });

    // getByLabelText
    test("should display correct label for activity/amount", () => {
        render(<AddTransaction />); 
        const activityLabel = screen.getByLabelText("Activity"); 
        const amountLabel = screen.getByLabelText("Amount", { exact: false }); 
        expect(activityLabel).toBeInTheDocument(); 
        expect(amountLabel).toBeInTheDocument(); 
    });

    // getByLabelText
    test("displays initial state for username/password", () => {
        render(<AddTransaction />);
        const activityInput = screen.getByLabelText("Activity"); 
        const amountInput = screen.getByLabelText("Amount", { exact: false }); 
        expect(activityInput.value).toBe(""); 
        expect(amountInput.value).toBe(""); 
    });

    // getByLabelText / fireEvent
    test("displays activity and amount when added to inputs", () => {
        render(<AddTransaction />);
        const activity = "Book"; 
        const amount = "30"; 
        const activityInput = screen.getByLabelText("Activity"); 
        const amountInput = screen.getByLabelText("Amount", { exact: false }); 
        fireEvent.change(activityInput, { target: { value: activity }});
        fireEvent.change(amountInput, { target: { value: amount }});
        expect(activityInput.value).toBe("Book"); 
        expect(amountInput.value).toBe("30"); 
    });
});

// needs work; jest failing