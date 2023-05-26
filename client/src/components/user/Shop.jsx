import "../../styles.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { isAdmin } from "../views/utilities";
// import images
import gobstopper from "../../images/products/gobstopper.png";
import bigBruiser from "../../images/products/big_bruiser.png";
import jollyRancher from "../../images/products/jolly_rancher.png";
import chocolateBunny from "../../images/products/chocolate_bunny.png";
import kitKat from "../../images/products/kit-kat.png";
import chocolate from "../../images//chocolate.png";
import gummyBear from "../../images/products/gummy_bears.png";
import peachRing from "../../images/products/peach_rings.png";
import swedishFish from "../../images/products/swedish_fish.png";

const Shop = () => {
  // replace guineaPig with a useEffect to loop through the db of products
  const guineaPig = {
    image: "./img/chocolate.png",
    price: 9.99,
    candyName: "Candy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in.",
  };

  const nav = useNavigate();
  const sessionEmail = sessionStorage.getItem("email");

  const signIn = () => {
    nav("/");
  };

  const signOut = () => {
    sessionStorage.clear();
    nav("/home");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((serverRes) => {
        console.log("SUCCESS", serverRes.data);
      })
      .catch((err) => {
        console.log("SERVER ERROR", err);
      });
  });

  // used for setting up Modal card
  const [modalShow, setModalShow] = React.useState(false);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [candyName, setCandyName] = useState("");
  const [description, setDescription] = useState("");
  // "hover over" useState setter
  const [isHovered, setIsHovered] = useState(false);

  // Modal card function
  function ModalComponent({
    show,
    onHide,
    image,
    price,
    candyName,
    description,
  }) {
    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-row justify-content-evenly">
            <div>
              <Image src={image} width="400" alt="Logo" />
            </div>
            <div>
              <h4>{candyName}</h4>
              <p>${price}</p>
              <p>{description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // turn curser on hover on or off
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // ****** RENDER ******
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="primary" className="py-4 px-5">
        <Navbar.Brand href="/home">
          {/* Logo, links back to homepage */}
          <img
            src="./img/cotton-candy.png"
            width="40"
            height="40"
            alt="Cotton Candy Logo"
          />
        </Navbar.Brand>

        {/* Left side of navigation bar */}
        <Nav className="ms-auto nav-links">
          {sessionEmail == isAdmin ? (
            <Nav.Link href="/admin">Admin</Nav.Link>
          ) : null}
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/home">About</Nav.Link>
          <Nav.Link href="/home">Contact Us</Nav.Link>
          {sessionEmail != null ? (
            <Button variant="dark" className="mx-3" onClick={signOut}>
              Logout
            </Button>
          ) : (
            <Button variant="dark" className="mx-3" onClick={signIn}>
              Sign In
            </Button>
          )}
          <Nav.Link href="/viewCart" className="p-0">
            <Image
              src="./img/shopping-cart.png"
              width="40"
              height="40"
              fluid
              alt="Shopping Cart Icon"
            />
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Container */}
      <Container>
        {/* Filter Selection */}
        <div className="d-flex justify-content-end m-4">
          <p className="d-flex mx-2 my-0 align-self-end">Filter:</p>
          <Form.Select style={{ width: "200px" }}>
            <option>All</option>
            <option value="chocolate">Chocolate</option>
            <option value="gummy">Gummy</option>
            <option value="hardCandy">Hard Candy</option>
          </Form.Select>
        </div>

        {/* Products */}
        <div className="d-flex justify-content-evenly flex-wrap">
          {/* replace with useEffect.serverRes.map */}
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image
              src={guineaPig.image}
              width="300"
              alt="Logo"
              // mouse hover function call and change style
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              style={{ cursor: isHovered ? "pointer" : "default" }}
              // modal setters
              onClick={() => {
                setImage(guineaPig.image);
                setPrice(guineaPig.price);
                setCandyName(guineaPig.candyName);
                setDescription(guineaPig.description);
                setModalShow(true);
              }}
            />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">${guineaPig.price}</p>
                <h4 className="m-0">{guineaPig.candyName}</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={gobstopper} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$10.00</p>
                <h4 className="m-0">Gobstopper</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={bigBruiser} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$4.99</p>
                <h4 className="m-0">Big Bruiser Jaw Breaker</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={jollyRancher} max-width="300" height="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$7.99</p>
                <h4 className="m-0">Jolly Rancher</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={kitKat} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$4.99</p>
                <h4 className="m-0">Kit-Kat</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={peachRing} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$11.99</p>
                <h4 className="m-0">Peach Ring</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={gummyBear} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$9.99</p>
                <h4 className="m-0">Gummy Bear</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image
              src={chocolateBunny}
              max-width="300"
              height="300"
              alt="Logo"
            />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$12.99</p>
                <h4 className="m-0">Chocolate Bunny</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-4 mx-3">
            <Image src={swedishFish} width="300" alt="Logo" />
            <div className="d-flex mt-auto">
              <div className="me-5">
                <p className="m-0">$6.99</p>
                <h4 className="m-0">Swedish Fish</h4>
              </div>
              <Button className="ms-5">Add to Cart</Button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end me-5 mt-4">
          <Button variant="warning" className="fs-4" href="/viewCart">
            Checkout
          </Button>
        </div>

        {/* Modal Component -pass on as props to display the content in the modal card*/}
        <ModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
          image={image}
          price={price}
          candyName={candyName}
          description={description}
        />
      </Container>
    </div>
  );
};

export default Shop;
