/** @format */

import React from "react";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      const tempcart = state.filter((iterm) => iterm.id === action.payload.id);
      if (tempcart.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case "INCQUANTITY":
      let tempcart2 = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempcart2;
    case "DECQUANTITY":
      let tempcart3 = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcart3;
    case "REMOVEITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEARCART":
      return [];
    default:
      return state;
  }
};
