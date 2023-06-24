import { GET_PRODUCT_LIST, SEARCH_PRODUCT_LIST } from "actions/Product";
import { createContext, useReducer, useState } from "react";
import {
  initialStateProduct,
  productReducer,
} from "reducers/Product/productReducer";
import productApi from "services/Product/product.service";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialStateProduct);
  const [flag, setFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductList = async (pageNumber) => {
    setIsLoading(true);
    return await productApi
      .getListProduct(pageNumber)
      .then((res) => {
        setIsLoading(false);
        dispatch({
          type: GET_PRODUCT_LIST,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        setIsLoading(false);
        return err;
      });
  };

  const searchProductList = async (params) => {
    setIsLoading(true);
    return await productApi
      .searchProductList(params)
      .then((res) => {
        setIsLoading(false);
        dispatch({
          type: SEARCH_PRODUCT_LIST,
          payload: res.data,
        });
        return res.data;
      })
      .catch((err) => {
        setIsLoading(false);
        return err;
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
    isLoading,
  };

  return (
    <ProductContext.Provider value={productsDocument}>
      {children}
    </ProductContext.Provider>
  );
};
