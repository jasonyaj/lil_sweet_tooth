import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import Registration from "./components/user/Registration";
import Footer from "./components/Footer";
import HomePage from "./components/user/HomePage";
import Shop from "./components/user/Shop";
import ViewCart from "./components/user/ViewCart";
import Home from "./components/admin/Home";
import AddProduct from "./components/admin/AddProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import Inventory from "./components/admin/Inventory";
import Orders from "./components/admin/Orders";
import Success from "./components/user/Success";

function App() {
  // array of dummy "cart" objects, replicates cart db, DELETE LATER AFTER DB IS SETUP
  const [cart, setCart] = useState([
    {
      _id: "C1",
      user_Id: "U1",
      product: {
        image: "./img/chocolate.png",
        price: 10.0,
        candyName: "Chocolate",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in.",
      },
      product_qty: 1,
    },
    {
      _id: "C2",
      user_Id: "U1",
      product: {
        image: "./img/gummy.png",
        price: 20.0,
        candyName: "Gummy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in.",
      },
      product_qty: 2,
    },
    {
      _id: "C3",
      user_Id: "U1",
      product: {
        image: "./img/hard_candy.png",
        price: 5.0,
        candyName: "Hard Candy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in.",
      },
      product_qty: 3,
    },
  ]);

  // function to remove only from DOM for "live" updating when deleted
  const removeFromDom = (carId) => {
    setCart(cart.filter((cart) => cart._id !== carId));
  };

  return (
    <div>
      <div className="app-wrapper">
        <Routes>
          User routes
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/viewcart"
            element={
              <ViewCart
                cart={cart}
                setCart={setCart}
                removeFromDom={removeFromDom}
              />
            }
          />
          <Route path="/success" element={<Success />} />
          {/* Admin routes */}
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/product/new" element={<AddProduct />} />
          <Route path="/admin/product/update" element={<UpdateProduct />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
