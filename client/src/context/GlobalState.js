// create context here
// for larger apps we'll require different context
// -> Shop context
// -> Profile context

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 
import axios from "axios"; 

// initial state
const INITIAL_STATE = {
    // transactions to be fetched asynchronously from postgresql
    // initialize as empty array 
    transactions: [], 
    error: null, 
    loading: true, 

    // sample transactions without postgresql
    // transactions: [
    //     {
    //         id: 1, 
    //         text: "Groceries", 
    //         amount: -200, 
    //     },
    //     {
    //         id: 2, 
    //         text: "Cooking Class", 
    //         amount: -150, 
    //     },
    //     {
    //         id: 3, 
    //         text: "Freelance", 
    //         amount: 7000, 
    //     },
    //     {
    //         id: 4, 
    //         text: "Macbook Air", 
    //         amount: -1700, 
    //     },
    //     {
    //         id: 5, 
    //         text: "Rent", 
    //         amount: -2600, 
    //     },
    // ],
};

// createContext
export const GlobalContext = createContext(INITIAL_STATE); 

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    // actions 
    // async from backend
    const getTransactions = async () => {
        try {
            const response = await axios.get("/api/v1/transactions"); 
            console.log(response.data); 
            dispatch({
                type: "GET_TRANSACTIONS", 
                payload: response.data, 
            }); 
        } catch(error) {
            dispatch({
                type: "TRANSACTION_ERROR", 
                payload: error.response.data, 
            });
        };
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION", 
            payload: id, 
        }); 
    };

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION", 
            payload: transaction, 
        });
    };

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            // error: state.error, 
            // loading: state.loading, 
            getTransactions, 
            deleteTransaction, 
            addTransaction, 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}