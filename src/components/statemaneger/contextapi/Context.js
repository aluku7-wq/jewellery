/** @format */

import { useState, useEffect, useReducer, createContext } from "react";
import { CartReducer } from "../reducers/CartReducer";

export const jewelleryContext = createContext();
export const Context = (props) => {
  const [cart, dispatchcart] = useReducer(CartReducer, []);
  const infor = { cart, dispatchcart };
  return (
    <jewelleryContext.Provider value={infor}>
      {props.children}
    </jewelleryContext.Provider>
  );
};
