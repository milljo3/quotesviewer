import {useNavigate} from "react-router-dom";
import '../styles/ReturnButton.css'

function ReturnButton({page}) {
    const navigate = useNavigate();

    return (
        <button className="return-button" onClick={() => navigate(page)}>
            ⬅ Back
        </button>
    )
}

export default ReturnButton;