/** @format */

import React from "react";
import { Container } from "./List.styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { listAnimation } from "../../animation/Animation";

const List = ({ products }) => {
  return (
    <Container>
      <motion.div
        variants={listAnimation.parent}
        initial="hidden"
        animate="visible"
        exit="hide"
        className="list">
        {products.map((item, index) => {
          return (
            <Link to={`/allproducts/${item.id}`} key={index}>
              <motion.div variants={listAnimation.card} className="card">
                <motion.div
                  variants={listAnimation.image}
                  className="image_container">
                  <motion.img
                    src={`../images/products/${item.images[0].name}`}
                    alt=""
                  />
                </motion.div>
                <div className="text">
                  <motion.p variants={listAnimation.text}>{item.name}</motion.p>
                  <motion.p variants={listAnimation.text} className="price">
                    ksh. {item.price}
                  </motion.p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default List;
