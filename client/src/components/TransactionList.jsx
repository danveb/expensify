import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; 
import Transaction from "./Transaction";

const TransactionList = () => {
    // useContext
    const context = useContext(GlobalContext); 
    // destructure transactions from context
    const { transactions } = context; 

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {/* map through transactions from contextAPI and pass thru props to Transaction component */}
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList