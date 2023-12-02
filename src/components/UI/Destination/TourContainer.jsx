import React, { useRef } from 'react';
import '../../../assets/styles/home/destination.css';


const TourContainer = ({ imageUrl, title, description }) => {
    const imageRef = useRef(null);

    const scrollToImage = () => {
        imageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="tour-container">
            <div className="image-container" ref={imageRef}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className="info-container">
                <h1>{title}</h1>
                <p>{description}</p>
                <button onClick={scrollToImage} className="itinerary-button">View Itinerary</button>
            </div>
        </div>
    );
};

export default TourContainer;
