import "../../styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import jwt_decode from "jwt-decode";

const Login = () => {
  const nav = useNavigate();

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    // console.log("Encode JWT ID token" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    axios
      .post("http://localhost:8000/api/users/login", {
        name: userObject.name,
        email: userObject.email,
      })
      .then(sessionStorage.setItem("name", userObject.name))
      .then(sessionStorage.setItem("email", userObject.email))
      .then(sessionStorage.setItem("picture", userObject.picture))
      .then((response) => console.log(response.data))
      .then(nav("/home"))
      .catch((err) => console.log(err));
  }

  // google sign in render
  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id:
        "728725335076-ve5646egeiej1ck1prkspl4ojhfsinca.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    // render google button
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
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
        {/* Login Form */}
        <Form className="log-reg-form mt-5">
          {/* Logo */}
          <div className="d-flex justify-content-center mb-3">
            <img
              src="./img/cotton-candy.png"
              width="80"
              height="80"
              alt="Cotton Candy Logo"
              className="rotate-animation"
            />
          </div>
          <h2 className="d-flex justify-content-center mb-5">Sign In</h2>

          {/* Google Button */}
          <div id="signInDiv" className="d-flex justify-content-center"></div>
          {/* {Object.keys(user).length !== 0 && (
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          )} */}
          {user && (
            <div>
              <img src={user.picture} />
              <h3>{user.name}</h3>
            </div>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default Login;
