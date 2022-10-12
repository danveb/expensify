const AppReducer = (state, action) => {
    switch(action.type) {
        // case for actions 
        // case for DELETE_TRANSACTION
        case "DELETE_TRANSACTION": 
            return {
                ...state, 
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload), 
            }; 
        // case for ADD_TRANSACTION
        case "ADD_TRANSACTION":
            return {
                ...state, 
                transactions: [...state.transactions, action.payload], 
            }; 
        default: 
            return state; 
    };
};

export default AppReducer