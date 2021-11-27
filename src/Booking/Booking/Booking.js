import React from "react";
import { useParams } from "react-router";
import AddService from "../../Component/Home/AddService/AddService";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1 className="mt-5 bg-dark text-white">{serviceId}</h1>
      <AddService></AddService>
    </div>
  );
};

export default Booking;
