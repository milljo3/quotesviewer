import '../styles/NotFound.css'
import ReturnButton from "./ReturnButton.jsx";

function NotFound() {
    return (
        <div className="not-found-container">
            <p>Page not found.</p>
            <ReturnButton />
        </div>
    )
}

export default NotFound;