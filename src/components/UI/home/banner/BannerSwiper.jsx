import {Link} from "react-router-dom";

const BannerSwiper = () => {
    return (
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
    );
};

export default BannerSwiper;
