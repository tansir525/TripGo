import React, { useEffect, useState } from "react";
import Mbooking from "../Mbooking/Mbooking";

const ManageBooking = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ghostly-beast-42354.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className=" border mb-5">
        <h1>Your Booking Checklist </h1>
        <h4>Total : {services.length}</h4>
      </div>
      <div>
        {services.map((service) => (
          <Mbooking key={service._id} service={service}></Mbooking>
        ))}
      </div>
    </div>
  );
};

export default ManageBooking;
