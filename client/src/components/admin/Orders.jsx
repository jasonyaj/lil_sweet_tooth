import "../../styles.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import candyLogo from "../../images/cotton-candy.png";

const Orders = () => {
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
        <h2>New Orders</h2>
        <p>No new orders, keep hustling buddy.</p>
        <hr />
        <h2>Order History</h2>
        <Table striped border hover>
          <thead>
            <tr>
              <th>SO#</th>
              <th>Order Date</th>
              <th>Items</th>
              <th>Shipping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>008</td>
              <td>05/24/2023</td>
              <td>2</td>
              <td>UPS Ground</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
            <tr>
              <td>007</td>
              <td>08/23/1997</td>
              <td>64</td>
              <td>Golden Eye</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
            <tr>
              <td>003</td>
              <td>05/24/2023</td>
              <td>3</td>
              <td>FedEx Ground</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>05/24/2023</td>
              <td>6</td>
              <td>Pick-Up</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
            <tr>
              <td>001</td>
              <td>05/23/2023</td>
              <td>2</td>
              <td>Pick-Up</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Orders;
