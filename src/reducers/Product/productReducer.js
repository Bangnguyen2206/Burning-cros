import { GET_PRODUCT_LIST } from "actions/Product";

// eslint-disable-next-line no-unused-vars
export const initialStateProduct = {
  products: [],
};

export const productReducer = (state = initialStateProduct, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_LIST:
      return { ...state, products: payload };

    default:
      return state;
  }
};
