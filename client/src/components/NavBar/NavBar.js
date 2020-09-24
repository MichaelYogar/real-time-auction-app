import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default (params) => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <Navbar.Brand as={Link} to="/">
        Real Time Auction
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Log in
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Sign up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
