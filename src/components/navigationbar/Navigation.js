/** @format */

import { useState, useContext } from "react";
import { Container } from "./Navigation.styled";
import { Link } from "react-router-dom";
import { MdPerson, MdShoppingBag } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import Searchbox from "../searchbox/Searchbox";
import { jewelleryContext } from "../statemaneger/contextapi/Context";

const Navigation = () => {
  const [searchstate, setsearchstate] = useState(false);
  const { cart } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Container>
      <div className="top_section">
        <div className="section_one">
          <div className="menu">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          {/* <Link to={"/"}>home</Link>
          <Link to={"/allproducts"}>shop</Link>
          <Link to={""}>contacts</Link> */}
        </div>
        <div className="section_two">
          <div className="log_container">
            <Link to={"/"}>
              <p className="logo">aluku</p>
              <p>jewellery</p>
            </Link>
          </div>
        </div>
        <div className="section_three">
          <Link to="/cart" className="bag">
            <MdShoppingBag className="icons" />
            {cartTotalItems > 0 && (
              <div className="cart_total">
                <p>
                  {cartTotalItems < 10 && 0}
                  {cartTotalItems}
                </p>
              </div>
            )}
          </Link>
          <div className="search">
            <RiSearchLine
              className="icons"
              onClick={() => setsearchstate(true)}
            />
          </div>
        </div>
      </div>
      <div className="bottom_section">
        {searchstate && <Searchbox setsearchstate={setsearchstate} />}
      </div>
    </Container>
  );
};

export default Navigation;
