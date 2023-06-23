import axios from "axios";
import { BASE_URL } from "configs/configs";
import { toast } from "react-toastify";
import { handleResponseError } from "./common";

const redirectSuffix = `/auth/login?next=/home`;

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    const { request } = res;
    if (request) {
      const { responseURL } = request;

      if (responseURL && responseURL.includes("login?next")) {
        window.location.href = redirectSuffix;
      } else if (res.data.status === 401) {
        window.location.href = redirectSuffix;
      } else {
        return res;
      }
    } else {
      return res;
    }
  },
  (error) => {
    toast.dismiss();
    if (!error.response) {
      return handleResponseError(error);
    }
    const { data } = error.response;
    const { detailError, errors } = data;

    if (error.response.status === 403) {
      const messageDetail = error.response.data.errors.detail;
      if (messageDetail) {
        toast.error(messageDetail);
      }
      return data;
    } else if (error.response.status === 401) {
      window.location.href = redirectSuffix;
    } else if (error.response.status === 400) {
      // future handle return message
      const messageDetail = error.response.data.errors.detail;
      if (messageDetail) {
        toast.error(messageDetail);
      } else if (errors) {
        const stringErrors = new Error(JSON.stringify(errors));
        if (stringErrors) {
          toast.error(stringErrors.toString());
        }
      }
      return data;
    } else if (error.response.status === 500) {
      axios
        .create({
          withCredentials: true,
          baseURL: `${"123"}`,
          headers: {
            "Content-Type": "application/json",
          },
        })({
          url: `base/maintenance-status`,
          method: "get",
        })
        .then((res) => {
          if (res.data.result?.is_maintenance) {
            window.location.href = "/maintenance";
          }
        });
    }
    if (detailError) {
      // future handle return message
    } else {
      // future handle return message
    }

    return handleResponseError(error);
  }
);

export default axiosInstance;
