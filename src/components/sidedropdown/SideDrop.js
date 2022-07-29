/** @format */

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./SideDrop.style";
import { jewellery } from "../utils/data";
import Searchbox from "../searchbox/Searchbox";
import { motion } from "framer-motion";
import { sideAnimation } from "../animation/Animation";
import { MdClose, MdOutlineSearch } from "react-icons/md";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";

const SideDrop = () => {
  const { dispatchscroll } = useContext(jewelleryContext);
  const [suggestions, setsuggestions] = useState([]);
  const [searchstate, setsearchstate] = useState(false);

  const toggleSidebar = () => {
    dispatchscroll(controllScroll());
  };

  return (
    <Container onClick={() => toggleSidebar()}>
      <motion.div
        variants={sideAnimation.parent}
        initial="hidden"
        animate="visible"
        exit="hide"
        className="wrapper">
        <Searchbox
          setsuggestions={setsuggestions}
          jewellery={jewellery}
          searchstate={searchstate}
          setsearchstate={setsearchstate}
        />
        <div className="drop_container" onClick={(e) => e.stopPropagation()}>
          {!searchstate ? (
            <div className="quick_links">
              <motion.h3 variants={sideAnimation.links}>quick links</motion.h3>
              <Link to="/" onClick={() => toggleSidebar()}>
                <motion.p variants={sideAnimation.links}> home</motion.p>
              </Link>
              <Link to="/allproducts" onClick={() => toggleSidebar()}>
                <motion.p variants={sideAnimation.links}> shop</motion.p>
              </Link>
              <Link to="/contact" onClick={() => toggleSidebar()}>
                <motion.p variants={sideAnimation.links}>contact</motion.p>
              </Link>
              <Link to="/cart" onClick={() => toggleSidebar()}>
                <motion.p variants={sideAnimation.links}>cart </motion.p>
              </Link>
            </div>
          ) : (
            <motion.div
              variants={sideAnimation.parent}
              className="search"
              onClick={(e) => e.stopPropagation()}>
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
                    onClick={() => toggleSidebar()}>
                    <MdOutlineSearch className="icon" />
                    <img
                      src={`../images/products/${item.images[0].name}`}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </div>
      </motion.div>
    </Container>
  );
};

export default SideDrop;
