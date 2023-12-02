// TravelPlan.js
import React from 'react';
import { Link } from 'react-router-dom';
import Registration from "../../../../pages/Registration.jsx";

const TravelPlan = ({ title, items, type}) => {
    return (
        <div className="col">
            <Link to={'/Registration'} className={`fam-cell fam-${type} hoverUp`}>
                <div className="fam-grid">
                    <div className="fam-title">{title}</div>
                    <div className="line"></div>
                    {items.map((item, index) => (
                        <div key={index} className="fam-item"><i className="iconfont icon-biaoshi"></i>{item}</div>
                    ))}
                </div>
                <div className="fam-link">Starts immediately</div>
            </Link>
        </div>
    );
};

export default TravelPlan;
