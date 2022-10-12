// create context here
// for larger apps we'll require different context
// -> Shop context
// -> Profile context

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 
// initial state
const INITIAL_STATE = {
    transactions: [
        {
            id: 1, 
            text: "Groceries", 
            amount: -200, 
        },
        {
            id: 2, 
            text: "Cooking Class", 
            amount: -150, 
        },
        {
            id: 3, 
            text: "Freelance", 
            amount: 7000, 
        },
        {
            id: 4, 
            text: "Macbook Air", 
            amount: -1700, 
        },
        {
            id: 5, 
            text: "Rent", 
            amount: -2600, 
        },
    ],
};

// createContext
export const GlobalContext = createContext(INITIAL_STATE); 

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    // actions 
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
            deleteTransaction, 
            addTransaction, 
        }}>
            {children}
        </GlobalContext.Provider>
    )
}