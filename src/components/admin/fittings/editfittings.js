import React from "react";
import Navbr from "../navbr";
import { useState, useEffect } from "react";
import AXIOS from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Editfittings = () => {
  const [addfittings, setAddfittings] = useState([]);
  const deleteItem = (idno) => {
    const url = `http://orion-frontend-api.vercel.app/deleteFittings/${idno}`;
    AXIOS.delete(url).then((res) => {
      alert(res.data);
    });
  };

  const allData = () => {
    const URL = "http://orion-frontend-api.vercel.app/getaddfittings/";
    AXIOS.get(URL)
      .then((response) => setAddfittings(response.data))
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
          <Link to="/addfittings" className="btn btn-success">
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
              {addfittings.map((fitting) => (
                <tr key={fitting._id}>
                  <td>
                    <img
                      src={`http://orion-frontend-api.vercel.app/${fitting.image}`}
                      alt="Product Image"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </td>
                  <td>{fitting.productname}</td>
                  <td>{fitting.description}</td>
                  <td>
                    <Link
                      to={`/updatefittings/${fitting._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => {
                        deleteItem(fitting._id);
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

export default Editfittings;
