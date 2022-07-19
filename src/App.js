/** @format */

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Landingpage from "./components/landingpage/Landingpage";
import Allproducts from "./components/allproducts/Allproducts";
import { Context } from "./components/statemaneger/contextapi/Context";
import Singleproduct from "./components/singleproduct/Singleproduct";
import Nonroute from "./components/nonroute/Nonroute";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Context>
          <Routes>
            <Route path="/allproducts" element={<Allproducts />} />
            <Route path="/allproducts/:id" element={<Singleproduct />} />
            <Route path="/" element={<Landingpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Nonroute />} />
          </Routes>
        </Context>
      </ScrollToTop>
    </div>
  );
}

export default App;
