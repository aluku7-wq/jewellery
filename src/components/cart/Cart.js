/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Cart.styled";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import Navigation from "../navigationbar/Navigation";
import Footer from "../footer/Footer";
import Cartcard from "./cartcard/Cartcard";

const Cart = () => {
  const { cart, dispatchcart } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const cartTotalAmount = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <Container>
      <div className="top">
        <Navigation />
      </div>
      {cartTotalItems < 1 ? (
        <div className="empty_cart">
          <p> you have nothing in your cart ?</p>
          <Link to="/allproducts">shop now</Link>
        </div>
      ) : (
        <div className="body">
          <div className="cart">
            <Cartcard cart={cart} dispatchcart={dispatchcart} />
          </div>
          <div className="checkout">
            <div className="checkout_container">
              <div className="total_card">
                <p>subtotal:</p>
                <p>ksh. {cartTotalAmount}</p>
              </div>
              <div className="total_card">
                <p>transport:</p>
                <p>ksh.00</p>
              </div>
              <div className="total_card">
                <p>Total:</p>
                <p>ksh. {cartTotalAmount}</p>
              </div>
            </div>{" "}
            <button>checkout</button>
          </div>
        </div>
      )}

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Cart;
