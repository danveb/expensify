import { useContext } from "react"; 
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    // useContext
    const context = useContext(GlobalContext); 
    // destructure transactions from context
    const { transactions } = context; 

    const amounts = transactions.map((transaction) => transaction.amount); 
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);  

    // convert date object 
    const date = new Date().toISOString().split("T")[0]; 

    return (
        <>
            <h4>{`Your Balance as of ${date}`}</h4>
            <h1>$ {total}</h1>
        </>
    )
}

export default Balance