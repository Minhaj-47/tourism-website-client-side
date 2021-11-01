//this is header section wher the navlink are used to travel between different routes
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Hooks/useAuth";
import "../Header/header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="sticky-top">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="navBar">
          <Navbar.Brand className="fw-bold fs-4">
            <span>T</span>RAVEL
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
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

            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              {user?.email ? (
                <span className="ms-2">Signed in as: {user?.displayName}</span>
              ) : (
                <span></span>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
