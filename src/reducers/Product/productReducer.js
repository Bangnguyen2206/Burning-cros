import { GET_PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "actions/Product";

// eslint-disable-next-line no-unused-vars
export const initialStateProduct = {
  products: [],
};

export const productReducer = (state = initialStateProduct, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCT_LIST:
      return { ...state, products: payload.products };
    case SEARCH_PRODUCT_LIST:
      return { ...state, products: payload.products };

    default:
      return state;
  }
};
