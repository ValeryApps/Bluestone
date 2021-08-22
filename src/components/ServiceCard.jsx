import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 shadow">
      <Link to={`/services/${service?.id}`}>
        <div className="service-media">
          <img src={service.imageUrl} alt="" />
        </div>
        <div className="service-desc">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
