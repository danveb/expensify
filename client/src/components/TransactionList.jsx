import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState"; 
import Transaction from "./Transaction";

const TransactionList = () => {
    // useEffect + useEffect with local state for async call to backend 
    // const [transactions, setTransactions] = useState([]); 
    // useEffect(() => {
    //     const getTransactions = async () => {
    //         try {
    //             const response = await axios.get("/api/v1/transactions"); 
    //             setTransactions(response.data); 
    //         } catch(error) {
    //             console.log(error); 
    //         };
    //     };
    //     return () => {
    //         getTransactions(); 
    //     }
    // }, [])

    // useContext
    // const context = useContext(GlobalContext); 
    // destructure transactions from context
    const { transactions, getTransactions } = useContext(GlobalContext); 

    useEffect(() => {
        // use return to prevent duplicate calls in React 18...
        return () => {
            getTransactions(); 
        }
        // dependency array empty to prevent infinite loop...
    }, []); 

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