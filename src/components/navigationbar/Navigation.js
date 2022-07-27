/** @format */

import { useState, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Container } from "./Navigation.styled";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdOutlineSearch } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Searchbox from "../searchbox/Searchbox";
import { motion, AnimatePresence } from "framer-motion";
import { navAnimation, dropAnimation } from "../animation/Animation";

const Navigation = () => {
  const { scroll, cart, dispatchscroll } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Container>
      <HiOutlineMenuAlt4
        className="menu"
        onClick={() => dispatchscroll(controllScroll())}
      />
      {/* logo */}
      <Link to={"/"}>
        <motion.img
          src="../images/markimages/logowhite.png"
          alt=""
          variants={navAnimation.children}
        />
      </Link>
      {/* nav links */}
      <Link to={"/"} className="quick_links">
        <motion.p variants={navAnimation.children}>home</motion.p>
      </Link>
      <Link to={"/allproducts"} className="quick_links">
        <motion.p variants={navAnimation.children}>shop</motion.p>
      </Link>
      <Link to={"/contact"} className="quick_links">
        <motion.p variants={navAnimation.children}>contacts</motion.p>
      </Link>
      {/* search and cart  links */}
      <motion.div
        variants={navAnimation.children}
        className="search quick_links"
        onClick={() => dispatchscroll(controllScroll())}>
        <motion.p variants={navAnimation.children}>
          <MdOutlineSearch className="icons" />
        </motion.p>
      </motion.div>
      <Link to="/cart" className="bag">
        <motion.p variants={navAnimation.children}>
          <MdOutlineShoppingBag className="icons" />
        </motion.p>
        {cartTotalItems > 0 && (
          <div className="cart_total">
            <p>
              {cartTotalItems < 10 && 0}
              {cartTotalItems}
            </p>
          </div>
        )}
      </Link>
    </Container>
  );
};

export default Navigation;
