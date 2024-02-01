import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AXIOS from "axios";

const FullScreenBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [comp, setComp] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [mnt, setMnt] = useState("");
  const handleEnquireClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async () => {
    await AXIOS.post("http://orion-frontend-api.vercel.app/fullScreenBtn", {
      name: name,
      email: email,
      phno: phno,
      comp: comp,
      selectedItem: selectedItem,
      mnt: mnt,
    }).then((res) => {
      alert(res.data.msg); // Access the 'msg' property of the response
    });

    // e.preventDefault();
    // Handle form submission logic here
    // alert(`Hello  ${name}  \n Enquire Submitted Successfuly `);
    // You can add more logic here, such as sending the form data to a server.
    // Reset the form and close the modal
    // setName("");
    // setEmail("");
    // setPhno("");
    // setSubj("");
    // setEnq("");
    // setShowModal(false);
  };

  return (
    <>
      <div className="tp-theme-btn-area pt-90 pb-140">
        <div className="container">
          <div className="row justify-content-center p-relative">
            <div className="col-lg-12 d-flex justify-content-center">
              <div
                className="tp-theme-btn d-flex align-items-center white-bg"
                onClick={handleEnquireClick}
              >
                <div className="tp-btn-inner">
                  <p className="mb-0">Let’s Talk</p>
                  <b>Get in Touch</b>
                  <span className="d-inline-block">
                    <svg
                      width="46"
                      height="8"
                      viewBox="0 0 46 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="46"
                      height="8"
                      viewBox="0 0 46 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="tp-hr-border"></div>
          </div>
        </div>
      </div>
      {/* Modal for the form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
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
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Company Name"
                value={comp}
                onChange={(e) => setComp(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDropdown">
              <Form.Label>Select an Item</Form.Label>
              <Form.Select
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
              >
                <option value="" disabled>
                  Select an item
                </option>
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formNumber">
              <Form.Label> comment</Form.Label>
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
    </>
  );
};

export default FullScreenBtn;
