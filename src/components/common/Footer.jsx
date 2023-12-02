import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/home/bootstrap.css';
import '../../assets/styles/home/index.css';
import '../../assets/styles/home/iconfont.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row foot-row">
                    <div className="col col-info">
                        <div className="end-link">
                            <h4>Travel</h4>
                            <p><Link to="/Error404">privacy policy</Link></p>
                            <p><Link to="/Error404">user agreement</Link></p>
                            <p><Link to="/Error404">copyright protection</Link></p>
                            <p><Link to="/Error404">Website Security</Link></p>
                        </div>
                        <div className="end-text">
                            <h4>Contact us</h4>
                            <p>Email:<br />leng.t@northeastern.edu</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul className="wx-list list-unstyled">
                            <li>
                                <img src="src/assets/images/QRcode.png" height="150px" width="150px" alt="" />
                            </li>
                            <li>
                                <img src="src/assets/images/QRcode.png" height="150px" width="150px" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
