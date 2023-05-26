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
import gobstopper from "../../images/products/gobstopper.png";
import bigBruiser from "../../images/products/big_bruiser.png";
import jollyRancher from "../../images/products/jolly_rancher.png";
import chocolateBunny from "../../images/products/chocolate_bunny.png";
import kitKat from "../../images/products/kit-kat.png";
import chocolate from "../../images//chocolate.png";
import gummyBear from "../../images/products/gummy_bears.png";
import peachRing from "../../images/products/peach_rings.png";
import swedishFish from "../../images/products/swedish_fish.png";

const Inventory = () => {
  const nav = useNavigate();

  const signOut = () => {
    sessionStorage.clear();
    nav("/home");
  };

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/products")
  //     .then((serverRes) => {
  //       console.log("SUCCESS", serverRes.data);
  //       setProducts(serverRes.data);
  //     })
  //     .catch((err) => {
  //       console.log("SERVER ERROR", err);
  //     });
  // }, []);

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
        {/* Table of Inventory */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>On-Hand</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>
                    <Image src={product.image} width="50"></Image>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>Active</td>
                  <td>
                    <Button href="./product/update">Edit</Button>
                  </td>
                </tr>
              );
            })} */}
            <tr>
              <td>
                <Image src={gobstopper} width="50"></Image>
              </td>
              <td>Gobstopper</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Hard Candy</td>
              <td>$10.00</td>
              <td>150</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={bigBruiser} width="50"></Image>
              </td>
              <td>Big Bruiser Jaw Breaker</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Hard Candy</td>
              <td>$4.99</td>
              <td>236</td>
              <td></td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={jollyRancher} width="50"></Image>
              </td>
              <td>Jolly Rancher</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Hard Candy</td>
              <td>$7.99</td>
              <td>564</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={chocolateBunny} width="50"></Image>
              </td>
              <td>Chocolate Bunny</td>
              <td>
                Classic Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Pretium lectus quam id leo in.
              </td>
              <td>Chocolate</td>
              <td>$12.99</td>
              <td>89</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={kitKat} width="50"></Image>
              </td>
              <td>Kit-Kat</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Chocolate</td>
              <td>$4.99</td>
              <td>451</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={chocolate} width="50"></Image>
              </td>
              <td>Chocolate</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Chocolate</td>
              <td>$9.99</td>
              <td>4</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={gummyBear} width="50"></Image>
              </td>
              <td>Gummy Bear</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Gummy</td>
              <td>$9.99</td>
              <td>150</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={peachRing} width="50"></Image>
              </td>
              <td>Peach Ring</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Gummy</td>
              <td>$11.99</td>
              <td>256</td>
              <td>Active</td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Image src={swedishFish} width="50"></Image>
              </td>
              <td>Swedish Fish</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium lectus quam id leo in.
              </td>
              <td>Gummy</td>
              <td>$6.99</td>
              <td>150</td>
              <td></td>
              <td>
                <Button href="./product/update">Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Inventory;
