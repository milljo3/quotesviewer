import {Link, NavLink, useNavigate} from "react-router-dom";
import '../styles/Navbar.css';
import {quotes} from "../data/quotes.js";


function Navbar() {
    const navigate = useNavigate();

    function goToRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomId = quotes[randomIndex].id;
        navigate(`/quotes/${randomId}`);
    }

    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="home">Quotes App</Link>
                <div className="nav-links">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/quotes" className="nav-link">Quotes</NavLink>
                    <button onClick={goToRandomQuote} className="nav-link nav-button">Random Quote</button>                </div>
            </div>
        </nav>
    );
}

export default Navbar;