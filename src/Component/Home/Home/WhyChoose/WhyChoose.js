import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./whyChoose.css";

const WhyChoose = () => {
  return (
    <>
      <Container className="m-5 p-5 mx-auto">
        <Row>
          <Col>
            <img
              src="https://st3.depositphotos.com/3837271/16226/i/600/depositphotos_162267816-stock-photo-why-choose-us-sign-paper.jpg"
              alt=""
            />
          </Col>
          <Col>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>We have WorldWide service</Accordion.Header>
                <Accordion.Body>
                  We have since been providing packing services a professional
                  manner with a team of all experienced staff and workers. We
                  are here to serve you and take away .
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>We are Reliable, Amaizing</Accordion.Header>
                <Accordion.Body>
                  We pursue relationships based on transparency, persistence,
                  mutual trust and integrity with our employees, customers,
                  suppliers, shareholders and other business
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyChoose;
