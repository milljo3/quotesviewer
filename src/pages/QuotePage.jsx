import {useParams} from "react-router-dom";
import {quotes} from "../data/quotes.js";
import '../styles/QuotePage.css'
import ReturnButton from "../components/ReturnButton.jsx";

function QuotePage() {
    const {id} = useParams();

    const quote = quotes.find((quote) => quote.id === id);

    if (!quote) {
        return (
            <div className="quote-not-found">
                <p>Quote not found.</p>
                <ReturnButton page={'/quotes'}/>
            </div>
        )
    }

    return (
        <div className="quote">
            <h2>Quote by {quote.author}</h2>
            <blockquote>
                “{quote.text}”
            </blockquote>
            <ReturnButton page={'/quotes'}/>
        </div>
    );
}

export default QuotePage;