import "../../styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { isAdmin } from "../views/utilities";

const ViewCart = ({ cart, setCart, removeFromDom }) => {
  const nav = useNavigate();
  const sessionEmail = sessionStorage.getItem("email");

  const signIn = () => {
    nav("/");
  };

  const signOut = () => {
    sessionStorage.clear();
    nav("/home");
  };

  const handleDecrement = (object_id) => {
    setCart((cart) =>
      cart.map((item) =>
        object_id === item._id
          ? { ...item, product_qty: item.product_qty - 1 }
          : item
      )
    );
  };

  const handleIncrement = (object_id) => {
    setCart((cart) =>
      cart.map((item) =>
        object_id === item._id
          ? { ...item, product_qty: item.product_qty + 1 }
          : item
      )
    );
  };

  return (
    <div>
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

      {/* Cart overview */}
      <div className="cart">
        <div>
          <h2 className="d-flex justify-content-center">View Cart</h2>
        </div>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">QTY.</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <Button
                      className="btn-sm"
                      onClick={() => removeFromDom(item._id)}
                    >
                      Remove
                    </Button>
                  </td>
                  <td>
                    <img src={item.product.image} width="50" alt="Logo" />
                  </td>
                  <td className="text-center">{item.product.candyName}</td>
                  <td className="text-center">${item.product.price}</td>
                  <td width="18%">
                    <div className="input-group">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        type="button"
                        className="input-group-text text-center"
                      >
                        -
                      </button>
                      <div className="form-control text center text-center">
                        {item.product_qty}
                      </div>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        type="button"
                        className="input-group-text"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    ${item.product.price * item.product_qty}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div>
          <p className="d-flex justify-content-end">
            <span className="fs-6 fw-bold me-2">Tax:</span>
            7.25
          </p>
        </div>
        <hr />
        <div>
          <p className="d-flex justify-content-end fs-4">
            <span className="fw-bold me-2">Total:</span> $500
          </p>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <Link className="text-info me-4" to="/shop">
            Continue Shopping
          </Link>
          <Button className="btn-dark">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
