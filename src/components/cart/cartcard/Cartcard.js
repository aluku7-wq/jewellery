/** @format */

import React from "react";
import { Container } from "./Cartcard.styled";
import { MdAdd, MdClose } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import {
  incQuantity,
  decQuantity,
  removeItem,
} from "../../statemaneger/actioncreators/ActionCreators";
import { motion } from "framer-motion";
import { cartAnimation } from "../../animation/Animation";

const Cartcard = ({ cart, dispatchcart }) => {
  return (
    <Container>
      <motion.div
        variants={cartAnimation.cart}
        initial="hidden"
        animate="visible"
        className="cart">
        {cart.map((item, index) => {
          return (
            <motion.div
              variants={cartAnimation.card}
              className="cart_cards"
              key={index}>
              <div className="product">
                <div className="image_container">
                  <img
                    src={`../images/products/${item.images[0].name}`}
                    alt=""
                  />
                </div>

                <div className="text">
                  <h5>{item.name}</h5>
                  <p>ksh. {item.price * item.quantity}</p>
                </div>
              </div>
              <div className="quantity">
                <div
                  className="button"
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatchcart(decQuantity(item));
                    } else {
                      dispatchcart(removeItem(item));
                    }
                  }}>
                  <HiMinusSm />
                </div>
                <p>
                  {item.quantity < 10 && 0}
                  {item.quantity}
                </p>
                <div
                  className="button"
                  onClick={() => dispatchcart(incQuantity(item))}>
                  <MdAdd />
                </div>
              </div>
              <div className="edit">
                <MdClose
                  className="button"
                  onClick={() => dispatchcart(removeItem(item))}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Cartcard;
