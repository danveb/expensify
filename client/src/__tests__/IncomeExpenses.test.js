import { render, screen } from "@testing-library/react";
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
        render(<IncomeExpenses />); 
        const text = screen.getByText("Income", { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });

    // getByText
    test("should display expense text", () => {
        render(<IncomeExpenses />); 
        const text = screen.getByText("Expense", { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });
});

// needs work; jest failing