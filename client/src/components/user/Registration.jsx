import "../../styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import useNavigate from "react-router-dom";
import jwt_decode from "jwt-decode";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <div>
      <Navbar bg="primary" className="text-light position-relative py-4 px-5">
        <img
          src="./img/cotton-candy.png"
          width="40"
          height="40"
          alt="Cotton Candy Logo"
        />
        <h1 className="position-absolute top-50 start-50 translate-middle">
          Lil Sweet Tooth
        </h1>
      </Navbar>
      <Container>
        <Form className="log-reg-form mt-5">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="./img/cotton-candy.png"
              width="80"
              height="80"
              alt="Cotton Candy Logo"
              className="twist-animation"
            />
          </div>
          <h2 className="d-flex justify-content-center mb-5">Register</h2>

          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formPassword" className="my-4">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="my-4">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-center">
              <GoogleButton
                label="Sign up with Google"
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </div>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
