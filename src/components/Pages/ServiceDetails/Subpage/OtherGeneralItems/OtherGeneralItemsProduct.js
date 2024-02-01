import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from React Router
import AXIOS from "axios";
import Footer from "../../../../common/Footer/Footer";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Menu1 from "../../../../common/Menu/Menu1";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const OtherGeneralItemsProduct = () => {
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
    productname: productname,
    name: name,
    email: email,
    phno: phno,
    comp: comp,
    mnt: mnt,
  });

  useEffect(() => {
    AXIOS.get(`http://orion-frontend-api.vercel.app/getOtherGeneralItemsProduct/${id}`)
      .then((result) => {
        console.log(result);
        const productData = result.data;
        setAddprd([productData]);
        setProductname(productData.productname);
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

  // const handleFormSubmit = async () => {
  //   try {
  //     const response = await AXIOS.post("http://orion-frontend-api.vercel.app/otherGeneralItems", {
  //       ...enquiryFormData,
  //     });

  //     console.log(response.data);
  //     alert(response.data.msg14);
  //     setEnquiryFormData({
  //       productname: productname,
  //       name: name,
  //       email: email,
  //       phno: phno,
  //       comp:comp,
  //       mnt: mnt,
  //     });
  //     handleModalClose();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  const handleFormSubmit = async () => {
    await AXIOS.post("http://orion-frontend-api.vercel.app/otherGeneralItems", {
      productname: productname,
      name: name,
      email: email,
      phno: phno,
      comp: comp,
      mnt: mnt,
    }).then((res) => {
      alert(res.data.msg14);
    });
  };

  const handleFavoriteClick = (productId, e) => {
    const selectedProduct = addprd.find((product) => product._id === productId);

    AXIOS.post("http://orion-frontend-api.vercel.app/registerFavoriteProduct", selectedProduct)
      .then((response) => {
        console.log("Product registration response:", response.data);

        if (response.data.success) {
          alert(response.data.message);
          // Redirect to the favorite page after successful registration
          window.location.href = "/FavoritePage";
        } else {
          if (response.data.error === "Product already registered") {
            alert("This product is already added to favorites.");
          } else {
            alert("Error registering product.");
          }
        }
      })
      .catch((error) => {
        console.error("Error registering product:", error);
        alert("Error registering product. Please try again.");
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
                  src={`http://orion-frontend-api.vercel.app/${addprd.image}`}
                  alt={addprd.productName}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h1>{addprd.productname}</h1>
                <p className="lead">{addprd.description}</p>
                <button
                  onClick={handleEnquireClick}
                  className="btn btn-primary"
                >
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

        <Modal show={showModal}>
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
                  readOnly // Make the field read-only since it's for display only
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Number"
                  onChange={(e) => setPhno(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Company Name"
                  onChange={(e) => setComp(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formComment">
                <Form.Label> Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your comment"
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

export default OtherGeneralItemsProduct;
