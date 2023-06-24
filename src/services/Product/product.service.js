import { productPrefix } from "constants/constants";
import axiosClient from "helpers/httpClient";

const productApi = {
  getListProduct(pageNumber) {
    const url = `${productPrefix}products?limit=20&skip=${pageNumber * 10}`;
    return axiosClient.get(url);
  },
  searchProductList(params) {
    const url = `${productPrefix}products/search?q=${params}`;
    return axiosClient.get(url);
  },
};
export default productApi;
