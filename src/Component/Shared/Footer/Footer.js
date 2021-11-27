import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Card className="text-center bg-black text-white">
        <Card.Body>
          <Card.Title>Contact us</Card.Title>
          <Card.Text>
            Address: lot 2770-C, Jalan Industri 12, Kampung Baru Sungai Buloh,
            47000 Sungai Buloh, Selangor Number:38702589074098
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          ©All right and reserve by TripGo
        </Card.Footer>
      </Card>
    </>
  );
};

export default Footer;
