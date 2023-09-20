import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function CustomNavbar() {
  return (
    <Navbar
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      bg="transparent"
      expand="lg"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar.Brand href="#home">
          <span style={{ color: "white" }}>Car Guys</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link style={{ color: "white" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#about">
              About
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#services">
              Services
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
