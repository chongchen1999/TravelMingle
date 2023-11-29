
import {Link} from "react-router-dom";
// 引入 Swiper styles

const Banner = () => {
    return (
        <div className="index-ke-banner">
            <div className="swiper-container swiper-ke-banner">
                <div className="swiper-wrapper">
                    <Link to="/Italy" target="_blank" className="swiper-slide" style={{ backgroundImage: 'url(src/assets/images/italy.webp)' }}></Link>
                    <Link to="/Switzerland" target="_blank" className="swiper-slide" style={{ backgroundImage: 'url(src/assets/images/switzerland.webp)' }}></Link>
                    <Link to="/Iberian" target="_blank" className="swiper-slide" style={{ backgroundImage: 'url(src/assets/images/iberian.webp)' }}></Link>
                </div>


                <div className="swiper-ke-next"><i className="iconfont icon-nex"></i></div>
                <div className="swiper-ke-prev"><i className="iconfont icon-prev"></i></div>

                {/* 自定义分页器 */}
                <div className="swiper-pagination" style={{ bottom: '70px', width: '1200px', left: '50%' }}></div>
            </div>

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
