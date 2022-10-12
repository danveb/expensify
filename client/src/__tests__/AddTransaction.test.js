import { fireEvent, render } from "@testing-library/react";
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
        const { getByRole } = render(<AddTransaction />); 
        const btn = getByRole("button", { name: "Submit" }); 
        expect(btn).toBeInTheDocument(); 
    }); 

    // getByText
    test("should display title of component", () => {
        const { getByText } = render(<AddTransaction />);
        const text = getByText("Add new transaction"); 
        expect(text).toBeInTheDocument(); 
    });

    // getByText
    test("should not dipslay incorrect title of component", () => {
        const { getByText } = render(<AddTransaction />); 
        const text = getByText("Add new transaction"); 
        expect(text).not.toBe("Add New Transaction"); 
    });

    // getByLabelText
    test("should display correct label for activity/amount", () => {
        const { getByLabelText } = render(<AddTransaction />); 
        const activityLabel = getByLabelText("Activity"); 
        const amountLabel = getByLabelText("Amount", { exact: false }); 
        expect(activityLabel).toBeInTheDocument(); 
        expect(amountLabel).toBeInTheDocument(); 
    });

    // getByLabelText
    test("displays initial state for username/password", () => {
        const { getByLabelText } = render(<AddTransaction />);
        const activityInput = getByLabelText("Activity"); 
        const amountInput = getByLabelText("Amount", { exact: false }); 
        expect(activityInput.value).toBe(""); 
        expect(amountInput.value).toBe(""); 
    });

    // getByLabelText / fireEvent
    test("displays activity and amount when added to inputs", () => {
        const { getByLabelText } = render(<AddTransaction />);
        const activity = "Book"; 
        const amount = "30"; 
        const activityInput = getByLabelText("Activity"); 
        const amountInput = getByLabelText("Amount", { exact: false }); 
        fireEvent.change(activityInput, { target: { value: activity }});
        fireEvent.change(amountInput, { target: { value: amount }});
        expect(activityInput.value).toBe("Book"); 
        expect(amountInput.value).toBe("30"); 
    });
});