import "../../styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import candyLogo from "../../images/cotton-candy.png";

const AddProduct = () => {
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

      {/* Add a product form */}
      <Form className="log-reg-form mt-5 add-form">
        {/* Left side */}
        <Row>
          <Col>
            <Form.Group controlId="formImage">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="text" placeholder="URL" />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="i.e Kit-Kat" />
            </Form.Group>
            <Form.Group controlId="description" className="my-4">
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
          </Col>
          {/* Right side */}
          <Col>
            <Form.Group controlId="category">
              <Form.Label>Category:</Form.Label>
              <Form.Select>
                <option>Select One</option>
                <option value="chocolate">Chocolate</option>
                <option value="gummy">Gummy</option>
                <option value="hardCandy">Hard Candy</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="price" className="col-md-4">
              <Form.Label>Price:</Form.Label>
              <Form.Control type="text" placeholder="9.99" />
            </Form.Group>
            <Form.Group controlId="quantity" className="col-md-4">
              <Form.Label>On-Hand:</Form.Label>
              <Form.Control type="text" placeholder="150" />
            </Form.Group>
            <Form.Group controlId="active" className="d-flex mt-2">
              <Form.Check type="switch" />
              <Form.Label>Active</Form.Label>
            </Form.Group>
          </Col>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default AddProduct;
