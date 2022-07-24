/** @format */

import React, { useState, useEffect, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import Navigation from "../navigationbar/Navigation";
import { Container } from "./Allproducts.styled";
import Pagination from "../pagination/Pagination";
import Footer from "../footer/Footer";
import Filter from "../filter/Filter";
import { jewellery } from "../utils/data";
import Grid from "./grid/Grid";
import List from "./list/List";

const Allproducts = () => {
  const [filtered, setfiltered] = useState(jewellery);
  const [paginated, setpaginated] = useState([]);
  const [title, settitle] = useState("variety");
  const [gridview, setgridview] = useState(true);
  const { scroll } = useContext(jewelleryContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container
      style={{
        height: scroll ? "100vh" : null,
        overflow: scroll ? "hidden" : null,
      }}>
      <div className="header">
        <Navigation />
        <div className="page_heading">
          <div className="inner_container">
            <h3>Jewellery</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className="inner_navigation">
        <div className="layout">
          <CgMenuGridR
            className="grid"
            onClick={() => setgridview(true)}
            style={{ color: gridview ? `#f564a9` : null }}
          />
          <FaList
            className="list"
            onClick={() => setgridview(false)}
            style={{ color: !gridview ? `#f564a9` : null }}
          />
        </div>
        <div className="filter">
          <Filter
            settitle={settitle}
            filtered={filtered}
            setfiltered={setfiltered}
          />
        </div>
      </div>

      <div className="body">
        {gridview ? (
          <Grid products={paginated} />
        ) : (
          <List products={paginated} />
        )}
      </div>
      <div className="pagination"></div>
      <div className="footer_pagination">
        <Pagination
          setpaginated={setpaginated}
          filtered={filtered}
          setfiltered={setfiltered}
        />
        <Footer />
      </div>
    </Container>
  );
};

export default Allproducts;
