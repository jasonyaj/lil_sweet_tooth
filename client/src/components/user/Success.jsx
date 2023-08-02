import "../../styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { isAdmin } from "../views/utilities";

const Success = () => {
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
      {" "}
      {/* Navigation Bar */}
      <Navbar bg="primary" className="py-4 px-5 mb-5">
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
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/shop">Contact Us</Nav.Link>
          {sessionEmail != null ? (
            <Button variant="dark" className="mx-3" onClick={signOut}>
              Logout
            </Button>
          ) : (
            <Button variant="dark" className="mx-3" onClick={signIn}>
              Sign In
            </Button>
          )}
        </Nav>
      </Navbar>
      <div>
        <h1 className="d-flex justify-content-center centered text-success">
          SUCCESS!!!
        </h1>
      </div>
    </div>
  );
};

export default Success;
