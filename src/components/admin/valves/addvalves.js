import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import Navbr from "../navbr";
import AXIOS from "axios";
import { useNavigate } from "react-router-dom";

const Addvalves = () => {
  const [pname, setPname] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();
  
  const handleout = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append("file", file);
    formData.append("pname", pname);
    formData.append("desc", desc);

    try {
      const response = await AXIOS.post(
        "http://localhost:9000/addvalves",
        formData
      );
      alert(response.data.msg16);
      navigate("/editvalves"); // Navigate to '/editfittings' after a successful submission
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <>
      <div
        className="d-flex vh-100  justify-content-center align-items-center"
        style={{ backgroundColor: "#7e9c86" }}
      >
        <Navbr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <div className="d-flex vh-100  justify-content-center align-items-center">
            <div
              className="w-50 bg-white justify-content-center rounded p-3"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <h1>Add product</h1>
              <Form onSubmit={handleout}>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your product name"
                    onChange={(e) => setPname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product description"
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </Form.Group>

                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <Form.Group>
                  <Button type="submit">Submit</Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Addvalves;
