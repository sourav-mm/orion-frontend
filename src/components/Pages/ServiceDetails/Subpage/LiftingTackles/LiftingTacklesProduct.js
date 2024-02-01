import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AXIOS from "axios";
import Footer from "../../../../common/Footer/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Menu1 from '../../../../common/Menu/Menu1'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LiftingTacklesProduct = () => {
  const { id } = useParams();
  const [addprd, setAddprd] = useState([]);
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [comp, setComp] = useState("");
  const [mnt, setMnt] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  

  const [enquiryFormData, setEnquiryFormData] = useState({
    productName: "",
    name: "",
    email: "",
    phno: "",
    comp: "",
    mnt: "",
  });

  useEffect(() => {
    AXIOS.get(`http://localhost:9000/getLiftingTacklesProduct/${id}`)
      .then((result) => {
        console.log(result);
        const productData = result.data;
        setAddprd([productData]); // Wrap the result in an array
        setProductname(productData.productname); // Set the productname state
        setDescription(productData.description);
        setImage(productData.image);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const handleEnquireClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEnquiryFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    await AXIOS.post("http://localhost:9000/liftingTackles", {
      productname: productname,
      name: name,
      email: email,
      phno: phno,
      comp: comp,
      mnt: mnt,
    }).then((res) => {
      alert(res.data.msg11);
    });
  };

  const handleFavoriteClick = (productId, e) => {
    // Find the selected product by productId
    const selectedProduct = addprd.find((product) => product._id === productId);
  
    // Send a POST request to register the product in MongoDB
    AXIOS.post("http://localhost:9000/registerFavoriteProduct", selectedProduct)
      .then((response) => {
        // Handle the response if needed
        console.log("Product registration response:", response.data);
  
        if (response.data.success) {
          // Registration successful
          alert(response.data.message);
        } else {
          // Registration failed
          if (response.data.error === "Product already registered") {
            alert("This product is already added to favorites.");
          } else {
            alert("This product is already added to favorites.");
          }
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error registering product:", error);
        alert("Error registering product. Please try again."); // Show an error alert
      });
  };
  

  return (
    <>
      <div>
        <Menu1 header_style_2={true} />
      </div>

      <div className="container mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          addprd.map((addprd) => (
            <div key={addprd._id} className="row">
              <div className="col-md-6">
                <img
                  src={`http://localhost:9000/${addprd.image}`}
                  alt={addprd.productName}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h1>{addprd.productname}</h1>
                <p className="lead">{addprd.description}</p>
                <button onClick={handleEnquireClick} className="btn btn-primary">
                  enquire
                </button>
                <Button
                  style={{ backgroundColor: "#fa7d85", border: "none" }}
                  onClick={() => handleFavoriteClick(addprd._id)}
                >
                  <FavoriteBorderIcon />
                </Button>
              </div>
            </div>
          ))
        )}

      {/* Modal for the form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={productname}
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Number"
                  value={phno}
                  onChange={(e) => setPhno(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Company Name"
                  value={comp}
                  onChange={(e) => setComp(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formComment">
                <Form.Label> Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your comment"
                  value={mnt}
                  onChange={(e) => setMnt(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default LiftingTacklesProduct;