/** @format */

import { useReducer, createContext } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { scrollReducer } from "../reducers/scrollReducer";

export const jewelleryContext = createContext();
export const Context = (props) => {
  const [cart, dispatchcart] = useReducer(CartReducer, []);
  const [scroll, dispatchscroll] = useReducer(scrollReducer, false);
  const infor = { cart, dispatchcart, scroll, dispatchscroll };
  return (
    <jewelleryContext.Provider value={infor}>
      {props.children}
    </jewelleryContext.Provider>
  );
};
