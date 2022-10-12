import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    // useContext
    const context = useContext(GlobalContext); 
    // destructure transactions from context
    const { transactions } = context; 

    const amounts = transactions.map((transaction) => transaction.amount); 
    const income = amounts
                    .filter((item) => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
    const incomeRounded = Math.round(income); 
    const expense = amounts
                    .filter((item) => item < 0)
                    .reduce((acc, item) => (acc += item),  0) * -1
    const expenseRounded = Math.round(expense); 

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">$ {incomeRounded}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">$ {expenseRounded}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses