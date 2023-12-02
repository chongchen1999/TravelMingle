import React from 'react';

const MapContainer = ({ title, subtitle, mapImage1, mapImage2 }) => {
    return (
        <div className="map-container">
            <h2 className="map-title">{title}</h2>
            <p className="map-subtitle">{subtitle}</p>
            <div className="map-image">
                <img src={mapImage1} alt="Tour Map" />
            </div>
            <div className="map-image" id="target-image">
                <img src={mapImage2} alt="Tour Map" />
            </div>
        </div>
    );
};

export default MapContainer;
