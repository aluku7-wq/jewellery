/** @format */

import React from "react";
import { Container } from "./List.styled";
import { Link } from "react-router-dom";

const List = ({ products }) => {
  return (
    <Container>
      {products.map((item, index) => {
        return (
          <Link to={`/allproducts/${item.id}`} className="card" key={index}>
            <img src={`../images/products/${item.images[0].name}`} alt="" />
            <div className="text">
              <p>{item.name}</p>
              <p className="price">ksh. {item.price}</p>
            </div>
          </Link>
        );
      })}
    </Container>
  );
};

export default List;
