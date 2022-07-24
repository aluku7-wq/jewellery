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
          <div className="image_container">
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
          </div>
          <div className="text">
            <h3>{singleproduct.name}</h3>
            <p>
              <span>category: </span>
              {singleproduct.category}
            </p>
            <button onClick={() => dispatchcart(addToCart(singleproduct))}>
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="related">
        <h2>Related Jewellery</h2>
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
