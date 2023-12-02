import React from 'react';

const ServiceItem = ({ number, title1, title2, description }) => {
    return (
        <div className="col-4">
            <div className="serv-cell">
                <div className="serv-squ"><i className="nbox">{number}</i>{title1}</div>
                <div className="serv-h3">{title2}</div>
                <div className="serv-desc">
                    {description.split('<br>').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
