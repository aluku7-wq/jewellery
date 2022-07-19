/** @format */

import React from "react";
import { Container } from "./Grid.styled";
import { Link } from "react-router-dom";

const Grid = ({ products }) => {
  return (
    <Container>
      {products.map((item, index) => {
        return (
          <Link to={`/allproducts/${item.id}`} className="card" key={index}>
            <img src={`../images/products/${item.images[0].name}`} alt="" />
            <p>{item.name}</p>
            <p className="price">ksh. {item.price}</p>
          </Link>
        );
      })}
    </Container>
  );
};

export default Grid;
