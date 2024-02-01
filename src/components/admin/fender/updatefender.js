import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import Navbr from "../navbr";
import { useParams, useNavigate } from "react-router-dom";
import AXIOS from "axios";

const Updatefender = () => {
  const { id } = useParams();
  const [pname, setPname] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    AXIOS.get("http://localhost:9000/getupdatefender/" + id)
      .then((result) => {
        console.log(result);
        setPname(result.data.productname);
        setDesc(result.data.description);
        setFile(result.data.image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatefender = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("pname", pname);
    formData.append("desc", desc);
  
    try {
      const response = await AXIOS.put(
        `http://localhost:9000/updatefender/${id}`,
        formData
      );
  
      alert(response.data.msg15);
      navigate("/editfender");
    } catch (error) {
      console.error("Error updating product:", error);
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
              <Form onSubmit={updatefender}>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={pname}
                    placeholder="Enter your product name"
                    onChange={(e) => setPname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={desc}
                    placeholder="Product description"
                    onChange={(e) => setDesc(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])} // Use e.target.files[0] to get the file object
                  />
                </Form.Group>
                {/* <div className="mb-2">
                  <label htmlFor="">File</label>
                  <input type="file" value={file} placeholder="file" className="form-control" onChange={(e)=>setFile(e.target.value)}/>
                </div> */}
                <Form.Group>
                  <Button type="submit">update</Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Updatefender;
