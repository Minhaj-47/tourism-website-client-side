// this is place order section where you confirm your selected service and add them to database
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const [selectedService, setSelectedService] = useState();
  const [confirmOrder, setConfirmOrder] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    // fetching selected service data with dynamic id
    axios
      .get(`https://guarded-eyrie-88699.herokuapp.com/service/${id}`)
      .then((data) => {
        setSelectedService(data.data);
      });
  }, [id]);

  const handleAddToDatabse = () => {
    setConfirmOrder(false);
    // creating new object with status propery to push in to the database
    const serviceData = {
      email: user?.email,
      name: selectedService?.name,
      img: selectedService?.img,
      describtion: selectedService?.describtion,
      price: selectedService?.price,
      status: "pending",
    };
    // post the confirmed service to database with user email
    axios
      .post(
        "https://guarded-eyrie-88699.herokuapp.com/selectedService",
        serviceData
      )
      .then((data) => setConfirmOrder(true));
  };
  return (
    <div>
      {!confirmOrder ? (
        <div>
          <Col>
            <Card className="w-50 mx-auto my-4 shadow-lg p-3 mb-5 bg-body rounded text-start">
              <Card.Img variant="top" src={selectedService?.img} />
              <Card.Body>
                <Card.Title>
                  <h2>{selectedService?.name}</h2>
                </Card.Title>
                <Card.Text>
                  <p>{selectedService?.describtion}</p>
                  <h3>{selectedService?.price}</h3>
                </Card.Text>
                <Button className="booking-btn" onClick={handleAddToDatabse}>
                  Confirm service
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      ) : (
        <div>
          <h1 className="text-center my-3 text-success fw-bolder fs-2 my-4 p-3">
            The service has added to database
          </h1>
          <br />
          <Link className="booking-btn text-decoration-none" to="/home">
            Back to home
          </Link>
          <Link
            className="booking-btn text-decoration-none ms-3 "
            to="/myorders"
          >
            check your orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
