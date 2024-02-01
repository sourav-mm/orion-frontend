import React from "react";
import Navbr from "../navbr";
import { useState, useEffect } from "react";
import AXIOS from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const EditotherGeneralItems = () => {
  const [addotherGeneralItems, setAddotherGeneralItems] = useState([]);
  const deleteItem = (idno) => {
    const url = `http://orion-frontend-api.vercel.app/deleteotherGeneralItems/${idno}`;
    AXIOS.delete(url).then((res) => {
      alert(res.data);
    });
  };

  const allData = () => {
    const URL = "http://orion-frontend-api.vercel.app/getaddotherGeneralItems/";
    AXIOS.get(URL)
      .then((response) => setAddotherGeneralItems(response.data))
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
          <Link to="/addotherGeneralItems" className="btn btn-success">
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
              {addotherGeneralItems.map((otherGeneralItems) => (
                <tr key={otherGeneralItems._id}>
                  <td>
                    <img
                      src={`http://orion-frontend-api.vercel.app/${otherGeneralItems.image}`}
                      alt="Product Image"
                      style={{ maxWidth: "70px", height: "auto" }}
                    />
                  </td>
                  <td>{otherGeneralItems.productname}</td>
                  <td>{otherGeneralItems.description}</td>
                  <td>
                  <Link
                      to={`/updateotherGeneralItems/${otherGeneralItems._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => {
                        deleteItem(otherGeneralItems._id);
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

export default EditotherGeneralItems;
