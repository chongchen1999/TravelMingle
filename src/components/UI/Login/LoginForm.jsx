// LoginComponent.jsx
import {useState} from 'react';
import '../../../assets/styles/Login/login.css';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);

    const handleLogin = () => {
        // Handle login logic here
        console.log(username, password, rememberMe);
    };

    return (
        <div className="container">
            <div className="lay-wrap">
                <div className="lay-col" style={{backgroundImage: "url(src/assets/images/L001.jpg)"}}></div>
                <div className="lay-form lay-login">
                    <form role="form" className="form-inner">
                        <div className="form-tit">WELCOME HOME</div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Please enter username" required
                                   value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Please enter password" required
                                   value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-link justify">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" checked={rememberMe}
                                       onChange={e => setRememberMe(e.target.checked)}/> Remember passwords
                            </label>
                            <a href="javascript:void(0);" className="link">forgotten password??</a>
                        </div>
                        <div className="form-button">
                            <button type="button" className="btn btn-submit" onClick={handleLogin}>Log in</button>
                        </div>
                        <div className="form-footer">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Don't have an account yet?
                            <Link to="/signup" className="link">Sign up</Link> now!
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;