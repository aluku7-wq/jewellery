/** @format */

import React, { useState } from "react";
import { TbChevronDown } from "react-icons/tb";
import { Container } from "./Filter.styled";
import { jewellery } from "../utils/data";

const Filter = ({ settitle, setfiltered }) => {
  const [dropdown, setdropdown] = useState(false);
  const options = jewellery.map((item) => item.category);
  let unique = [...new Set(jewellery.map((item) => item.category))];
  const handleFilter = (opt) => {
    if (opt === "variety") {
      setfiltered(jewellery.filter((item) => item.category !== opt));
      settitle(opt);
    } else {
      setfiltered(jewellery.filter((item) => item.category === opt));
      settitle(opt);
    }
  };
  return (
    <Container className="select" onClick={() => setdropdown((prev) => !prev)}>
      <div className="option">
        <p>filter by category</p>
        <TbChevronDown />
      </div>
      {dropdown && (
        <div className="dropdown">
          <div className="option" onClick={() => handleFilter("variety")}>
            <p>variety</p>
          </div>
          {unique.map((item, index) => {
            return (
              <div
                className="option"
                key={index}
                onClick={() => handleFilter(item)}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default Filter;
