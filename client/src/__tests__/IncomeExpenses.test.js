import { render } from "@testing-library/react";
import IncomeExpenses from "../components/IncomeExpenses"; 

describe("IncomeExpenses component", () => {
    // smoke test
    test("renders IncomeExpenses component", () => {
        render(<IncomeExpenses />); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<IncomeExpenses />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display income text", () => {
        const { getByText } = render(<IncomeExpenses />); 
        const text = getByText("Income", { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });

    // getByText
    test("should display expense text", () => {
        const { getByText } = render(<IncomeExpenses />); 
        const text = getByText("Expense", { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });
});