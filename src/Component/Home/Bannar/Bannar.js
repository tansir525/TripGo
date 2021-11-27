import React from "react";
import { Carousel } from "react-bootstrap";
import "./Bannar.css";

const Bannar = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 cimg"
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="bg-black p-2 m-1">“live free, live young”</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cimg"
            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="bg-black p-2 m-1">
              {" "}
              “A journey of a thousand miles begins with a single step”
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 cimg"
            src="https://images.unsplash.com/photo-1499243085368-45e4b97119c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2371&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="bg-black p-2 m-1">
              “We take photos as a return ticket to a moment otherwise gone”{" "}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Bannar;
