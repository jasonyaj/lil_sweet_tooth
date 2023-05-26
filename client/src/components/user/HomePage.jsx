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
import { isAdmin } from "../views/utilities";

const HomePage = () => {
  const nav = useNavigate();
  const sessionEmail = sessionStorage.getItem("email");

  const signIn = () => {
    nav("/");
  };

  const signOut = () => {
    sessionStorage.clear();
    nav("/home");
  };

  return (
    <div>
      <Navbar bg="primary" className="py-4 px-5" id="navBar">
        <Navbar.Brand href="/home">
          {/* Logo, links back to homepage */}
          <img
            src="./img/cotton-candy.png"
            width="40"
            height="40"
            alt="Cotton Candy Logo"
          />
        </Navbar.Brand>

        {/* Right side of navigation bar */}
        <Nav className="me-auto nav-links">
          <Nav.Link href="/shop">Shop All</Nav.Link>
          <Nav.Link href="/shop">Chocolate</Nav.Link>
          <Nav.Link href="/shop">Gummy</Nav.Link>
          <Nav.Link href="/shop">Hard Candy</Nav.Link>
        </Nav>

        {/* Left side of navigation bar */}
        <Nav className="ms-auto nav-links">
          {sessionEmail == isAdmin ? (
            <Nav.Link href="/admin">Admin</Nav.Link>
          ) : null}
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#contactUs">Contact Us</Nav.Link>
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

      <Container>
        {/* Banner */}
        <div>
          <Image src="./img/bannerFiftyOff.jpg" fluid alt="Banner Sale Photo" />
        </div>

        {/* Featured Brands */}
        <div className="d-flex justify-content-center mt-5">
          <h2>Featured Brands</h2>
        </div>
        <div className="d-flex justify-content-evenly">
          <Image
            src="./img/KitKat_US_2019.svg"
            width="70"
            fluid
            alt="Kit Kat Logo"
          />
          <Image
            src="./img/Snickerslogo2019.svg"
            width="70"
            fluid
            alt="Snickers Logo"
          />
          <Image src="./img/Haribo_2015_logo.svg" width="70" fluid alt="Logo" />
          <Image
            src="./img/Lindt.svg"
            width="70"
            height="auto"
            fluid
            alt="Logo"
          />
          <Image
            src="./img/Werthers-Original.png"
            width="70"
            fluid
            alt="Logo"
          />
          <Image
            src="./img/Jolly_rancher_logo.png"
            width="70"
            fluid
            alt="Logo"
          />
        </div>

        {/* Shop By Category */}
        <Row>
          <h2 className="d-flex justify-content-center my-5">
            Shop by Category
          </h2>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <Image src="./img/chocolate.png" width="300" fluid alt="Logo" />
            <h4>Chocolate</h4>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Image src="./img/gummy.png" width="300" fluid alt="Logo" />
            <h4 className="mt-auto">Gummy</h4>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Image src="./img/hard_candy.png" width="300" fluid alt="Logo" />
            <h4 className="mt-auto">Hard Candy</h4>
          </Col>
        </Row>
        <hr />

        {/* About Us */}
        <Row id="About">
          <div className="py-4 px-5">
            <h2 className="d-flex justify-content-center">About Us</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
              justo laoreet sit amet cursus. Sit amet mattis vulputate enim
              nulla aliquet porttitor. Ut sem nulla pharetra diam sit. Etiam sit
              amet nisl purus in mollis nunc sed. Purus semper eget duis at
              tellus. Eget felis eget nunc lobortis mattis aliquam faucibus. Ut
              venenatis tellus in metus vulputate eu scelerisque felis
              imperdiet. Faucibus purus in massa tempor. Tellus id interdum
              velit laoreet id donec ultrices. Pellentesque habitant morbi
              tristique senectus et. Dolor morbi non arcu risus quis varius quam
              quisque. Mauris a diam maecenas sed. Dis parturient montes
              nascetur ridiculus mus mauris. Blandit massa enim nec dui nunc
              mattis enim ut tellus. Vestibulum rhoncus est pellentesque elit.
              Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>
            <p>
              Elit at imperdiet dui accumsan sit amet nulla. Lacus vestibulum
              sed arcu non odio. Placerat vestibulum lectus mauris ultrices. At
              urna condimentum mattis pellentesque. Sed tempus urna et pharetra
              pharetra massa massa. Molestie ac feugiat sed lectus vestibulum
              mattis ullamcorper velit. Viverra ipsum nunc aliquet bibendum
              enim. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.
              Velit euismod in pellentesque massa placerat. Tincidunt ornare
              massa eget egestas purus viverra accumsan. Ultrices tincidunt arcu
              non sodales neque sodales. A diam maecenas sed enim ut sem.
              Faucibus nisl tincidunt eget nullam non nisi est sit. Nunc sed
              augue lacus viverra vitae congue eu.
            </p>
          </div>
        </Row>
        <hr />

        {/* Contact Us */}
        <div className="contact-form my-5 ">
          <Form id="contactUs">
            <div className="d-flex justify-content-center mb-4">
              <h2>Contact Us</h2>
            </div>
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="message" className="my-4">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={7} className="textarea" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="d-flex justify-content-end">
          <Button href="#navBar" className="btn-success">
            To the Top
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
