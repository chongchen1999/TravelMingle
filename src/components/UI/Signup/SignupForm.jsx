// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../../assets/styles/Login/login.css';
import {Link} from "react-router-dom"; // Assuming the CSS is in the same folder

const SignupForm = () => {
    return (
        <div>
            <div className="lay-wrap-login">
                <div className="lay-col-login" style={{backgroundImage: 'url(src/assets/images/L001.jpg)'}}>
                    {/* Background image set here */}
                </div>
                <div className="lay-form lay-regist">
                    <div className="form-inner">
                        <div className="form-tit">WELCOME HOME</div>
                        <form role="form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Please enter username"
                                       name="username" maxLength="20" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Please enter email"
                                       onChange={(e) => e.target.value.replace(/[\u4e00-\u9fa5]/ig, '')} name="email"
                                       required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Please enter password"
                                       name="passwd" required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Please confirm password"
                                       name="confirmPasswd" required/>
                            </div>
                            <div className="form-link">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" defaultChecked/> <span><a
                                    href="#" target="_blank">I have read and agree to the User Agreement</a></span>
                                </label>
                            </div>
                            <div className="form-button">
                                <button type="button" className="btn btn-submit">Registration</button>
                            </div>
                        </form>
                        <div className="form-footer">
                            Already have an account?
                            <Link to="/Login" className="link">Log in</Link> now!
                        </div>
                    </div>
                </div>
            </div>
            <div className="lay-wrap-login-placeholder"> </div>
        </div>
    );
}

export default SignupForm;
