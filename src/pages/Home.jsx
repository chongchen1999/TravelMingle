import { Helmet } from 'react-helmet';
import FlexBar from "../components/UI/home/Flexbar";
import Navbar from "../components/common/navbar/Navbar";
import Banner from "../components/UI/home/banner/Banner";
import HotDestinations from "../components/UI/home/hot_destinations/HotDestinations";

const Home = () => {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="src/assets/styles/home/swiper.min.css" />
                <link rel="stylesheet" href="src/assets/styles/home/bootstrap.css" />
                <link rel="stylesheet" href="src/assets/styles/home/index.css" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="src/assets/styles/home/iconfont.css" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            </Helmet>


            <Navbar />
            <Banner />
            <FlexBar />
            <HotDestinations />

        </div>
    );
}

export default Home;