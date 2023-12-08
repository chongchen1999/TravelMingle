import { useState } from 'react';
import {Link} from "react-router-dom";
// Import Link from React Router if you are using it for navigation
// import { Link } from 'react-router-dom';

function GroupSelectionContainer() {
    const [selectedGroup, setSelectedGroup] = useState('classic');

    const selectGroup = (group) => {
        setSelectedGroup(group);
    };

    return (
        <div className="group-size-container">
            <h2 className="map-title">CHOOSE YOUR GROUP SIZE</h2>
            <p className="map-subtitle">Choose to travel in a Classic or Small Group</p>
            <div className="group-options">
                <div className={`group-option classic-group ${selectedGroup === 'classic' ? 'selected' : ''}`} onClick={() => selectGroup('classic')}>
                    <div className="checkmark">✔</div>
                    <h3>CLASSIC GROUP</h3>
                    <p>Tours that average 33 guests and no more than 40.</p>
                    <div className="price">From $6,723</div>
                </div>
                <div className={`group-option small-group ${selectedGroup === 'small' ? 'selected' : ''}`} onClick={() => selectGroup('small')}>
                    <div className="checkmark">✔</div>
                    <h3>SMALL GROUP</h3>
                    <p>Tours that have no more than 24 guests.</p>
                    <div className="price">From $7,686</div>
                </div>
            </div>

            <div className="registration-button-container">
                {/* If you are using React Router */}
                {/* <Link to="/registration-form">Register Now</Link> */}
                {/* Otherwise, use regular anchor tag */}
                <button className="map-image">
                    <Link to="/Registration" className="link">Register Now!</Link>
                </button>
            </div>
        </div>
    );
}

export default GroupSelectionContainer;
