// ServiceSection.js
import React from 'react';
import ServiceItem from './ServiceItem.jsx';

const ServiceSection = () => {
    return (
        <div className="g-section cson-serv-section">
            <div className="g-header">
                <h3>Our Unique Services</h3>
                <p>Our Unique Services</p>
            </div>
            <div className="container">
                <div className="row row-serve flex-items-xs-center">
                    <ServiceItem
                        number="1"
                        title1="Service1"
                        title2="24/7 Travel Consulting"
                        description="Travel specialists on call<br>Providing flexible advisory services<br>Travel time is precious."
                    />
                    <ServiceItem
                        number="2"
                        title1="Service2"
                        title2="Customized Travel Experiences"
                        description="Customize your trip<br>keep track of the latest travel news<br>experience is always upgraded"
                    />
                    <ServiceItem
                        number="3"
                        title1="Service3"
                        title2="Traveler Community"
                        description="we've all been there!<br>hare experiences and build friendships<br>Get help on your journey"
                    />
                    <ServiceItem
                        number="4"
                        title1="Service4"
                        title2="Sightseeing Spots"
                        description="Each tour package is carefully planned<br> experience each destination with ease<br>professional planning"
                    />
                    <ServiceItem
                        number="5"
                        title1="Service5"
                        title2="Cultural Tours"
                        description="in-depth understanding of the local customs<br>and historical background<br>In addition to sightseeing, we also offer cultural tours"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
