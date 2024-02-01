import React from "react";
import Navbr from "../navbr";
import { useState, useEffect } from "react";
import AXIOS from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Editfender = () => {
  const [addfender, setAddfender] = useState([]);
  const deleteItem = (idno) => {
    const url = `http://localhost:9000/deletefender/${idno}`;
    AXIOS.delete(url).then((res) => {
      alert(res.data);
    });
  };

  const allData = () => {
    const URL = "http://localhost:9000/getaddfender/";
    AXIOS.get(URL)
      .then((response) => setAddfender(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <Navbr />
      <br />
      <br />
      <br />
      <br />
      <br />
      
        <div
          className="w-100 bg-white rounded p-3"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <Link to="/addfender" className="btn btn-success">
            Add+
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addfender.map((fender) => (
                <tr key={fender._id}>
                  <td>
                    <img
                      src={`http://localhost:9000/${fender.image}`}
                      alt="Product Image"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </td>
                  <td>{fender.productname}</td>
                  <td>{fender.description}</td>
                  <td>
                  <Link
                      to={`/updatefender/${fender._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => {
                        deleteItem(fender._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      
    </>
  );
};

export default Editfender;
