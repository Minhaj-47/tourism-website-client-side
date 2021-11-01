// this is services section where the 6 services are shown from database
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "./Service";
// import Service from "./Service";
import "./services.css";

const Services = () => {
  const [tourServices, setTourServices] = useState();
  useEffect(() => {
    // fetching all service data from mongodb
    axios
      .get("https://guarded-eyrie-88699.herokuapp.com/services")
      .then((data) => setTourServices(data.data));
  }, []);
  console.log(tourServices);
  return (
    <div id="packages">
      <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <Row xs={1} md={2} className="g-4">
        {tourServices?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
