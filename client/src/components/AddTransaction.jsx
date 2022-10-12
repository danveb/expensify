import { useState, useContext } from "react"; 
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    // useState for formData (controlled component for component-level state)
    const [formData, setFormData] = useState({
        text: "", 
        amount: "",
    }); 
    // destructure formData to be used as values 
    const { text, amount } = formData; 

    // useContext
    const { addTransaction } = useContext(GlobalContext); 
    
    // handleChange(e)
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    // resetForm
    const resetForm = () => {
        setFormData({
            text: "", 
            amount: "", 
        });
    };

    // handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text, 
            amount: +amount, // parsing as number
        }; 
        addTransaction(newTransaction); 
        resetForm(); 
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Activity</label>
                    <input 
                        id="text"
                        type="text"
                        name="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Enter activity..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
                    <input 
                        id="amount"
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={handleChange}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

export default AddTransaction