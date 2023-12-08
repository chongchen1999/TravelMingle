import { Helmet } from 'react-helmet';
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";
import TourContainer from "../components/UI/Destination/TourContainer.jsx";
import iberianImage from '../assets/images/iberian.webp';
import MapContainer from "../components/UI/Destination/MapContainer.jsx";
import iberianImap1 from '../assets/images/map031.png';
import iberianImap2 from '../assets/images/map032.png';
import GroupSelectionContainer from "../components/UI/Destination/GroupSelectionContainer.jsx";
const Iberian = () => {
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
            <TourContainer
                imageUrl={iberianImage}
                title="Grand Castles, Incredible Art & Iconic Sights: A 15-Day Guided Tour of Spain and Portugal"
                description="See the masterpieces of Spain and Portugal on this 15-day guided tour. In Madrid, an art historian will walk you through the Prado Museum, where Spain's most impressive paintings hang. Navigate Segovia’s medieval streets alongside a Local Expert. Journeying to Granada, visit the region’s oldest olive grove, before dining in the home of a local family, sampling local produce and wine. At the Alhambra, explore the palace's lace-like stone walls and wander its manicured gardens. In Seville, stomp to the sounds of an acoustic guitar during a private flamenco dance lesson. In Porto, sip port during a wine tasting, and in Lisbon, see an architectural masterpiece — the Gothic-style Jerónimos Monastery."
            />
            <MapContainer
                title="MAP & ITINERARY"
                subtitle="Start Madrid, Spain. End Barcelona, Spain."
                mapImage1={iberianImap1}
                mapImage2={iberianImap2}
            />
            <GroupSelectionContainer />
            <Footer />
        </div>
    );
};

export default Iberian;