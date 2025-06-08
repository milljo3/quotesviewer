import {Link} from "react-router-dom";
import '../styles/Home.css'

function Home() {
    return (
        <div className="home-page-content">
            <h1>Welcome to the Quotes App</h1>
            <p>Browse famous quotes by renowned figures.</p>
            <Link to={'/quotes'}>
                <button>
                    View All Quotes
                </button>
            </Link>
        </div>
    )
}

export default Home;