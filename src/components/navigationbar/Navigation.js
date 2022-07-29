/** @format */

import { useState, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Container } from "./Navigation.styled";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navigation = () => {
  const { scroll, cart, dispatchscroll } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Container>
      <div className="navbar">
        <HiOutlineMenuAlt4
          className="menu"
          onClick={() => dispatchscroll(controllScroll())}
        />
        {/* logo */}
        <Link to={"/"}>
          <img src="../images/markimages/logowhite.png" alt="" />
        </Link>
        {/* nav links */}
        <Link to={"/"} className="quick_links">
          <p>home</p>
        </Link>
        <Link to={"/allproducts"} className="quick_links">
          <p>shop</p>
        </Link>
        <Link to={"/contact"} className="quick_links">
          <p>contacts</p>
        </Link>
        {/* search and cart  links */}
        <div
          className="search quick_links"
          onClick={() => dispatchscroll(controllScroll())}>
          <p>
            <MdOutlineSearch className="icons" />
          </p>
        </div>
        <Link to="/cart" className="bag">
          <p>
            <MdOutlineShoppingBag className="icons" />
          </p>
          {cartTotalItems > 0 && (
            <div className="cart_total">
              <p>
                {cartTotalItems < 10 && 0}
                {cartTotalItems}
              </p>
            </div>
          )}
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;
