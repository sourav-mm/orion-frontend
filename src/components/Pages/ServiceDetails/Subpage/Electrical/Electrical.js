// Import necessary modules and componentsory 
import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Footer from "../../../../common/Footer/Footer";
import AXIOS from "axios";
import Menu1 from "../../../../common/Menu/Menu1";
import SidebarPage from "../../../../common/Menu/SidebarPage";
import { Link, useNavigate } from "react-router-dom";


import "./Electrical.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

function Electrical() {
  const [addprd, setAddprd] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();



  const allData = () => {
    const URL = "http://localhost:9000/getaddElectrical/";
    AXIOS.get(URL)
      .then((addprd) => setAddprd(addprd.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    allData();
  }, []);

  const handleFavoriteClick = (productId,e) => {
    // Find the selected product by productId
    const selectedProduct = addprd.find(product => product._id === productId);
  
    // Send a POST request to register the product in MongoDB
    AXIOS.post("http://localhost:9000/registerFavoriteProduct", selectedProduct)
      .then((response) => {
        // Handle the response if needed
        console.log("Product registered successfully:", response.data);

      })
      .catch((error) => {
        // Handle errors
        console.error("Error registering product:", error);
      });
  };
  
  
  

  return (
    <>
      <div className="content-container">
        <div>
          <Menu1 header_style_2={true} />
        </div>
        <div className="container-wrapper">
          <div className="sidebar-container">
            <SidebarPage />
          </div>

          <Container className="my-5">
            <div className="row justify-content-center">
              <h2 className="fitting-header">Electrical</h2>
              <p className="fitting-description">
                Our comprehensive range of Electrical includes essential
                components such as elbows, couplings, unions, reducers, olets,
                tees, crosses, and plug nipples. These precision-engineered
                Electrical play a vital role in ensuring seamless connections,
                efficient fluid flow, and reliable performance across various
                industrial applications. Designed for durability and
                versatility, our Electrical are crafted to meet the highest
                standards, providing the essential building blocks for robust
                piping systems.
              </p>
              {useBootstrapBreakpoints.length !==0 ?
              <div> 

              {addprd.map((addprd) => (
                <Card
                  key={addprd._id}
                  style={{
                    width: "16rem",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    transform:
                      hoveredItem === addprd._id ? "scale(1.05)" : "scale(1)",
                    position: "relative",
                    margin: "0 10px 20px", // Adjust the margin value
                  }}
                  onMouseEnter={() => setHoveredItem(addprd._id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={`http://localhost:9000/${addprd.image}`}
                    alt="Your Alt Text"
                    style={{
                      maxWidth: "100%",
                      height: "150px",
                    }}
                  />
                  {hoveredItem === addprd._id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    ></div>
                  )}

                  <Card.Body>
                    <Card.Title>{addprd.productname}</Card.Title>
                    <Card.Text>{addprd.description}</Card.Text>
                    <Link to={`/ElectricalProduct/${addprd._id}`}>
                      <Button
                        variant="primary"
                        style={{ backgroundColor: "#0398fc", border: "none" }}
                      >
                        Select
                      </Button>
                      &nbsp;
                    </Link>
                    <Button
                      style={{ backgroundColor: "#fa7d85", border: "none" }}
                      onClick={() => handleFavoriteClick(addprd._id)}
                    >
                      <FavoriteBorderIcon />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
              </div>
                    : <h2> No Products</h2>}
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Electrical;
