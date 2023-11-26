const FlexBar = () => {
    return (
        <div className="flex-bar">
            <div className="container justify">
                <div className="flex-box">
                    <span className="iconfont icon-luxiang"></span>
                    <h4>Quick Booking</h4>
                    <p>Easily book flights, hotels</p>
                </div>
                <div className="flex-box">
                    <span className="iconfont icon-suishisuidi"></span>
                    <h4>Comparison Savings</h4>
                    <p>Get the best discounts</p>
                </div>
                <div className="flex-box">
                    <span className="iconfont icon-xuexi1"></span>
                    <h4>User Reviews</h4>
                    <p>Access to real user reviews</p>
                </div>
                <div className="flex-box">
                    <span className="iconfont icon-xuexi"></span>
                    <h4>Travel Experience</h4>
                    <p>Personalized customized services</p>
                </div>
            </div>
        </div>
    );
}

export default FlexBar;
