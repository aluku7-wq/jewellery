/** @format */

import React from "react";
import { Container } from "./Noneroute.styled";
import { Link } from "react-router-dom";

const Nonroute = () => {
  return (
    <Container>
      <div className="body">
        <h1>404 this page is not found</h1>
        <br />
        <Link to="/">
          <button>home</button>
        </Link>
      </div>
    </Container>
  );
};

export default Nonroute;
