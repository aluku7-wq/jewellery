/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Cart.styled";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import Navigation from "../navigationbar/Navigation";
import Footer from "../footer/Footer";
import Cartcard from "./cartcard/Cartcard";
import { motion } from "framer-motion";
import { cartAnimation } from "../animation/Animation";

const Cart = () => {
  const { scroll, cart, dispatchcart } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const cartTotalAmount = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <Container
      style={{
        height: scroll ? "100vh" : null,
        overflow: scroll ? "hidden" : null,
      }}>
      <Navigation />

      {cartTotalItems < 1 ? (
        <motion.div className="empty_cart">
          <motion.p
            variants={cartAnimation.empty}
            initial="hidden"
            animate="visible">
            you have nothing in your cart !
          </motion.p>
          <Link to="/allproducts">
            <motion.button
              variants={cartAnimation.empty}
              initial="hidden"
              animate="visible">
              shop now
            </motion.button>
          </Link>
        </motion.div>
      ) : (
        <div className="body">
          <div className="cart">
            <Cartcard cart={cart} dispatchcart={dispatchcart} />
          </div>
          <motion.div
            variants={cartAnimation.checkout}
            initial="closed"
            animate="open"
            className="checkout">
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
          </motion.div>
        </div>
      )}

      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Cart;
