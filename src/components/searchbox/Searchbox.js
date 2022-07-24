/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Link } from "react-router-dom";
import { Container } from "./Seacrbox.styled";
import { jewellery } from "../utils/data";
import { MdClose, MdOutlineSearch } from "react-icons/md";

const Searchbox = ({ searchstate, setsearchstate }) => {
  const { dispatchscroll } = useContext(jewelleryContext);
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState(jewellery);
  const focusRef = useRef();

  useEffect(() => {
    if (search.length > 0) {
      setsuggestions(
        jewellery.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  useEffect(() => {
    if (searchstate) {
      focusRef.current.focus();
    }
  }, [searchstate]);

  const handleDisplay = () => {
    setsearchstate((prev) => !prev);
    dispatchscroll(controllScroll());
  };
  return (
    <Container>
      <div className="input_container">
        <MdOutlineSearch className="icon" />
        <input
          type="text"
          placeholder="search jewellery names"
          onChange={(e) => setsearch(e.target.value)}
          ref={focusRef}
        />
        <div className="close_btn">
          <MdClose onClick={() => handleDisplay()} />
        </div>
      </div>

      <div className="dropdown_container" onClick={() => handleDisplay()}>
        <div className="container" onClick={(e) => e.stopPropagation()}>
          {search.length > 0 ? (
            <>
              {suggestions.length > 0 ? (
                <h3>suggested searches</h3>
              ) : (
                <h3>No Matches</h3>
              )}
              {suggestions.map((item, index) => {
                return (
                  <Link
                    to={`/allproducts/${item.id}`}
                    className="search_card"
                    key={index}
                    onClick={() => handleDisplay()}>
                    <MdOutlineSearch className="icon" />
                    <img
                      src={`../images/products/${item.images[0].name}`}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className="quick_links">
              <h3>quick links</h3>
              <Link to="" onClick={() => handleDisplay()}>
                home
              </Link>
              <Link to="" onClick={() => handleDisplay()}>
                shop
              </Link>
              <Link to="" onClick={() => handleDisplay()}>
                contact
              </Link>
              <Link to="" onClick={() => handleDisplay()}>
                cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Searchbox;
