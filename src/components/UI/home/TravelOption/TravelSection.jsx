// TravelSection.js
import React from 'react';
import TravelPlan from './TravelPlan.jsx';

const TravelSection = () => {
    return (
        <div className="g-section">
            <div className="g-header">
                <h3>Tailor-made, Multiple options, Different plans</h3>
                <p>All the travel solutions you want are here</p>
            </div>
            <div className="container">
                <div className="row">
                    <TravelPlan
                        title="Economy Tourism Travel"
                        items={["Affordable travel programs", "Selected Travel Routes", "Attentive Travel Advisor Service", "Diverse Accommodation Options"]}
                        type="1"

                    />
                    <TravelPlan
                        title="Luxury Tourism Travel"
                        items={["Tailor-made high-end travel programs", "Private customized itineraries", "Dedicated travel concierge service", "Unique Experiential Activities"]}
                        type="2"

                    />
                </div>
            </div>
        </div>
    );
};

export default TravelSection;
