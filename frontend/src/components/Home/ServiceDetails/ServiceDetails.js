import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = ({service}) => {
    const {id, img,  name, price, description} = service
    return (
        <div>
            <Link to="#" className="card_link">
            <div className="col-md-4">
                <div className="card services">
                    <img src={img} alt="pink" />
                    <h5>{name}</h5>
                    <p className="price">${price}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;