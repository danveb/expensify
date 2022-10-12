import Navbar from "./components/Navbar"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import { GlobalProvider } from "./context/GlobalState"
import "./App.css"; 

const App = () => {
    return (
        <GlobalProvider>
            <Navbar />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default App