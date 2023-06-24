import { productPrefix } from "constants/constants";
import axiosClient from "helpers/httpClient";

const productApi = {
  getListProduct() {
    const url = `${productPrefix}products`;
    return axiosClient.get(url);
  },
  searchProductList(params) {
    const url = `${productPrefix}products/search?q=${params}`;

    return axiosClient.get(url);
  },
};
export default productApi;