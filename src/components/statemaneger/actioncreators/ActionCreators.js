/** @format */
import {
  addtocart,
  incquantity,
  decquantity,
  removeitem,
  clearcart,
} from "../actions/Actions";
export const addToCart = (data) => {
  return { type: addtocart, payload: data };
};
export const incQuantity = (data) => {
  return { type: incquantity, payload: data };
};
export const decQuantity = (data) => {
  return { type: decquantity, payload: data };
};
export const removeItem = (data) => {
  return { type: removeitem, payload: data };
};
export const clearCart = (data) => {
  return { type: clearcart, payload: data };
};
