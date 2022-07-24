/** @format */

import "./App.css";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import { Context } from "./components/statemaneger/contextapi/Context";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Landingpage = lazy(() => import("./components/landingpage/Landingpage"));
const Allproducts = lazy(() => import("./components/allproducts/Allproducts"));
const Nonroute = lazy(() => import("./components/nonroute/Nonroute"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Singleproduct = lazy(() =>
  import("./components/singleproduct/Singleproduct")
);

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Context>
          <Suspense fallback={<h1>loading</h1>}>
            <Routes>
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/allproducts/:id" element={<Singleproduct />} />
              <Route path="/" element={<Landingpage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Nonroute />} />
            </Routes>
          </Suspense>
        </Context>
      </ScrollToTop>
    </div>
  );
}

export default App;
