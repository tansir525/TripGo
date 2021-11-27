import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, price } = service;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 ">
        <img className="cusrom-service-img" src={img} alt="" />
        <h3>{name}</h3>

        <h2>${price}</h2>
        <Link
          to={`/booking/${name} Price:
         ${price}`}
        >
          <div className="btn btn-warning mb-5">Book Now</div>
        </Link>
      </div>
    </>
  );
};

export default Service;
