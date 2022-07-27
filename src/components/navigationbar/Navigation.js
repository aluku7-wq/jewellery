/** @format */

import { useState, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Container } from "./Navigation.styled";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdOutlineSearch } from "react-icons/md";
import Searchbox from "../searchbox/Searchbox";
import { motion, AnimatePresence } from "framer-motion";
import { navAnimation, dropAnimation } from "../animation/Animation";

const Navigation = () => {
  const [searchstate, setsearchstate] = useState(false);
  const { scroll, cart, dispatchscroll } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Container>
      {!searchstate && (
        <div className="small_screen">
          <div
            className="menu"
            style={{
              height: scroll ? "10px" : null,
              justifyContent: scroll ? "center" : null,
            }}
            onClick={() => {
              setsearchstate((prev) => !prev);
              dispatchscroll(controllScroll());
            }}>
            <div
              className="bar1"
              style={{
                transform: scroll ? "rotate(45deg)" : null,
                marginBottom: scroll ? "-2px" : null,
              }}></div>
            <div
              className="bar2"
              style={{
                transform: scroll ? "rotate(-45deg)" : null,
              }}></div>
          </div>
          <Link to={"/"}>
            <img src="../images/markimages/logowhite.png" alt="" />
          </Link>{" "}
          <Link to="/cart" className="bag">
            <MdOutlineShoppingBag className="icons" />
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
      )}

      {/* large screen */}
      {!searchstate && (
        <motion.div
          className="large_screen"
          variants={navAnimation.parent}
          initial="hidden"
          animate="visible"
          exit="hide">
          <Link to={"/"}>
            <motion.img
              src="../images/markimages/logowhite.png"
              alt=""
              variants={navAnimation.children}
            />
          </Link>
          <Link to={"/"} className="quick_links">
            <motion.p variants={navAnimation.children}>home</motion.p>
          </Link>
          <Link to={"/allproducts"} className="quick_links">
            <motion.p variants={navAnimation.children}>shop</motion.p>
          </Link>
          <Link to={"/contact"} className="quick_links">
            <motion.p variants={navAnimation.children}>contacts</motion.p>
          </Link>{" "}
          <motion.div
            variants={navAnimation.children}
            className="search quick_links">
            <motion.p variants={navAnimation.children}>
              <MdOutlineSearch
                className="icons"
                onClick={() => {
                  setsearchstate((prev) => !prev);
                  dispatchscroll(controllScroll());
                }}
              />
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
        </motion.div>
      )}
      {/* drop down */}

      {searchstate && (
        <motion.div
          className="dropdown"
          variants={dropAnimation.parent}
          initial="hidden"
          animate="visible"
          exit="hide"
          key={"aluku"}>
          <Searchbox
            searchstate={searchstate}
            setsearchstate={setsearchstate}
          />
        </motion.div>
      )}
    </Container>
  );
};

export default Navigation;
