import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [unam, setUnam] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleout  = () => {
    if (unam === "admin" && pass === "admin123") {
      alert("Login successful!");
      // Navigate to the admin home page or any other page after successful login
      navigate("/adminhome"); // Update the path accordingly
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Login Here!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col lg={4} className="border p-3">
            <Form>
              <Form.Group>
                <Form.Label htmlFor="username">User Name</Form.Label>
                <Form.Control
                  id="username"
                  type="text"
                  placeholder="Enter your user name"
                  onChange={(e) => setUnam(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button type="button" onClick={handleout}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
