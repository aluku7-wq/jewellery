/** @format */
import { useContext } from "react";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import { jewelleryContext } from "./components/statemaneger/contextapi/Context";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Preloader from "./components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import SideDrop from "./components/sidedropdown/SideDrop";

const Landingpage = lazy(() => import("./components/landingpage/Landingpage"));
const Allproducts = lazy(() => import("./components/allproducts/Allproducts"));
const Nonroute = lazy(() => import("./components/nonroute/Nonroute"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Singleproduct = lazy(() =>
  import("./components/singleproduct/Singleproduct")
);

function App() {
  const location = useLocation();
  const { scroll } = useContext(jewelleryContext);
  return (
    <div className="App">
      <ScrollToTop>
        <Suspense fallback={<Preloader />}>
          <AnimatePresence exitBeforeEnter>
            {scroll && <SideDrop />}
          </AnimatePresence>

          <Routes>
            <Route path="/allproducts" element={<Allproducts />} />
            <Route path="/allproducts/:id" element={<Singleproduct />} />
            <Route path="/" element={<Landingpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nonroute />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </div>
  );
}

export default App;
