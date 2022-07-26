/** @format */

import { useState, useContext } from "react";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { Container } from "./Landingpage.styled";
import Navigation from "../navigationbar/Navigation";
import { Link } from "react-router-dom";
import { jewellery } from "../utils/data";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { landingAnimation } from "../animation/Animation";

const Landingpage = () => {
  const { scroll } = useContext(jewelleryContext);
  const recent_products = jewellery.slice(0, 3);
  const best_sellers = jewellery.slice(
    jewellery.length - 4,
    jewellery.length - 1
  );
  const [navbg, setnavbg] = useState(false);
  const changenavColor = () => {
    if (window.scrollY > 100) {
      setnavbg(true);
    } else {
      setnavbg(false);
    }
  };
  window.addEventListener("scroll", changenavColor);

  return (
    <Container
      style={{
        height: scroll ? "100vh" : null,
        overflow: scroll ? "hidden" : null,
      }}>
      <motion.div
        variants={landingAnimation.parent}
        initial="hidden"
        animate="visible"
        exit="hide"
        className="wrapper">
        <Navigation />

        {/* hero section */}
        <motion.div
          variants={landingAnimation.hero}
          // initial="hidden"
          // animate="visible"
          // exit="hide"
          className="hero_section"
          onScroll={(e) => console.log("scrolling!", e.target.scrollTop)}>
          <div className="overlay">
            <div className="hero_text">
              <motion.h1 variants={landingAnimation.heroText}>
                Aluku jewellery
              </motion.h1>
              <motion.h3 variants={landingAnimation.heroText}>
                The essence of elegance and class in one place
              </motion.h3>
              <Link to="/allproducts">
                <motion.button
                  variants={landingAnimation.heroButton}
                  className="home_btn">
                  shop now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* recent products section */}
        <motion.div
          variants={landingAnimation.recent}
          className="recent_section">
          <h3>Recent jewellery</h3>
          <div className="container">
            {recent_products.map((jewell, index) => {
              return (
                <Link
                  to={`/allproducts/${jewell.id}`}
                  className="card"
                  key={index}>
                  <img
                    src={`./images/products/${jewell.images[0].name}`}
                    alt=""
                  />
                  <p>{jewell.name}</p>
                  <p className="price">ksh. {jewell.price}</p>
                </Link>
              );
            })}
          </div>
          <Link to="/allproducts">
            <button className="recent_button">shop all</button>
          </Link>
        </motion.div>
        {/* burner one section */}
        <div className="burner_one">
          <div className="overlay">
            <h2>
              your ultimate destination to a avariety of jewellery collection
            </h2>
            <Link to="/allproducts">
              <button>browse now</button>
            </Link>
          </div>
        </div>
        {/* best sellers section */}
        <div className="best_sellers">
          <h3>Best sellers</h3>
          <div className="container">
            {best_sellers.map((item, index) => {
              return (
                <Link
                  to={`/allproducts/${item.id}`}
                  className="card"
                  key={index}>
                  <img
                    src={`./images/products/${item.images[0].name}`}
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p className="price">ksh. {item.price}</p>
                </Link>
              );
            })}
          </div>
          <Link to="/allproducts">
            <button>shop all</button>
          </Link>
        </div>
        {/* footer section */}
        <Footer />
      </motion.div>
    </Container>
  );
};

export default Landingpage;
