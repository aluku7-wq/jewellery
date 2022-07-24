/** @format */

import { useState, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { controllScroll } from "../statemaneger/actioncreators/ActionCreators";
import { Container } from "./Navigation.styled";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag, MdOutlineSearch } from "react-icons/md";
import Searchbox from "../searchbox/Searchbox";

const Navigation = () => {
  const [searchstate, setsearchstate] = useState(false);
  const { scroll, cart, dispatchscroll } = useContext(jewelleryContext);
  const cartTotalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Container>
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

      {/* large screen */}
      {!searchstate && (
        <div className="large_screen">
          <Link to={"/"}>
            <img src="../images/markimages/logowhite.png" alt="" />
          </Link>
          <Link to={"/"} className="quick_links">
            home
          </Link>
          <Link to={"/allproducts"} className="quick_links">
            shop
          </Link>
          <Link to={""} className="quick_links">
            contacts
          </Link>{" "}
          <div className="search quick_links">
            <MdOutlineSearch
              className="icons"
              onClick={() => {
                setsearchstate((prev) => !prev);
                dispatchscroll(controllScroll());
              }}
            />
          </div>
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
      {/* search and drop_down screen */}
      {searchstate && (
        <div className="dropdown">
          <Searchbox
            searchstate={searchstate}
            setsearchstate={setsearchstate}
          />
        </div>
      )}
    </Container>
  );
};

export default Navigation;
