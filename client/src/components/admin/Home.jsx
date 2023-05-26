import "../../styles.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { sessionName } from "../views/utilities";

const Home = () => {
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
          <img
            src="./img/cotton-candy.png"
            width="40"
            height="40"
            alt="Cotton Candy Logo"
          />
        </Navbar.Brand>

        {/* Right side of navigation bar */}
        <Nav className="me-auto nav-links">
          <Nav.Link href="/admin/product/new">Add New Product</Nav.Link>
          <Nav.Link href="/admin/orders">View Orders</Nav.Link>
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

      {/* Container */}
      <Container>
        {/* Welcome Statement */}
        <div className="">
          <h2 className="text-center">Welcome admin, {sessionName}</h2>
        </div>

        {/* Redirect buttons */}
        <div className="centered">
          <div className="d-flex justify-content-center">
            <p>What would you like to do today?</p>
          </div>
          <div className="d-flex justify-content-center">
            <Button href="/admin/product/new" className="width-button btn-dark">
              Add Product
            </Button>
            <Button href="/admin/orders" className="mx-3 width-button btn-dark">
              View Orders
            </Button>
            <Button href="/admin/inventory" className="width-button btn-dark">
              Inventory
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
