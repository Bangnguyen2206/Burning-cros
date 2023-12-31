import axios from "axios";
import { useCallback, useEffect, useRef } from "react";

/**
 * When a component unmounts, we need to cancel any potentially
 * ongoing Axios calls that result in a state update on success / fail.
 * This function sets up the appropriate useEffect to handle the canceling.
 *
 * @returns {newCancelToken: function, isCancel: function}
 * newCancelToken - used to generate the cancel token sent in the Axios request.
 * isCancel - used to check if error returned in response is a cancel token error.
 */

export const useCancelToken = () => {
  const axiosSource = useRef();
  const isCancel = axios.isCancel;
  const newCancelToken = useCallback(() => {
    axiosSource.current = axios?.CancelToken?.source();
    return axiosSource?.current?.token;
  }, []);

  useEffect(
    () => () => {
      if (axiosSource.current) axiosSource.current.cancel();
    },
    []
  );

  return { newCancelToken, isCancel };
};
