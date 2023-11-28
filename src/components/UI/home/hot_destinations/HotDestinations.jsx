import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Destination = ({ imgSrc, title, description, link }) => (
    <div className="col-41"> {/* 减少外部边距 */}
        <div className="ksys-box1 flex flex-col justify-between h-full bg-white p-3 rounded-lg shadow-sm"> {/* 减少内边距和阴影 */}
            <img src={imgSrc} alt={title} className="destination-image mb-2 w-full h-auto rounded-lg" /> {/* 减少图片下方边距 */}
            <div className="destination-title text-lg font-semibold mb-1">{title}</div> {/* 减少标题下方边距 */}
            <div className="destination-desc text-sm mb-2">{description}</div> {/* 减少描述下方边距 */}
            <Link to={link} className="discover-more-btn text-center bg-blue-500 text-white py-2 px-4 rounded-lg">Discover More</Link> {/* 按钮样式保持不变 */}
        </div>
    </div>
);

const HotDestinations = () => (
    <div className="g-section">
        <div className="g-header">
            <h3>EXPLORE OUR DESTINATIONS</h3>
            <p>A wide range of destinations, covering different countries, for you to choose from</p>
        </div>
        <div className="container1">
            <div className="row11">
                <Destination
                    imgSrc="src/assets/images/italy.webp"
                    title="BEST OF ITALY"
                    description="Embark on an 11-day luxury tour of Italy, featuring exclusive experiences like a VIP
                            Vatican visit with access to the rarely seen Bramante Staircase in Rome,
                            a traditional farm lunch on Mount Vesuvius, and a leather crafting session in Florence.
                            Cruise Venice's canals by gondola, explore Capri with a Local Expert, and cap off the trip with a private opera performance accompanied
                            by a four-course dinner and regional wines."
                    link="/Italy"
                />

                <Destination
                    imgSrc="src/assets/images/switzerland.webp"
                    title="COUNTRY ROADS OF SWITZERLAND"
                    description="See Switzerland in all its natural splendor during this 2-week guided tour that whisks you from snow-capped
                             mountain peaks to floral valleys. Outside Lucerne, complete with wooden bridges and baroque churches, zip to the top of Mount Stanserhorn,
                              a pinnacle so tall you can see France and Germany. Take in beautiful Bern and its Catherdrals with a
                              Local Expert followed by a stop in Gruyères."
                    link="/Switzerland"
                />

                <Destination
                    imgSrc="src/assets/images/iberian.webp"
                    title="BEST OF SPAIN & PORTUGAL"
                    description="In Madrid, an art historian will walk you through the Prado Museum, where Spain's most
                            impressive paintings hang. Navigate Segovia’s medieval streets alongside a Local Expert. Journeying to Granada,
                            visit the region’s oldest olive grove, before dining in the home of a local family, sampling local produce and wine."
                    link="/Iberian"
                />

            </div>
        </div>
    </div>
);

export default HotDestinations;
