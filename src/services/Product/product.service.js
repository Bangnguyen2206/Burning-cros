import axiosClient from "@/helpers/httpClient";

const productPrefix = "https://dummyjson.com/";
const productApi = {
  getListProduct() {
    const url = `${productPrefix}products`;
    return axiosClient.get(url);
  },
};
export default productApi;
