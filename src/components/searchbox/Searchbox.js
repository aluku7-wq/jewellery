/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Seacrbox.styled";
import { jewellery } from "../utils/data";
import { MdClose } from "react-icons/md";

const Searchbox = ({ setsearchstate }) => {
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState(jewellery);
  const searchHandler = () => {
    if (search.length > 0) {
      setsuggestions(
        jewellery.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    searchHandler();
  }, [search]);
  return (
    <Container onClick={() => setsearchstate(false)}>
      <div className="body" onClick={(e) => e.stopPropagation()}>
        <div className="input_container">
          <div className="close_btn">
            <MdClose onClick={() => setsearchstate(false)} />
          </div>
          <input
            type="text"
            placeholder="search jewellery names"
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        {search.length > 0 && (
          <div className="dropdown_container">
            {suggestions.map((item, index) => {
              return (
                <Link
                  to={`/allproducts/${item.id}`}
                  className="card"
                  key={index}>
                  <img
                    src={`./images/products/${item.images[0].name}`}
                    alt=""
                  />
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Searchbox;
