import React from "react";
import Navbr from "../navbr";
import { useState, useEffect } from "react";
import AXIOS from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Editflanges = () => {
  const [addflanges, setAddflanges] = useState([]);
  const deleteItem = (idno) => {
    const url = `http://orion-frontend-api.vercel.app/deleteflanges/${idno}`;
    AXIOS.delete(url).then((res) => {
      alert(res.data);
    });
  };

  const allData = () => {
    const URL = "http://orion-frontend-api.vercel.app/getaddflanges/";
    AXIOS.get(URL)
      .then((response) => setAddflanges(response.data))
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
          <Link to="/addflanges" className="btn btn-success">
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
              {addflanges.map((flanges) => (
                <tr key={flanges._id}>
                  <td>
                    <img
                      src={`http://orion-frontend-api.vercel.app/${flanges.image}`}
                      alt="Product Image"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </td>
                  <td>{flanges.productname}</td>
                  <td>{flanges.description}</td>
                  <td>
                  <Link
                      to={`/updateflanges/${flanges._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => {
                        deleteItem(flanges._id);
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

export default Editflanges;
