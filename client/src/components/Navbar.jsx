import "../styles/Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-brand">
                Expensify
            </div>
            <div>
                <ul className="navbar-links">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar