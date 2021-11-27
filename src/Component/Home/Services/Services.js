import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ghostly-beast-42354.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="service-container">
      <h1>We Offer</h1>
      <Row>
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
