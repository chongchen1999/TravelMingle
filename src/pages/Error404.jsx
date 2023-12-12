import '../assets/styles/404/404.css';
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <div className="page">
                <div className="page-content">
                    <header>
                        <h1>404</h1>
                        <p>Oops! Page Not Found.</p>
                    </header>
                    <p className="error-advise">
                        THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST OR HAS BEEN MOVED.
                    </p>
                    <Link to="/Home" className="link">Back to homepage.</Link>
                </div>
            </div>
        </div>
    );
}

export default Error404;
