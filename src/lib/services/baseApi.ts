import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";

export default class BaseApi {
  private _axiosInstance: AxiosInstance | undefined;
  private _baseURL: string;
  private _token: string | null;

  constructor() {
    this._baseURL = process.env.API_URL ?? "";
    this._token = null;

    this.createAxiosInstance();
  }

  private defaultOptions = (): any => {
    // Set the AUTH token for any request

    const authHttpHeader = "Bearer token"; // Token goes here
    this._token = authHttpHeader;

    const options = {
      baseURL: this._baseURL,
      // withCredentials: true, // Window Authentification
      headers: {
        Accept: "application/json",
        // 'Authorization': `${authHttpHeader}` // OAuth Authetification
      },
    };
    return options;
  };

  /**
   * Create axios instance
   */
  private createAxiosInstance() {
    this._axiosInstance = axios.create(this.defaultOptions());

    // this.checkAutorization()

    // Add a request interceptor
    this._axiosInstance.interceptors.request.use(
      (config) => config,
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this._axiosInstance.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  protected getToken() {
    return this._token;
  }

  protected get(endpoint: string, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.get(`${endpoint}`, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected post(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.post(`${endpoint}`, data, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected put(endpoint: string, data: {}, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.put(`${endpoint}`, data, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  protected delete(endpoint: string, id: any, conf = {}): AxiosPromise {
    return new Promise((resolve, reject) => {
      this._axiosInstance!.delete(`${endpoint}/${id}`, conf)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Handle success in http requests, a wrapper to forward the `AxiosResponse`
   * @param response
   * @returns a rejected `Promise`
   */
  private handleSuccess(response: AxiosResponse): AxiosResponse {
    // console.log('handleSuccess' + JSON.stringify(response))
    return response;
  }

  /**
   * Handle errors in http requests
   * @param error the error to handle
   * @returns a rejected `Promise`
   */
  private handleError(error: any): Promise<never> {
    console.log(`HttpService::Error : ${error}`);
    if (!error.response) {
      console.error(`Network error: ${error}`);
    } else {
      if (error.response !== undefined) {
        const { status } = error.response;
        if (status === 401 || status === 500) {
          console.error(
            `HttpService::Error(401 or 500) : ${error.response.data.Message}`
          );
        }
      }
    }
    return Promise.reject(error);
  }
}
