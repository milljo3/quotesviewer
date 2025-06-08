import {Link} from "react-router-dom";
import '../styles/QuoteCard.css'

function QuoteCard({quote}) {
    return (
        <Link to={`/quotes/${quote.id}`} className="quote-card">
            <div className="quote-card-content">
                <p>"{quote.text}"</p>
                <small>— {quote.author}</small>
                <br/>
            </div>
        </Link>
    )
}

export default QuoteCard;