import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

import logo from "./img/logo-black.png"; // Import your logo file

function Navbr() {
  const customMargin = { marginRight: "1rem" }; // Adjust the value as needed
  const customMargi = { marginRight: "3rem" };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Navbar.Brand href="/adminhome" style={{ marginRight: "2rem" }}>
        <img
          src={logo}
          alt="Your Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/adminhome">Home</Nav.Link>
          <NavDropdown title="edit product" id="basic-nav-dropdown">
            <NavDropdown.Item href="/editfittings">Fittings</NavDropdown.Item>
            <NavDropdown.Item href="/editelectroMechanical">Electro Mechanical</NavDropdown.Item>
            <NavDropdown.Item href="/editsafety">Safety</NavDropdown.Item>
            <NavDropdown.Item href="/editwelding">Welding</NavDropdown.Item>
            <NavDropdown.Item href="/editflanges">Flanges</NavDropdown.Item>
            <NavDropdown.Item href="/editvalves">Valves</NavDropdown.Item>
            <NavDropdown.Item href="/editfasteners">Fasteners</NavDropdown.Item>
            <NavDropdown.Item href="/editinstrumentation">Instrumentation</NavDropdown.Item>
            <NavDropdown.Item href="/editliftingTackles">LiftingTackles</NavDropdown.Item>
            <NavDropdown.Item href="/editfender">Fender</NavDropdown.Item>
            <NavDropdown.Item href="/editelectrical">Electrical</NavDropdown.Item>
            <NavDropdown.Item href="/editotherGeneralItems">OtherGeneralItems</NavDropdown.Item>
            
            
            
            
          </NavDropdown>
        </Nav>
        {/* <Nav style={customMargin}>
          <NotificationsNoneIcon />
        </Nav>
        <Nav style={customMargi}>
          <SettingsIcon />
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbr;
