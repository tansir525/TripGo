import React from "react";

const Mbooking = ({ service }) => {
  const { name, price, description } = service;

  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are You Sure, You Wnat to Cancel?");
    if (proceed) {
      const url = `https://ghostly-beast-42354.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Cancel Successfully");
          }
        });
    }
  };

  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Phone: {price}</h4>
      <h5>Details :{description}</h5>
      <button
        onClick={() => handleDeleteBooking(service._id)}
        className="btn btn-danger"
      >
        Cancel Booking
      </button>
      <hr />
    </div>
  );
};

export default Mbooking;
