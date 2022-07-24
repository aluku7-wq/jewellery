/** @format */
export const scrollReducer = (state, action) => {
  switch (action.type) {
    case "SCROLL":
      return !state;
    default:
      console.log("notthing");
      return state;
  }
};
