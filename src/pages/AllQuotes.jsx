import {quotes} from "../data/quotes.js";
import '../styles/AllQuotes.css';
import QuoteCard from "../components/QuoteCard.jsx";
import ReturnButton from "../components/ReturnButton.jsx";

function AllQuotes() {
    return (
        <div className="all-quotes">
            <h2>All Quotes</h2>
            <div className="quotes">
                {quotes.map(quote => (
                    <QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
            <ReturnButton page={'/'}/>
        </div>
    )
}

export default AllQuotes;