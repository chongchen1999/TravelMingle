import { Helmet } from 'react-helmet';
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";
import TourContainer from "../components/UI/Destination/TourContainer.jsx";
import SwitzerlandImage from '../assets/images/switzerland.webp';
import MapContainer from "../components/UI/Destination/MapContainer.jsx";
import SwitzerlandImap1 from '../assets/images/map021.png';
import SwitzerlandImap2 from '../assets/images/map022.png';
import GroupSelectionContainer from "../components/UI/Destination/GroupSelectionContainer.jsx";

const Switzerland = () => {
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
                imageUrl={SwitzerlandImage}
                title="Live La Dolce Vita with VIP Access: 11-Day Italy Guided Tour of the Best Sites & Cuisine"
                description="See Switzerland in all its natural splendor during this 2-week guided tour that whisks you from snow-capped mountain peaks to floral valleys. Outside Lucerne, complete with wooden bridges and baroque churches, zip to the top of Mount Stanserhorn, a pinnacle so tall you can see France and Germany. Take in beautiful Bern and its Catherdrals with a Local Expert followed by a stop in Gruyères. Glide along the Glacier Express, a glass-topped train that will carry you through the Oberalp Valley and to Grindelwald, an idyllic alpine village set to the backdrop of winding rivers and towering waterfalls. In St. Moritz, a mountain railways pass will allow you to traverse the alpine village’s cable cars, funiculars and chairlifts. Then taste the freshest cuisine in Switzerland during an intimate farm-to-table dinner experience, including cheese."
            />
            <MapContainer
                title="MAP & ITINERARY"
                subtitle="Start Zürich, Switzerland. End Zürich, Switzerland."
                mapImage1={SwitzerlandImap1}
                mapImage2={SwitzerlandImap2}
            />
            <GroupSelectionContainer />
            <Footer />
        </div>
    );
};

export default Switzerland;