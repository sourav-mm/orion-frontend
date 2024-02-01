import React from "react";
import  { useState } from "react";
import {  Button, Modal, Form } from "react-bootstrap";
import AXIOS from 'axios'

const TopAbout = () => {
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
      alert(res.data.msg1); // Access the 'msg' property of the response
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
      {/* <!-- about area start --> */}
      <div className="tp-about-area pt-140">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="tp-about-left pr-90">
                <div className="tp-section-wrapper pt-5">
                  <span className="tp-section-subtitle">
                  Elevating Success for Our Valued Clients
                  </span>
                  <h2 className="tp-section-title pt-25 mb-30">
                    Rest Assured, Your Project is in Capable Hands
                  </h2>
                  <p>
                    At Orion General Trading, we want to assure you that your
                    project is in the right hands. Our dedicated team, comprised
                    of seasoned professionals with extensive experience in the
                    industry, is committed to ensuring the success and
                    excellence of your endeavor. With a focus on quality,
                    reliability, and unmatched service, we approach each project
                    with diligence and expertise. Rest easy knowing that your
                    vision is being realized by a team dedicated to delivering
                    results that exceed expectations. Your trust is valued, and
                    we are here to bring your project to fruition with precision
                    and care.
                  </p>
                  <p className="pt-10">
                    Rest easy—your project is in the right hands with Orion
                    General Trading. Our experienced professionals are dedicated
                    to ensuring the success of your project. Trust in our
                    commitment to quality, reliability, and top-notch service.
                    Your project matters to us, and we're here to bring it to
                    fruition with precision and care.
                  </p>
                </div>
                <div className="mt-45 mb-30">
                    <div className="tp-theme-btn d-flex align-items-center" onClick={handleEnquireClick}>
                      <div className="tp-btn-inner">
                        <p className="mb-0">Let’t Talk</p>
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

                {/* Modal for the form */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group >
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
                  Select products
                </option>
                <option value="item1">Fittings </option>
                <option value="item2">Electro Mechanical </option>
                <option value="item3">Safety </option>
                <option value="item3">Welding </option>
                <option value="item3">Flanges </option>
                <option value="item3">Valves </option>
                <option value="item3">Fasteners </option>
                <option value="item3">Instrumentation </option>
                <option value="item3">Lifting Tackles </option>
                <option value="item3">Fender </option>
                <option value="item3">Electrical </option>
                <option value="item3">Other General Items </option>
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

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-right p-relative">
                <div className="about-img text-md-end">
                  <img src="assets/img/about/about.jpg" alt="" />
                </div>
                <div className="tp-about-info text-center grey-bg-4">
                  <h3>10</h3>
                  <h4>
                    Year of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about about end--> */}
    </>
  );
};

export default TopAbout;
