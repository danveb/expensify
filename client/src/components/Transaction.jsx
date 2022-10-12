import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    // useContext 
    const { deleteTransaction } = useContext(GlobalContext); 
    
    const sign = transaction.amount < 0 ? "-" : "+"; 

    // handleDeleteTransaction
    const handleDeleteTransaction = () => {
        deleteTransaction(transaction.id);
    };

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign} ${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={handleDeleteTransaction}>X</button>
        </li>
    )
}

export default Transaction