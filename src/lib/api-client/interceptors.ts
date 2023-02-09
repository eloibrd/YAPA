import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import handleError from "./httpErrorHandler";

/**
 * Handle success in http responses
 *
 * A wrapper to forward the `AxiosResponse`
 *
 * @param response
 * @returns a rejected `Promise`
 */
function _successHandler(response: AxiosResponse): AxiosResponse {
  // console.log('handleSuccess' + JSON.stringify(response))
  return response;
}

/**
 * Handle errors in http responses
 *
 * @param error the error to handle
 * @returns a rejected `Promise`
 */
function _errorHandler(error: any): Promise<never> {
  console.log(`HttpService::Error : ${error}`);
  if (!error.response) {
    console.error(`Network error: ${error}`);
  } else {
    handleError(error.response.status);
  }
  return Promise.reject(error);
}

/**
 * Initialise interceptors for a given `AxiosInstance`
 *
 * @param axiosInstance `AxiosInstance` to initialise
 */
export default function initInterceptors(axiosInstance: AxiosInstance) {
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      return request;
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(_successHandler, _errorHandler);
}
