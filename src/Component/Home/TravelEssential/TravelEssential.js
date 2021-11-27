import React from "react";
import "./TravelEssential.css";

const TravelEssential = () => {
  return (
    <>
      <h1 className="mt-5 p-5">TRAVEL ESSENTIALS TIPS</h1>
      <div class="row g-4 mt-5 mb-5 ">
        <div class="col-sm-6 ">
          <div class="card border-0">
            <div class="card-body">
              <img
                className="custom img-fluid rounded"
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
          <div class="card border-0 mt-3">
            <div class="card-body w-50 h-50">
              <h3 class="card-title ">
                The Carry On Travel Essentials You Need for Every Type of Trip
              </h3>
              <p class="card-text">
                When you travel, sometimes your carry-on bag makes you feel like
                a pack mule. When you add children to the mix, you are loaded
                down with every conceivable toy from the toy box: crayons,
                stickers, Lego guys, stuffed animals, you name it. You’re lucky
                if you don’t throw out your back while hauling everything
                through the airport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelEssential;
