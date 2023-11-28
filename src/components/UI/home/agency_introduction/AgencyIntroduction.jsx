
const AgencyIntroduction = () => {
    return (
        <div className="g-section zdui-section">
            <div className="g-header">
                <h3>Explore the world and discover the beauty</h3>
                <p>Book anytime, plan your trip easily and enjoy global destinations and local cultural experiences</p>
            </div>
            <div className="container">
                <nav>
                    <div className="nav ms-tabs" role="tablist">
                        <a className="nav-item ms-tab-item active" href="../404 page/404.html">
                            <i className="iconfont icon-kecheng1"></i>
                            <span>Brochures</span>
                        </a>
                        <a className="nav-item ms-tab-item" href="../404 page/404.html">
                            <i className="iconfont iconfont icon-zhinan"></i>
                            <span>Agents</span>
                        </a>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane active" id="nav-cag1" role="tabpanel">
                        <div className="zke-card">
                            <div className="row zke-row">
                                {/* Travel Planning Section */}
                                <div className="col zke-green">
                                    <div className="zke-head">Travel Planning</div>
                                    <div className="row zke-group-row">
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Quick Booking<br />Personalized customization</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Top Destinations<br />multicultural</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col zke-yellow">
                                    <div className="zke-head">Select Travel Services</div>
                                    <div className="row zke-group-row">
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Deluxe Hotel Accommodation<br />Unique Experiences</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Affordable accommodation<br />Transportation services</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col zke-blue">
                                    <div className="zke-head">Comprehensive Travel Coverage</div>
                                    <div className="row zke-group-row">
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>All-round security</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>24-hour customer support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col zke-green">
                                    <div className="zke-head">Easy customer support</div>
                                    <div className="row zke-group-row">
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Online Customer Support<br />Multilingual services</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Travel Advisor Consulting<br />Rapid resolution</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col zke-yellow">
                                    <div className="zke-head">Travel Information Guide</div>
                                    <div className="row zke-group-row">
                                        <div className="col">
                                            <div className="zke-box">
                                                <div>Provide detailed destination information</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgencyIntroduction;
