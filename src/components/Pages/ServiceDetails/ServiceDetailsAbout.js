import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceDetailsAbout = () => {
  return (
    <>
      <Container>
        <br />
        <br />

        <br />
        <br />
        <Row>
          <Col>
            <Link to="/fittings">
              <Card
                style={{
                  width: "18rem",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card.Img variant="top" src="assets/img/cards/card1.jpg" />
                <Card.Body>
                  <Card.Title>FITTINGS</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/electro-mechanical">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card2.jpg" />
              <Card.Body>
                <Card.Title>ELECTRO-MECHANICAL</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>

          <Col>
          <Link to="/safety">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card3.jpg" />
              <Card.Body>
                <Card.Title>SAFETY</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
          <Link to="/welding">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card4.jpg" />
              <Card.Body>
                <Card.Title>WELDING</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/flanges">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card5.jpg" />
              <Card.Body>
                <Card.Title>FLANGES</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>

          <Col>
          <Link to="/valves">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card6.jpg" />
              <Card.Body>
                <Card.Title>VALVES</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
          <Link to="/fasteners">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card7.jpg" />
              <Card.Body>
                <Card.Title>FASTENERS</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/instrumentation">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card8.jpg" />
              <Card.Body>
                <Card.Title>INSTRUMENTATION</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>

          <Col>
          <Link to="/lifting-tackles">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card9.jpg" />
              <Card.Body>
                <Card.Title>LIFTING TACKLES</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
          <Link to="/fender">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card10.jpg" />
              <Card.Body>
                <Card.Title>FENDER</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/electrical">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card11.jpg" />
              <Card.Body>
                <Card.Title>ELECTRICAL</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>

          <Col>
          <Link to="/other-general-items">
            <Card
              style={{
                width: "18rem",
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Img variant="top" src="assets/img/cards/card12.jpg" />
              <Card.Body>
                <Card.Title>OTHER GENERAL ITEMS</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </>
  );
};

export default ServiceDetailsAbout;
