//this is footer section where some information about us some link are given for better client experience
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="box-container">
        <div className="box">
          <h3>About us</h3>
          <p>
            We have started recently and got very good feedback so far.Our
            perspective is to provide budget and luxuy travel experience to all
            our customer.Our main branch is in New York ..but we have other
            offices all around the world.
          </p>
        </div>
        <div className="box">
          <h3>Branch Locations</h3>
          <Link to="/">india</Link>
          <Link to="/">USA</Link>
          <Link to="/">japan</Link>
          <Link to="/">france</Link>
        </div>
        <div className="box">
          <h3>Quick links</h3>
          <Nav className="d-flex flex-column">
            <Nav.Link as={HashLink} to="/home#banner">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#packages">
              Packages
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#Contacts">
              Contact
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/myorders">
              MyOrders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
          </Nav>
        </div>
        <div className="box">
          <h3>Follow us</h3>
          <Link to="/">facebook</Link>
          <Link to="/">instagram</Link>
          <Link to="/">twitter</Link>
          <Link to="/">linkedin</Link>
        </div>
      </div>

      <h1 className="credit">
        {" "}
        created by <span> Minhaj chy </span> | all rights reserved!{" "}
      </h1>
    </div>
  );
};

export default Footer;
