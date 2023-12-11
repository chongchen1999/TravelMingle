import BannerSwiper from "./BannerSwiper.jsx";

const Banner = () => {
    return (
        <div className="index-ke-banner">

            <BannerSwiper />

            {/* 导航部分 */}
            <div className="nav-group">
                <dl className="nav-dl">
                    <dt><span className="iconfont icon-kecheng1"></span><span className="txt">Hot Registration</span>
                    </dt>
                    <dd><span className="iconfont icon-icon-to_right"></span><span>BEST OF ITALY</span></dd>
                    <dd><span className="iconfont icon-icon-to_right"></span><span>SWITZERLAND</span></dd>
                    <dd><span className="iconfont icon-icon-to_right"></span><span>SPAIN & PORTUGAL</span></dd>
                </dl>
            </div>
        </div>
    );
};

export default Banner;
