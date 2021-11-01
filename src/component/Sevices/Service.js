// this is individual service section
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, describtion, price } = service;
  return (
    <Col>
      <Card className="w-75 mx-4 shadow-lg p-3 mb-5 bg-body rounded text-start">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>
            <p>{describtion}</p>
            <h3>${price}</h3>
          </Card.Text>
          <Link to={`/service/${service._id}`}>
            <Button className="booking-btn">Book now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
