/** @format */

import { useState } from "react";
import { Container } from "./Singleproduct.styled";
import { jewellery } from "../utils/data";
import { useParams } from "react-router-dom";
import Navigation from "../navigationbar/Navigation";
import Footer from "../footer/Footer";
import Grid from "../allproducts/grid/Grid";
import { jewelleryContext } from "../statemaneger/contextapi/Context";
import { addToCart } from "../statemaneger/actioncreators/ActionCreators";
import { useContext } from "react";
import { motion } from "framer-motion";
import { singleAnimation } from "../animation/Animation";

const Singleproduct = () => {
  const { dispatchcart, scroll } = useContext(jewelleryContext);
  const { id } = useParams();
  const singleproduct = jewellery.find((item) => item.id === parseInt(id));
  singleproduct.quantity = 1;
  const related = jewellery.filter(
    (jewell) => jewell.category === singleproduct.category
  );
  const [imageIndex, setimageIndex] = useState(0);

  return (
    <Container
      style={{
        height: scroll ? "100vh" : null,
        overflow: scroll ? "hidden" : null,
      }}>
      <div className="header">
        <Navigation />
      </div>
      <div className="body">
        <div className="main_page">
          <motion.div
            variants={singleAnimation.image}
            initial="hidden"
            animate="visible"
            className="image_container">
            <div className="main_image">
              <img
                src={`../images/products/${singleproduct.images[imageIndex].name}`}
                alt=""
              />
            </div>
            <div className="image_tabs">
              {singleproduct.images.map((image, index) => {
                return (
                  <div className="tab" key={index}>
                    <img
                      src={`../images/products/${image.name}`}
                      alt=""
                      onClick={() => setimageIndex(index)}
                      style={{
                        border:
                          index === imageIndex ? `2px solid #f564a9` : null,
                        opacity: index === imageIndex ? `1` : null,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <div className="text">
            <motion.h3
              variants={singleAnimation.text}
              initial="hidden"
              animate="visible">
              {singleproduct.name}
            </motion.h3>
            <motion.p
              variants={singleAnimation.text}
              initial="hidden"
              animate="visible">
              <span>category: </span>
              {singleproduct.category}
            </motion.p>
            <motion.button
              variants={singleAnimation.text}
              initial="hidden"
              animate="visible"
              onClick={() => dispatchcart(addToCart(singleproduct))}>
              add to cart
            </motion.button>
          </div>
        </div>
      </div>
      <div className="related">
        <motion.h2
          variants={singleAnimation.related}
          initial="hidden"
          animate="visible">
          Related Jewellery
        </motion.h2>
        <div className="products_container">
          <Grid products={related} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Singleproduct;
