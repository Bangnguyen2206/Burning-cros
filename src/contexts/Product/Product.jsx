import { GET_PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "actions/Product";
import React, { createContext, useReducer, useState } from "react";
import {
  initialStateProduct,
  productReducer,
} from "reducers/Product/productReducer";
import productApi from "services/Product/product.service";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialStateProduct);

  const [flag, setFlag] = useState(false);

  const fetchProductList = async () => {
    return await productApi.getListProduct().then((res) => {
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: res.data,
      });
      return res.data;
    });
  };

  const searchProductList = async (params) => {
    return await productApi.searchProductList(params).then((res) => {
      dispatch({
        type: SEARCH_PRODUCT_LIST,
        payload: res.data,
      });
      return res.data;
    });
  };

  const recallApi = () => {
    setFlag(!flag);
  };

  const productsDocument = {
    products,
    flag,
    recallApi,
    fetchProductList,
    searchProductList,
  };

  return (
    <ProductContext.Provider value={productsDocument}>
      {children}
    </ProductContext.Provider>
  );
};
