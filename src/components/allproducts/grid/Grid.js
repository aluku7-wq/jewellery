/** @format */

import React from "react";
import { Container } from "./Grid.styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation } from "../../animation/Animation";

const Grid = ({ products }) => {
  return (
    <Container>
      <motion.div
        variants={gridAnimation.parent}
        initial="hidden"
        animate="visible"
        exit="hide"
        className="grid">
        {products.map((item, index) => {
          return (
            <Link to={`/allproducts/${item.id}`} key={index}>
              <motion.div variants={gridAnimation.card} className="card">
                <img src={`../images/products/${item.images[0].name}`} alt="" />
                <p>{item.name}</p>
                <p className="price">ksh. {item.price}</p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Grid;
