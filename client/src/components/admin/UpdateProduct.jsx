import "../../styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import candyLogo from "../../images/cotton-candy.png";
import chocolate from "../../images/chocolate.png";

const UpdateProduct = () => {
  const nav = useNavigate();

  const signOut = () => {
    sessionStorage.clear();
    nav("/home");
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="primary" className="py-4 px-5 mb-5">
        <Navbar.Brand href="/admin">
          {/* Logo, links back to admin Home */}
          <img src={candyLogo} width="40" height="40" alt="Cotton Candy Logo" />
        </Navbar.Brand>

        {/* Right side of navigation bar */}
        <Nav className="me-auto nav-links">
          <Nav.Link href="/admin">Home</Nav.Link>
          <Nav.Link href="/admin/product/new">Add New Product</Nav.Link>
          <Nav.Link href="/admin/orders">Orders</Nav.Link>
          <Nav.Link href="/admin/inventory">Inventory</Nav.Link>
        </Nav>

        {/* Left side of navigation bar */}
        <Nav className="ms-auto nav-links">
          <Nav.Link href="/shop">View Shop</Nav.Link>
          <Button variant="dark" className="mx-3" onClick={signOut}>
            Logout
          </Button>
        </Nav>
      </Navbar>

      <Container>
        {/* Product Card */}
        <Form>
          <Row>
            <Col>
              <Image src={chocolate} width="400" alt="Logo" />
              <Form.Group controlId="formImage">
                <Form.Label>Image:</Form.Label>
                <Form.Control type="text" placeholder="./img/chocolate.png" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Chocolate" />
              </Form.Group>
              <Form.Group controlId="description" className="my-4">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in."
                />
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Select>
                  <option>Select One</option>
                  <option value="chocolate" selected>
                    Chocolate
                  </option>
                  <option value="gummy">Gummy</option>
                  <option value="hardCandy">Hard Candy</option>
                </Form.Select>
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group controlId="price" className="col-md-4">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control type="text" placeholder="10" />
                </Form.Group>
                <Form.Group controlId="quantity" className="col-md-4">
                  <Form.Label>On-Hand:</Form.Label>
                  <Form.Control type="text" placeholder="150" />
                </Form.Group>
                <Form.Group
                  controlId="active"
                  className="d-flex justify-content-center align-self-center"
                >
                  <Form.Check type="switch" checked />
                  <Form.Label>Active</Form.Label>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <Button className="me-3 btn-danger">
                  Remove from Inventory
                </Button>
                <Button>Update</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateProduct;
